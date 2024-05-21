import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { useState } from 'react'
import styles from './CardBl.module.css'

export function CardBl(props) {

  const {titulo, description} = props

  const [open, setOpen] = useState(false)

  const openCard = () => {
    setOpen(prevState => !prevState)
  } 

  return (

        <div className={styles.description} onClick={openCard}>
          <h1>{titulo}</h1>
          
          {open ?
            <FaChevronUp /> :
            <FaChevronDown />
          }

          <p className={
                open
                  ? `${styles.cardVisible}`
                  : ''
              }>{description}</p>
        </div>

  )
}
