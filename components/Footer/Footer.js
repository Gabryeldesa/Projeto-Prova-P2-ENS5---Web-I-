import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.texto}>
           VoltLab — Kits de Robótica e Eletrônica
        </p>
        <p className={styles.sub}>
            Conectando você às melhores ferramentas para construir o futuro da tecnologia.
        </p>
      </div>
    </footer>
  )
}