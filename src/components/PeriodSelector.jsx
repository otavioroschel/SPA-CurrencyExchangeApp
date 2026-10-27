import styles from './PeriodSelector.module.css'

function PeriodSelector({ periodos, periodo, onChange }) {
  return (
    <section className={styles.card}>
      <h2 className={styles.cardTitulo}>Período de análise</h2>
      <div className={styles.periodos}>
        {periodos.map((p) => (
          <button
            key={p}
            className={periodo === p ? styles.periodoAtivo : styles.periodo}
            onClick={() => onChange(p)}
          >
            {p}
          </button>
        ))}
      </div>
    </section>
  )
}

export default PeriodSelector