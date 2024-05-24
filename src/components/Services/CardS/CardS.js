import { FaChevronDown, FaChevronRight, FaChevronUp } from 'react-icons/fa'
import { useState } from 'react'
import { Image } from 'semantic-ui-react'
import styles from './CardS.module.css'
import Link from 'next/link'

export function CardS(props) {

  const { titulo, img, description, link } = props

  const [open, setOpen] = useState(false)

  const openCard = () => {
    setOpen(prevState => !prevState)
  }

  return (

    <div
      /* onClick={openCard} */
      class={
        open
          ? `${styles.description2}`
          : `${styles.description}`
      }
    >
      <Image src={`${img}`} />
      <h1>{titulo}</h1>

      {/* {open ?
        <FaChevronUp /> :
        <FaChevronDown />
      } */}


      <p>{description}</p>
      <Link href={`${link}`}>
        ver mas <FaChevronRight className={styles.arrowRight} />
      </Link>


    </div>

  )
}
