import { createContext, useContext, useState } from 'react'
import { DARK_THEME, LIGHT_THEME } from 'constants/constants'
import { useRouter } from 'next/router'
import { CompanyData } from 'types/sharedTypes'

interface SiteContextProviderProps {
  children: React.ReactNode
}

export interface SiteContextProps {
  companies: CompanyData[]
  setCompanies: (companies: CompanyData[]) => void
  searchField: string
  setSearchField: (searchField: string) => void
  isCompaniesFound: boolean
  isSearchFieldEmpty: boolean
  showLinks: boolean
  toggleLinks: () => void
  theme: string
  isDarkTheme: boolean
  toggleTheme: () => void
  isEnglish: boolean
  toggleLanguage: () => void
}

const SiteContext = createContext<SiteContextProps | null>(null)

export const SiteContextProvider = ({ children }: SiteContextProviderProps) => {
  //Search
  const [companies, setCompanies] = useState([])
  const [searchField, setSearchField] = useState('')

  const isSearchFieldEmpty = searchField === ''
  const isCompaniesFound = !!companies.length

  //Navbar
  const [showLinks, setShowLinks] = useState(false)
  const toggleLinks = () => setShowLinks(!showLinks)

  // Theme
  const [theme, setTheme] = useState(LIGHT_THEME)

  const isDarkTheme = theme === DARK_THEME

  const toggleTheme = () =>
    setTheme(theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME)

  // Language
  const router = useRouter()
  const { locale } = router
  const isEnglish = locale === 'en'

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'da' : 'en'
    router.push(router.pathname, router.asPath, { locale: newLocale })
  }

  return (
    <SiteContext.Provider
      value={{
        companies,
        setCompanies,
        searchField,
        setSearchField,
        isSearchFieldEmpty,
        isCompaniesFound,
        showLinks,
        toggleLinks,
        theme,
        isDarkTheme,
        toggleTheme,
        isEnglish,
        toggleLanguage,
      }}>
      {children}
    </SiteContext.Provider>
  )
}

export const useSiteContext = () => useContext(SiteContext)
