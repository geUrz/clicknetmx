import { BasicLayout } from '@/layouts'
import { BannerStatic } from '@/components/Layout'
import styles from './about.module.css'
import { Description } from '@/components/About'

export default function About() {
  return (
    
    <BasicLayout relative>

      <BannerStatic imgName='/img/wallpaper/w2.jpg' />

      <Description />

    </BasicLayout>

  )
}
