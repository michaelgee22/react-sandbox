import Link from 'next/link'
import { Button, Icon, Image } from 'semantic-ui-react'
import { Sidebar } from '../Sidebar'

import { useRouter } from 'next/router'
import { useState } from 'react'

import { MG_NAV_PAGES } from '../../constants'

import styles from './Nav.module.css'

export const Nav = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  const router = useRouter()

  return (
    <header id={styles.header}>
      <nav style={{ width: '100%', height: '100%' }}>
        <div id={styles.nav}>
          {MG_NAV_PAGES.map(btn => (
            <Link href={btn.pathname} key={btn.icon}>
              <Button
                as="a"
                icon
                size="huge"
                id={btn.pathname === router.pathname ? styles.selected : undefined}
                className={styles.navBtn}
              >
                <Icon name={btn.icon} />
                <div>{btn.text}</div>
              </Button>
            </Link>
          ))}
        </div>

        <div id={styles.mobileNav}>
          <Link href="/">
            <div id={styles.mobileNavContent}>
              <Image
                src="/images/mg-transparent-logo.png"
                alt="Michael Gee logo image"
                id={styles.mobileImg}
              />

              <div>
                <h1 id={styles.mobileTitle}>Michael Gee</h1>
                <h2 id={styles.mobileSubtitle}>Software Developer</h2>
              </div>
            </div>
          </Link>

          <Button onClick={_toggleSidebar} icon id={styles.menuBtn} aria-label="Open Side Menu">
            <Icon name="bars" />
          </Button>
        </div>

        {sidebarIsOpen && <Sidebar onHide={_toggleSidebar} />}
      </nav>
    </header>
  )

  function _toggleSidebar() {
    setSidebarIsOpen(!sidebarIsOpen)
  }
}
