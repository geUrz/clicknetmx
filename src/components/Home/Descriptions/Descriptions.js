import { FaGamepad, FaMicrochip, FaRouter, FaSatelliteDish, FaTachometerAlt } from 'react-icons/fa'
import styles from './Descriptions.module.css'

export function Descriptions() {
  return (

    <div className={styles.section}>
      <div>
        <FaTachometerAlt />
        <p><span>Internet super rapido</span> y megas reales para cargar y descargar cualquier archivo</p>
      </div>
      <div>
        <FaGamepad />
        <p><span>Navega a alta velocidad</span> desde cualquier dispositivo</p>
      </div>
      <div>
        <FaSatelliteDish />
        <p><span>Equipos de alta calidad</span> instalados para que tu internet siempre este disponible</p>
      </div>
    </div>

  )
}
