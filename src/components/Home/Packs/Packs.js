import styles from './Packs.module.css'

export function Packs() {
  return (

    <div className={styles.section}>
      <div className={styles.title}>
        <h1>¡ <span>1</span> mes de prueba <span>GRATIS</span> !</h1>
        <h2>al contratar cualquiera de nuestros paquetes</h2>
      </div>
      <div className={styles.mainBox}>
        <div className={styles.box}>
          <div>
            <h2>Paquete</h2>
            <h2>20/20 Mb</h2>
          </div>
          <div>
            <h1>$380</h1>
            <h3>MXN</h3>
          </div>
          <div>
            <h1>al mes</h1>
          </div>
        </div>
        <div className={styles.box}>
          <div>
            <h2>Paquete</h2>
            <h2>30/30 Mb</h2>
          </div>
          <div>
            <h1>$500</h1>
            <h3>MXN</h3>
          </div>
          <div>
            <h1>al mes</h1>
          </div>
        </div>
        <div className={styles.box}>
          <div>
            <h2>Paquete</h2>
            <h2>50/50 Mb</h2>
          </div>
          <div>
            <h1>$600</h1>
            <h3>MXN</h3>
          </div>
          <div>
            <h1>al mes</h1>
          </div>
        </div>
        <div className={styles.conditions}>
        <p>*No incluye costos de instalación</p>
      </div>
      </div>
      
    </div>
  
  )
}
