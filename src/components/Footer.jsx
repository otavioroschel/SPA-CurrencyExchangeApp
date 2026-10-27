import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.linha}>Desenvolvido por Otávio Roschel</p>
      <p className={styles.linha}>Projeto 1 SPA SENAC 27/10/2026</p>
    </footer>
  )
}

export default Footer