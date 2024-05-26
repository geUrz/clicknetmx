import { FaChevronDown, FaChevronRight, FaChevronUp } from 'react-icons/fa'
import { useState } from 'react'
import { Image } from 'semantic-ui-react'
import styles from './Card.module.css'
import Link from 'next/link'

export function Card(props) {

  const { titulo, img, description, link } = props

  const [open, setOpen] = useState(false)

  const openCard = () => {
    //setOpen(prevState => !prevState)
    setOpen(true)
  }

  return (

      <div class={styles.description} onClick={openCard}>
      <Image src={`${img}`} />
        <h1>{titulo}</h1>

        {open ?
          <FaChevronUp /> :
          <FaChevronDown />
        }

        <p>{description}</p>
        <Link href={`${link}`}>
          ver mas <FaChevronRight className={styles.arrowRight} />
        </Link>
      </div>

  )
}
