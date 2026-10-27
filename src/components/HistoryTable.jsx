import styles from './HistoryTable.module.css'

function HistoryTable({ historico }) {
  const registros = historico.slice(-10)

  return (
    <section className={styles.card}>
      <h2 className={styles.cardTitulo}>Histórico — tabela</h2>
      <div className={styles.tabelaWrapper}>
        <table className={styles.tabela}>
          <thead>
            <tr>
              <th>Data</th>
              <th>Cotação</th>
            </tr>
          </thead>
          <tbody>
            {registros.map((h) => (
              <tr key={h.data}>
                <td>{h.data}</td>
                <td>{h.cotacao.toFixed(4)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={styles.legenda}>Registros: {historico.length}</p>
    </section>
  )
}

export default HistoryTable