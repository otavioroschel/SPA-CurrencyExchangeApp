import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.titulo}>Currency Exchange App</h1>
      <p className={styles.subtitulo}>Conversão e análise de moedas</p>
    </header>
  )
}

export default Header