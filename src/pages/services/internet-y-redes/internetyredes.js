import { Service } from '@/components/Services'
import { BasicLayout } from '@/layouts'
import styles from './internetyredes.js.module.css'

export default function InternetyRedes() {

  return (
    
    <BasicLayout relative>
      <div className={styles.section}>
      <Service
        services='Servicios'
        service='Internet y redes'

        img='/img/services/antena/antenakit.webp' 

        title='internet y redes'
        
        p1='Configuración y optimización de redes locales para que cualquier equipo que se conecte a internet funcione correctamente y el WiFi cubra las zonas donde se necesite.'
        
        p2='Configuración y optimización de redes locales para que cualquier equipo que se conecte a internet funcione correctamente y el WiFi cubra las zonas donde se necesite.'
        
        p3='Configuración y optimización de redes locales para que cualquier equipo que se conecte a internet funcione correctamente y el WiFi cubra las zonas donde se necesite.'
        
        p4='Configuración y optimización de redes locales para que cualquier equipo que se conecte a internet funcione correctamente y el WiFi cubra las zonas donde se necesite.'
      />
      </div>

    </BasicLayout>

  )
}
