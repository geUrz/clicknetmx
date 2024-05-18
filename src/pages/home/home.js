import { BasicLayout } from "@/layouts"
import styles from './home.module.css'
import { BannerStatic, Footer } from "@/components/Layout"
import { Packs, Descriptions } from "@/components/Home"

export default function Home() {

  

  return (
    <BasicLayout relative>

      <BannerStatic />

      <div className={styles.sectionMain} style={{background : false ? 'azure' : ''}}>
        <div className={styles.containerMain}>
          
          <Packs />

          <Descriptions />
        </div>
      </div>

    </BasicLayout>
  )
}
