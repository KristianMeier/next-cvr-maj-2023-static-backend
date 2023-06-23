import { getConvertedCompanyData } from 'utils'
import { CompanyTable } from 'components/company/company-table'
import Link from 'next/link'
import { SEARCH_PATH } from 'constants/constants'
import contentData from 'constants/database.json'
import { useTranslate } from 'translations/useTranslate'
import { CompanyData } from 'types/sharedTypes'

interface CompanyProps {
  selectedCompany: CompanyData
}

const Company = ({ selectedCompany }: CompanyProps) => {
  const { t } = useTranslate()

  const formattedCompany = getConvertedCompanyData(selectedCompany)
  const companyName = t(selectedCompany?.companyName)

  if (!formattedCompany) return <h2>{t('companies.nocompanies')}</h2>

  return (
    <section className="company-page">
      <Link
        className="back-to-search"
        href={SEARCH_PATH}>
        {t('company.back.to.search')}
      </Link>
      <h2> {companyName} </h2>
      <CompanyTable company={formattedCompany} />
    </section>
  )
}

interface Params {
  params: {
    uid: string
  }
}

export const getStaticProps = async ({ params }: Params) => {
  const companies = contentData.companiesData
  const selectedCompany = companies?.find(
    (company) => company.uid === params.uid
  )

  return {
    props: {
      selectedCompany,
    },
  }
}

interface StaticPaths {
  locales: string[]
}

export const getStaticPaths = async ({ locales }: StaticPaths) => {
  const companies = contentData.companiesData

  const paths = companies
    .map(({ uid }) =>
      locales.map((locale) => ({
        params: { uid },
        locale,
      }))
    )
    .flat()

  return {
    paths: paths,
    fallback: false,
  }
}

export default Company
