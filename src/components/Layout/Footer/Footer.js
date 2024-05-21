import Link from 'next/link'
import styles from './Footer.module.css'
import { FaFacebook, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa'

export function Footer(props) {

  const { noFooter = true } = props

  return (

    <>

      {noFooter ? (

        <div className={styles.containerFooter}>
          <div>
            <div className={styles.containerUbicacion}>
              <FaMapMarkerAlt />
              <h4>Punta Este Corporativo</h4>
              <h4>Calzada Carranza 951, Piso 10</h4>
              <h4>Suite 304, Interior "E"</h4>
              <h4>21259 Mexicali, B.C.</h4>
            </div>
            <div className={styles.containerSiguenos}>
              <div className={styles.titleSiguenos}>
                <h4>¡ Síguenos en nuestras redes sociales !</h4>
              </div>
              <div className={styles.boxSiguenos}>
                <Link target='blank' href='https://facebook.com/clicknetmx/'>
                  <FaFacebook />
                </Link>
                <Link target='blank' href='https://facebook.com/clicknetmx/'>
                  <FaInstagram />
                </Link>
              </div>
            </div>
            <div className={styles.copy}>
              <h4>&copy; 2024 CLICKNETMEX</h4>
            </div>
          </div>
        </div>

      ) : (
        ''
      )}

    </>

  )
}
