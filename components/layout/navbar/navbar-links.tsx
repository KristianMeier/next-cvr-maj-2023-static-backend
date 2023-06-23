import { SiteContextProps, useSiteContext } from 'context/site-context'
import { RefObject } from 'react'
import { useTranslate } from 'translations/useTranslate'

interface NavbarLinksProps {
  linksContainerRef: RefObject<HTMLDivElement>
  linksRef: RefObject<HTMLUListElement>
}

export const NavbarLinks = ({
  linksContainerRef,
  linksRef,
}: NavbarLinksProps) => {
  const { isDarkTheme, toggleTheme, toggleLanguage } =
    useSiteContext() as SiteContextProps
  const { t } = useTranslate()

  const themeButton = isDarkTheme
    ? t('navbar.theme.light')
    : t('navbar.theme.dark')
  const languageButton = t('navbar.language')

  return (
    <div
      className="links-container"
      ref={linksContainerRef}>
      <ul
        className="links"
        ref={linksRef}>
        <button
          className="theme-btn"
          onClick={() => toggleTheme()}>
          {themeButton}
        </button>
        <button
          className="theme-btn"
          onClick={() => toggleLanguage()}>
          {languageButton}
        </button>
      </ul>
    </div>
  )
}
