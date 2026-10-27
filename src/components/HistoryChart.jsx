import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import styles from './HistoryChart.module.css'

function HistoryChart({ historico }) {
  const dados = historico.map((h) => ({ data: h.data, cotacao: h.cotacao }))

  return (
    <section className={styles.card}>
      <h2 className={styles.cardTitulo}>Histórico — gráfico</h2>
      <div className={styles.grafico}>
        {dados.length === 0 ? (
          <p className={styles.legenda}>Sem dados para exibir.</p>
        ) : (
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={dados} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="data" tick={{ fontSize: 10 }} />
              <YAxis domain={['auto', 'auto']} tick={{ fontSize: 10 }} />
              <Tooltip />
              <Line type="monotone" dataKey="cotacao" stroke="#1e3a8a" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </section>
  )
}

export default HistoryChart