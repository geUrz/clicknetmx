import { BasicLayout } from "@/layouts"
import styles from './home.module.css'
import { BannerStatic } from "@/components/Layout"
import { Packs } from "@/components/Home/Packs"

export default function Home() {

  

  return (
    <BasicLayout relative noFooter={false}>

      <BannerStatic />

      <div className={styles.sectionMain} style={{background : false ? 'azure' : ''}}>
        <div className={styles.containerMain}>
          <Packs />
        </div>
      </div>

    </BasicLayout>
  )
}
