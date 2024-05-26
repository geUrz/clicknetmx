import { Image } from 'semantic-ui-react'
import styles from './Brands.module.css'

export function Brands() {
  return (

    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Las marcas que utilizamos en nuestros proyectos</h1>
        </div>
        <div className={styles.cardContainer}>
        <div className={styles.card}>
          <Image src='/img/brands/11.webp' />
        </div>
        <div className={styles.card}>
          <Image src='/img/brands/2.webp' />
        </div>
        <div className={styles.card}>
          <Image src='/img/brands/3.webp' />
        </div>
        <div className={styles.card}>
          <Image src='/img/brands/4.webp' />
        </div>
        <div className={styles.card}>
          <Image src='/img/brands/5.webp' />
        </div>
        <div className={styles.card}>
          <Image src='/img/brands/6.webp' />
        </div>
        <div className={styles.card}>
          <Image src='/img/brands/7.webp' />
        </div>
        <div className={styles.card}>
          <Image src='/img/brands/8.webp' />
        </div>
        <div className={styles.card}>
          <Image src='/img/brands/9.webp' />
        </div>
        <div className={styles.card}>
          <Image src='/img/brands/10.webp' />
        </div>
        <div className={styles.card}>
          <Image src='/img/brands/12.webp' />
        </div>
        <div className={styles.card}>
          <Image src='/img/brands/1.webp' />
        </div> 
        </div>
      </div>
    </div>

  )
}
