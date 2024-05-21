import { useState } from 'react'
import Link from 'next/link'
import { Image } from 'semantic-ui-react'
import { FaAddressBook, FaBars, FaFileAlt, FaHome, FaTimes, FaTools } from 'react-icons/fa'
import styles from './TopBar.module.css'


export function TopBar() {

  const [menu, setMenu] = useState()

  const menuOpen = () => {
    setMenu(prevState => !prevState)
  }


  return (

    <div className={styles.topBar}>
      <div className={styles.containerMenu}>

        <div className={styles.logo}>
          <Link href='/'>
            <Image src='/img/logo.png' alt='Logo' />
          </Link>
        </div>

        <div className={styles.menu}>
          <Link href='/'>
            <FaHome />
          </Link>
          <Link href='/services'>
            Servicios
          </Link>
          <Link href='/about'>
            Quienes somos ?
          </Link>
        </div>

        <div className={styles.accountBar}>
          <div className={styles.iconBar}>
            <div onClick={menuOpen}>
              {menu ? (
                <FaTimes />
              ) : (
                <FaBars />
              )}
            </div>
          </div>
        </div>

        <div className={styles.containerMenuSide} style={{ left: menu ? '0' : '-100%' }}>
          <Link href='/'>
            <div className={styles.topMenuSide} onClick={menuOpen}>
              <FaHome />
            </div>
          </Link>
          <div className={styles.listaMenuSide}>
            <Link href='/services'>
              <div onClick={menuOpen}>
                <FaTools />
                Servicios
              </div>
            </Link>
            <Link href='/blog'>
              <div onClick={menuOpen}>
                <FaFileAlt />
                Blog
              </div>
            </Link>
            <Link href='/about'>
              <div onClick={menuOpen}>
                <FaAddressBook />
                Quienes somos ?
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>

  )
}
