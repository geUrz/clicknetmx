import { Card } from '../Card'
import styles from './Descriptions.module.css'

export function Descriptions() {

  return (

    <div className={styles.section}>
      <div className={styles.boxCard}>

        <Card
          img='/img/services/antena/antena.webp'
          titulo='Internet y redes'
          description='Configuración y optimización de redes locales para que cualquier equipo que se conecte a internet funcione correctamente y el WiFi cubra las zonas donde se necesite.'
          link='/services/internet-y-redes'
        />

        <Card
          img='/img/services/cable/cable.webp'
          titulo='Cableado estructurado'
          description='Instalación de cableado de voz, datos, señal y eléctrico, hacemos un estudio para saber si el cableado existente esta en buenas condiciones y cumple con las normas establecidas.'
          link='/services/cableado-estructurado'
        />

        <Card
          img='/img/services/canal/canal.webp'
          titulo='Canalización y tubería'
          description='Configuración y optimización de redes locales para que cualquier equipo que se conecte a internet funcione correctamente y el WiFi cubra las zonas donde se necesite.'
          link='/services/canalizacion-y-tuberia'
        />

        <Card
          img='/img/services/cam/cam.webp'
          titulo='Cámaras de vigilancia'
          description='Instalación de cableado de voz, datos, señal y eléctrico, hacemos un estudio para saber si el cableado existente esta en buenas condiciones y cumple con las normas establecidas.'
          link='/services/camaras'
        />

        <Card
          img='/img/services/alarma/alarma.webp'
          titulo='Alarma de seguridad'
          description='Configuración y optimización de redes locales para que cualquier equipo que se conecte a internet funcione correctamente y el WiFi cubra las zonas donde se necesite.'
          link='/services/alarma'
        />

        <Card
          img='/img/services/control/control.webp'
          titulo='Control de acceso'
          description='Instalación de cableado de voz, datos, señal y eléctrico, hacemos un estudio para saber si el cableado existente esta en buenas condiciones y cumple con las normas establecidas.'
          link='/services/control-de-acceso'
        />

        <Card
          img='/img/services//cerco/cerco.webp'
          titulo='Cerco electrificado'
          description='Instalación de cableado de voz, datos, señal y eléctrico, hacemos un estudio para saber si el cableado existente esta en buenas condiciones y cumple con las normas establecidas.'
          link='/services/cerco-electrificado'
        />

        <Card
          img='/img/services/bocina/bocina.webp'
          titulo='Audio ambiental'
          description='Instalación de cableado de voz, datos, señal y eléctrico, hacemos un estudio para saber si el cableado existente esta en buenas condiciones y cumple con las normas establecidas.'
          link='/services/audio-ambiental'
        />

        <Card
          img='/img/services/'
          titulo='Automatización de equipos eléctricos'
          description='Instalación de cableado de voz, datos, señal y eléctrico, hacemos un estudio para saber si el cableado existente esta en buenas condiciones y cumple con las normas establecidas.'
          link='/services/antena'
        />

        {/* <Card
          img='/img/services/'
          titulo='Sensor para equipos eléctricos'
          description='Instalación de cableado de voz, datos, señal y eléctrico, hacemos un estudio para saber si el cableado existente esta en buenas condiciones y cumple con las normas establecidas.'
        /> */}

        <Card
          img='/img/services/cam.webp'
          titulo='Cámaras de vigilancia'
          description='Instalación de cableado de voz, datos, señal y eléctrico, hacemos un estudio para saber si el cableado existente esta en buenas condiciones y cumple con las normas establecidas.'
          link='/services/antena'
        />

      </div>
    </div>

  )
}
