import { Service } from '@/components/Services'
import { BasicLayout } from '@/layouts'

export default function ControldeAcceso() {

  return (
    
    <BasicLayout relative>

      <Service
        services='Servicios'
        service='Control de acceso'

        img='/img/services/control/controlkit.webp' 

        title='Control de acceso'
        
        p1='Configuración y optimización de redes locales para que cualquier equipo que se conecte a internet funcione correctamente y el WiFi cubra las zonas donde se necesite.'
        
        p2='Configuración y optimización de redes locales para que cualquier equipo que se conecte a internet funcione correctamente y el WiFi cubra las zonas donde se necesite.'
        
        p3='Configuración y optimización de redes locales para que cualquier equipo que se conecte a internet funcione correctamente y el WiFi cubra las zonas donde se necesite.'
        
        p4='Configuración y optimización de redes locales para que cualquier equipo que se conecte a internet funcione correctamente y el WiFi cubra las zonas donde se necesite.'
      />

    </BasicLayout>

  )
}
