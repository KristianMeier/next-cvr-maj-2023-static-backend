import { useTranslate } from 'translations/useTranslate'

interface CompanyTableProp {
  title: string
  field: string
}

interface CompanyTableProps {
  company: CompanyTableProp[]
}

export const CompanyTable = ({ company }: CompanyTableProps) => {
  const { t } = useTranslate()

  return (
    <div className="company-table">
      {company.map(({ title, field }) => (
        <div
          className="content-container"
          key={t(field)}>
          <p className="title">{t(title)} </p>
          <p>{t(field)} </p>
        </div>
      ))}
    </div>
  )
}
