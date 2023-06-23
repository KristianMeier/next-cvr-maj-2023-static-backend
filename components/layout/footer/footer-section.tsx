import { useTranslate } from 'translations/useTranslate'

interface FooterSectionProps {
  columnLinks: string[]
}

export const FooterSection = ({ columnLinks }: FooterSectionProps) => {
  const { t } = useTranslate()

  return (
    <section className="footer-section footer-links-container">
      {columnLinks.map((columnLink) => (
        <p
          className="first-link"
          key={columnLink}>
          {t(columnLink)}
        </p>
      ))}
    </section>
  )
}
