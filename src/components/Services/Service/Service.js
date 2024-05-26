import { Image } from 'semantic-ui-react'
import styles from './Service.module.css'
import { ArrowBack } from '@/components/Layout'

export function Service(props) {

  const {services, service, img, title, p1, p2, p3, p4} = props

  return (

      <div className={styles.section}>
        <ArrowBack services={services} service={service}/>
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
