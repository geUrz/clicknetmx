import { FaDoorOpen, FaTools, FaWifi } from 'react-icons/fa'
import { BiSolidCctv, BiSolidShield } from 'react-icons/bi'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './ServicesBanner.module.css'

export function ServicesBanner() {

  const router = useRouter()

  return (

    <div className={styles.section}>
      <Link href='/services'> 
      <div className={styles.container}>
      <div className={styles.title}>
        <h1>Conoce</h1>
        <h2>nuestros servicios</h2>
        <h1>técnicos</h1>
      </div>
      </div>
      </Link>
    </div>

  )
}
