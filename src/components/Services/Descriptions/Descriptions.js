import styles from './Descriptions.module.css'

export function Descriptions() {
  return (

    <div className={styles.section}>
      <div className={styles.boxCard}>
        <div className={styles.description}>
          <h1>Internet y redes</h1>
          <p>Configuración y optimización de redes locales para que cualquier equipo que se conecte a internet funcione correctamente y el WiFi cubra las zonas donde se necesite.</p>
        </div>
        <div className={styles.description}>
          <h1>Cableado estructurado</h1>
          <p>Instalación de cableado de voz, datos, señal y eléctrico, hacemos un estudio para saber si el cableado existente esta en buenas condiciones y cumple con las normas establecidas.</p>
        </div>
        <div className={styles.description}>
          <h1>Canalización y tubería</h1>
          <p>Instalación de canaletas de PVC, canastillas, tubería de PVC y tubería steel para que el cableado este mas organizado y protegido y asi garantizar su durabilidad por mucho tiempo.</p>
        </div>
        <div className={styles.description}>
          <h1>Cámaras de vigilancia</h1>
          <p>Instalación de cámaras de vigilancia para detección de rostros, placas de automóvil o según la necesidad del perímetro, todo monitorizado desde una app móvil.</p>
        </div>
        <div className={styles.description}>
          <h1>Alarma de seguridad</h1>
          <p>Instalación de alarma de seguridad para detectar incendios, fuga de gas y la intrusion de personas no autorizadas, todo monitorizado desde una app móvil.  </p>
        </div>
        <div className={styles.description}>
          <h1>Control de acceso</h1>
          <p>Instalación de control de acceso para personal y vehículos, configuración para autorizar o limitar la entrada a casas, oficinas y residenciales.</p>
        </div>
        <div className={styles.description}>
          <h1>Cerco electrificado</h1>
          <p>Instalación de cerco eléctrico para protección del perímetro de cualquier predio, cuenta con un sistema disuasivo para desistir con el acceso, monitorizado desde app móvil.</p>
        </div>
        <div className={styles.description}>
          <h1>Audio ambiental</h1>
          <p>Instalación de audio ambiental para casas, oficinas y restaurantes, mantiene el espacio con música ambiente sin ser molesto para los visitantes.</p>
        </div>
        <div className={styles.description}>
          <h1>Automatización de equipos eléctricos</h1>
          <p>Instalación de audio ambiental para casas, oficinas y restaurantes, mantiene el espacio con música ambiente sin ser molesto para los visitantes.</p>
        </div>
      </div>
    </div>

  )
}
