import { BasicLayout } from '@/layouts'
import styles from './services.module.css'
import { BannerStatic } from '@/components/Layout'
import { ServicesBanner } from '@/components/Home'
import { Descriptions } from '@/components/Services'

export default function Services() {
  return (

    <BasicLayout relative>

      {/* <BannerStatic imgName='/img/wallpaper/w1.jpg' /> */}

      <div className={styles.section}>
        <div className={styles.container}>

          <ServicesBanner />

          <Descriptions />

        </div>
      </div>

    </BasicLayout>

  )
}
