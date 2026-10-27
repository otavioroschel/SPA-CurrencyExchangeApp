import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <div>
          <h1 className={styles.titulo}>Câmbio de Moedas</h1>
          <p className={styles.subtitulo}>Conversão e análise de taxas de câmbio</p>
        </div>
      </div>
    </header>
  )
}

export default Header