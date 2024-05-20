import { Image } from 'semantic-ui-react'
import styles from './BannerStatic.module.css'

export function BannerStatic(props) {

  const {imgName} = props

  return (
   
    <div className={styles.containerBanner}>
      <Image src={`${imgName}`} />
    </div>

  )
}
