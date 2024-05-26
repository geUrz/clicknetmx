import { BasicLayout } from "@/layouts"
import { BannerStatic } from "@/components/Layout"
import { Packs, Descriptions, Brands } from "@/components/Home"
import { ServicesBanner } from "@/components/Services"
import styles from './home.module.css'

export default function Home() {



  return (
    <BasicLayout relative>

      <BannerStatic imgName='/img/wallpaper/wallpaper.png' />

      <div className={styles.sectionMain} style={{ background: false ? 'azure' : '' }}>

        <Packs />

        <Descriptions />

        <ServicesBanner />

        <Brands />

      </div>

    </BasicLayout>
  )
}
