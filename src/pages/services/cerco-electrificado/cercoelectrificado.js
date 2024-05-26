import { Service } from '@/components/Services'
import { BasicLayout } from '@/layouts'

export default function CercoElectrificado() {

  return (
    
    <BasicLayout relative>

      <Service
        services='Servicios'
        service='Cerco Electrificado'

        img='/img/services/cerco/cercokit.webp' 

        title='Cerco Electrificado'
        
        p1='Configuración y optimización de redes locales para que cualquier equipo que se conecte a internet funcione correctamente y el WiFi cubra las zonas donde se necesite.'
        
        p2='Configuración y optimización de redes locales para que cualquier equipo que se conecte a internet funcione correctamente y el WiFi cubra las zonas donde se necesite.'
        
        p3='Configuración y optimización de redes locales para que cualquier equipo que se conecte a internet funcione correctamente y el WiFi cubra las zonas donde se necesite.'
        
        p4='Configuración y optimización de redes locales para que cualquier equipo que se conecte a internet funcione correctamente y el WiFi cubra las zonas donde se necesite.'
      />

    </BasicLayout>

  )
}
