import { useState } from 'react'
import styles from './App.module.css'

const MOEDAS = [
  { code: 'EUR', nome: 'Euro' },
  { code: 'USD', nome: 'Dólar Americano' },
  { code: 'BRL', nome: 'Real Brasileiro' },
  { code: 'GBP', nome: 'Libra Esterlina' },
  { code: 'JPY', nome: 'Iene Japonês' },
]

// Dados fictícios para a primeira interface (mock)
const MOCK_TAXA = 1.0823
const MOCK_DATA = '2026-10-27'

const MOCK_HISTORICO = [
  { data: '2026-09-27', cotacao: 1.0750 },
  { data: '2026-09-28', cotacao: 1.0782 },
  { data: '2026-09-29', cotacao: 1.0810 },
  { data: '2026-09-30', cotacao: 1.0795 },
  { data: '2026-10-01', cotacao: 1.0830 },
  { data: '2026-10-02', cotacao: 1.0805 },
  { data: '2026-10-03', cotacao: 1.0842 },
  { data: '2026-10-04', cotacao: 1.0860 },
  { data: '2026-10-05', cotacao: 1.0825 },
  { data: '2026-10-06', cotacao: 1.0818 },
  { data: '2026-10-07', cotacao: 1.0855 },
  { data: '2026-10-08', cotacao: 1.0870 },
  { data: '2026-10-09', cotacao: 1.0848 },
  { data: '2026-10-10', cotacao: 1.0833 },
  { data: '2026-10-11', cotacao: 1.0865 },
  { data: '2026-10-12', cotacao: 1.0880 },
  { data: '2026-10-13', cotacao: 1.0852 },
  { data: '2026-10-14', cotacao: 1.0840 },
  { data: '2026-10-15', cotacao: 1.0875 },
  { data: '2026-10-16', cotacao: 1.0890 },
  { data: '2026-10-17', cotacao: 1.0862 },
  { data: '2026-10-18', cotacao: 1.0850 },
  { data: '2026-10-19', cotacao: 1.0885 },
  { data: '2026-10-20', cotacao: 1.0900 },
  { data: '2026-10-21', cotacao: 1.0872 },
  { data: '2026-10-22', cotacao: 1.0860 },
  { data: '2026-10-23', cotacao: 1.0895 },
  { data: '2026-10-24', cotacao: 1.0910 },
  { data: '2026-10-25', cotacao: 1.0882 },
  { data: '2026-10-26', cotacao: 1.0870 },
  { data: '2026-10-27', cotacao: 1.0823 },
]

const PERIODOS = ['7d', '15d', '30d', '3m', '6m', '1a', '5a']

function App() {
  const [moedaOrigem, setMoedaOrigem] = useState('EUR')
  const [moedaDestino, setMoedaDestino] = useState('USD')
  const [valor, setValor] = useState('100')
  const [periodo, setPeriodo] = useState('30d')

  const resultado = (parseFloat(valor) || 0) * MOCK_TAXA

  const inverter = () => {
    setMoedaOrigem(moedaDestino)
    setMoedaDestino(moedaOrigem)
  }

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.titulo}>Currency Exchange App</h1>
        <p className={styles.subtitulo}>Conversão e análise de moedas</p>
      </header>

      <main className={styles.main}>
        {/* Conversor */}
        <section className={styles.card}>
          <h2 className={styles.cardTitulo}>Conversor de moedas</h2>
          <div className={styles.conversor}>
            <div className={styles.campo}>
              <label>Moeda de origem</label>
              <select value={moedaOrigem} onChange={(e) => setMoedaOrigem(e.target.value)}>
                {MOEDAS.map((m) => (
                  <option key={m.code} value={m.code}>{m.code} — {m.nome}</option>
                ))}
              </select>
            </div>

            <div className={styles.campo}>
              <label>Valor</label>
              <input
                type="number"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                min="0"
              />
            </div>

            <button className={styles.botaoInverter} onClick={inverter} title="Inverter moedas">
              ⇄
            </button>

            <div className={styles.campo}>
              <label>Moeda de destino</label>
              <select value={moedaDestino} onChange={(e) => setMoedaDestino(e.target.value)}>
                {MOEDAS.map((m) => (
                  <option key={m.code} value={m.code}>{m.code} — {m.nome}</option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.resultado}>
            <p>Taxa: <strong>{MOCK_TAXA}</strong> · Data: <strong>{MOCK_DATA}</strong></p>
            <p className={styles.valorConvertido}>
              {valor || 0} {moedaOrigem} = {resultado.toFixed(2)} {moedaDestino}
            </p>
          </div>
        </section>

        {/* Período */}
        <section className={styles.card}>
          <h2 className={styles.cardTitulo}>Período de análise</h2>
          <div className={styles.periodos}>
            {PERIODOS.map((p) => (
              <button
                key={p}
                className={periodo === p ? styles.periodoAtivo : styles.periodo}
                onClick={() => setPeriodo(p)}
              >
                {p}
              </button>
            ))}
          </div>
        </section>

        {/* Gráfico + Tabela */}
        <section className={styles.grid}>
          <div className={styles.card}>
            <h2 className={styles.cardTitulo}>Histórico — gráfico</h2>
            <div className={styles.graficoMock}>
              <svg viewBox="0 0 300 120" className={styles.svg}>
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  points={MOCK_HISTORICO.map((h, i) => {
                    const x = (i / (MOCK_HISTORICO.length - 1)) * 290 + 5
                    const min = Math.min(...MOCK_HISTORICO.map((x) => x.cotacao))
                    const max = Math.max(...MOCK_HISTORICO.map((x) => x.cotacao))
                    const y = 110 - ((h.cotacao - min) / (max - min)) * 100
                    return `${x},${y}`
                  }).join(' ')}
                />
              </svg>
              <p className={styles.legenda}>Dados fictícios (mock) — integração com API no passo 9</p>
            </div>
          </div>

          <div className={styles.card}>
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
                  {MOCK_HISTORICO.slice(-10).map((h) => (
                    <tr key={h.data}>
                      <td>{h.data}</td>
                      <td>{h.cotacao.toFixed(4)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={styles.legenda}>Registros: {MOCK_HISTORICO.length}</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App