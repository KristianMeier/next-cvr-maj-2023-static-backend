import { useEffect } from 'react'
import { SearchCompany } from 'components/search/search-company'
import { SiteContextProps, useSiteContext } from 'context/site-context'
import { getConvertedSearchData, getFilteredCompanies } from 'utils'
import { useTranslate } from 'translations/useTranslate'
import { CompanyData } from 'types/sharedTypes'

interface SearchResultsProps {
  allCompanies: CompanyData[]
}

export const SearchResults = ({ allCompanies }: SearchResultsProps) => {
  const {
    searchField,
    companies,
    setCompanies,
    isCompaniesFound,
    isSearchFieldEmpty,
  } = useSiteContext() as SiteContextProps
  const { t } = useTranslate()

  useEffect(() => {
    isSearchFieldEmpty
      ? setCompanies(allCompanies)
      : setCompanies(getFilteredCompanies(searchField, allCompanies))
  }, [searchField])

  if (!isCompaniesFound && !isSearchFieldEmpty)
    return <h3 className="message-title">{t('company.no.companies')}</h3>

  if (isCompaniesFound)
    return (
      <div>
        {companies.map((company, index) => {
          const convertedData = getConvertedSearchData({ ...company })

          return (
            <SearchCompany
              key={index}
              convertedData={convertedData}
              uid={company.uid}
            />
          )
        })}
      </div>
    )

  return null
}
