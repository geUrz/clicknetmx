import { BasicLayout } from "@/layouts"
import styles from './home.module.css'
import { BannerStatic, Footer } from "@/components/Layout"
import { Packs, Descriptions, ServicesBanner } from "@/components/Home"

export default function Home() {

  

  return (
    <BasicLayout relative>

      <BannerStatic imgName = '/img/wallpaper/wallpaper.png' />

      <div className={styles.sectionMain} style={{background : false ? 'azure' : ''}}>
        <div className={styles.containerMain}>
          
          <Packs />

          <Descriptions />

          <ServicesBanner />

        </div>
      </div>

    </BasicLayout>
  )
}
