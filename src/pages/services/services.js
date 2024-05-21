import { BasicLayout } from '@/layouts'
import { ServicesBanner } from '@/components/Home'
import { Descriptions } from '@/components/Services'
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
