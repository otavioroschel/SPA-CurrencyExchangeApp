import styles from './HistoryChart.module.css'

function HistoryChart({ historico }) {
  const min = Math.min(...historico.map((h) => h.cotacao))
  const max = Math.max(...historico.map((h) => h.cotacao))

  const pontos = historico.map((h, i) => {
    const x = (i / (historico.length - 1)) * 290 + 5
    const y = 110 - ((h.cotacao - min) / (max - min || 1)) * 100
    return `${x},${y}`
  }).join(' ')

  return (
    <section className={styles.card}>
      <h2 className={styles.cardTitulo}>Histórico — gráfico</h2>
      <div className={styles.graficoMock}>
        <svg viewBox="0 0 300 120" className={styles.svg}>
          <polyline fill="none" stroke="currentColor" strokeWidth="2" points={pontos} />
        </svg>
        <p className={styles.legenda}>Dados fictícios (mock) — integração com API no passo 9</p>
      </div>
    </section>
  )
}

export default HistoryChart