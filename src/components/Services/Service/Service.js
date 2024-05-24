import { useRouter } from 'next/router'
import { Image } from 'semantic-ui-react'
import { FaChevronLeft } from 'react-icons/fa'
import styles from './Service.module.css'

export function Service(props) {

  const {link1, link2, img, title, p1, p2, p3, p4} = props

  const router = useRouter()

  return (

      <div className={styles.section}>
        <div className={styles.arrowLeft}>
          <FaChevronLeft onClick={() => router.back()} />
          <h3>&nbsp;{link1}&nbsp;\</h3>
          <h3>&nbsp;{link2}</h3>
        </div>
        <div className={styles.container}>
          <div className={styles.img}>
            <Image src={`${img}`}/>
          </div>
          <div className={styles.description}>
            <div className={styles.title}>
              <h1>{title}</h1>
            </div>
            <div className={styles.descriptionP}>
              <p>{p1}</p>
              <p>{p2}</p>
              <p>{p3}</p>
              <p>{p4}</p>
            </div>
          </div>
        </div>
      </div>

  )
}
