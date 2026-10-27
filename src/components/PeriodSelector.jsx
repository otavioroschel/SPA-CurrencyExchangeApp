import styles from './PeriodSelector.module.css'

const PERIODOS = ['7d', '15d', '30d', '3m', '6m', '1a', '5a']

function PeriodSelector({ periodo, onChange }) {
  return (
    <section className={styles.card}>
      <h2 className={styles.cardTitulo}>Período de análise</h2>
      <div className={styles.periodos}>
        {PERIODOS.map((p) => (
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