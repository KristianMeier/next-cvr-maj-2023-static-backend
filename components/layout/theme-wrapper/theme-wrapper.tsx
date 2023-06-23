import cc from 'classcat'
import { SiteContextProps, useSiteContext } from 'context/site-context'

interface ThemeWrapperProps {
  children: React.ReactNode
}

export const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
  const { isDarkTheme } = useSiteContext() as SiteContextProps

  return (
    <div
      className={cc([
        'theme-wrapper',
        'light-theme',
        {
          'dark-theme': isDarkTheme,
        },
      ])}>
      {children}
    </div>
  )
}
