import { useRouter } from 'next/router'
import { FaArrowLeft } from 'react-icons/fa'
import styles from './ArrowBack.module.css'

export function ArrowBack(props) {

  const router = useRouter()

  const {services, service} = props

  return (

    <div className={styles.arrowLeft}>
      <FaArrowLeft
        onClick={() => router.back()}
      />
      <h3>&nbsp;{services}&nbsp;\</h3>
      <h3>&nbsp;{service}</h3>
    </div>

  )
}
