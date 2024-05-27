import { BasicLayout } from '@/layouts'
import { Description, Abouts } from '@/components/About'
import { Image } from 'semantic-ui-react'
import styles from './about.module.css'

export default function About() {
  return (

    <BasicLayout relative>

      <div className={styles.containerBanner}>
        <Image src='./img/wallpaper/w2.png' />
      </div>

      <Description />

      <Abouts />

    </BasicLayout>

  )
}
