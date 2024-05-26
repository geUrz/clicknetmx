import { BasicLayout } from '@/layouts'
import { Descriptions, ServicesBanner } from '@/components/Services'
import styles from './services.module.css'

export default function Services() {
  return (

    <BasicLayout relative>

      <div className={styles.section}>
        <div className={styles.container}>

          <ServicesBanner />

          <Descriptions />

        </div>
      </div>

    </BasicLayout>

  )
}
