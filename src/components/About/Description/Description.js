import { Image } from 'semantic-ui-react'
import styles from './Description.module.css'

export function Description() {
  return (

    <div className={styles.section}>
      <div className={styles.logo}>
        <Image src='/img/logo2.png' alt='Logo' />
      </div>
      <div className={styles.description}>
        <p>Somos una empresa proveedora de servicios de internet(ISP) </p>
      </div>
    </div>

  )
}
