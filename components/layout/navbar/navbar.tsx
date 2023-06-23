import { useRef, useEffect } from 'react'
import { LANDING_PAGE_PATH } from 'constants/constants'
import { TextLink } from 'components/other/text-link'
import { NavbarLinks } from 'components/layout/navbar/navbar-links'
import { SiteContextProps, useSiteContext } from 'context/site-context'

export const Navbar = () => {
  const { showLinks, toggleLinks } = useSiteContext() as SiteContextProps
  const linksContainerRef = useRef<HTMLDivElement>(null)
  const linksRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (!linksContainerRef.current || !linksRef.current) return

    const linksHeight = linksRef.current.getBoundingClientRect().height
    showLinks
      ? (linksContainerRef.current.style.height = `${linksHeight}px`)
      : (linksContainerRef.current.style.height = '0px')
  }, [showLinks])

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <TextLink
            path={LANDING_PAGE_PATH}
            text="Virk.dk"
            virkdk
          />
          <button
            className="nav-toggle"
            onClick={() => toggleLinks()}>
            <img
              className="nav-toggle-icon"
              src="/hamburger-icon.png"
              alt="Mobile menu icon"
            />
          </button>
        </div>
        <NavbarLinks
          linksContainerRef={linksContainerRef}
          linksRef={linksRef}
        />
      </div>
    </nav>
  )
}
