import cc from 'classcat'
import { SiteContextProps, useSiteContext } from 'context/site-context'

interface MainContainerProps {
  children: React.ReactNode
}

export const MainContainer = ({ children }: MainContainerProps) => {
  const { showLinks } = useSiteContext() as SiteContextProps

  return (
    <main
      className={cc([
        'main-container',
        {
          'main-container-showlinks': showLinks,
        },
      ])}>
      {children}
    </main>
  )
}
