import { useState } from 'react'
import styles from './Descriptions.module.css'
import { CardBl } from '../CardBl'
import { CardOr } from '../CardOr'

export function Descriptions() {

  return (

    <div className={styles.section}>
      <div className={styles.boxCard}>

        <CardBl
          titulo='Internet y redes'
          description='Configuración y optimización de redes locales para que cualquier equipo que se conecte a internet funcione correctamente y el WiFi cubra las zonas donde se necesite.'
        />

        <CardOr
          titulo='Cableado estructurado'
          description='Instalación de cableado de voz, datos, señal y eléctrico, hacemos un estudio para saber si el cableado existente esta en buenas condiciones y cumple con las normas establecidas.'
        />

        <CardBl
          titulo='Canalización y tubería'
          description='Instalación de canaletas de PVC, canastillas, tubería de PVC y tubería steel para que el cableado este mas organizado y protegido y asi garantizar su durabilidad por mucho tiempo.'
        />

        <CardOr
          titulo='Cámaras de vigilancia'
          description='Instalación de cámaras de vigilancia para detección de rostros, placas de automóvil o según la necesidad del perímetro, todo monitorizado desde una app móvil.'
        />

        <CardBl
          titulo='Alarma de seguridad'
          description='Instalación de alarma de seguridad para detectar incendios, fuga de gas y la intrusion de personas no autorizadas, todo monitorizado desde una app móvil.'
        />

        <CardOr
          titulo='Control de acceso'
          description='Instalación de control de acceso para personal y vehículos, configuración para autorizar o limitar la entrada a casas, oficinas y residenciales.'
        />

        <CardBl
          titulo='Cerco electrificado'
          description='Instalación de cerco eléctrico para protección del perímetro de cualquier predio, cuenta con un sistema disuasivo para desistir con el acceso, monitorizado desde app móvil.'
        />

        <CardOr
          titulo='Audio ambiental'
          description='Instalación de audio ambiental para casas, oficinas y restaurantes, mantiene el espacio con música ambiente sin ser molesto para los visitantes.'
        />

        <CardBl
          titulo='Cerco electrificado'
          description='Instalación de cerco eléctrico para protección del perímetro de cualquier predio, cuenta con un sistema disuasivo para desistir con el acceso, monitorizado desde app móvil.'
        />

        <CardOr
          titulo='Automatización de equipos eléctricos'
          description='Instalación de audio ambiental para casas, oficinas y restaurantes, mantiene el espacio con música ambiente sin ser molesto para los visitantes.'
        />

        <CardBl
          titulo='Sensor para equipos eléctricos'
          description='Instalación de cerco eléctrico para protección del perímetro de cualquier predio, cuenta con un sistema disuasivo para desistir con el acceso, monitorizado desde app móvil.'
        />

      </div>
    </div>

  )
}
