import { useState } from 'react'
import styles from './App.module.css'
import Header from './components/Header'
import CurrencyConverter from './components/CurrencyConverter'
import PeriodSelector from './components/PeriodSelector'
import HistoryChart from './components/HistoryChart'
import HistoryTable from './components/HistoryTable'

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

function App() {
  const [moedaOrigem, setMoedaOrigem] = useState('EUR')
  const [moedaDestino, setMoedaDestino] = useState('USD')
  const [valor, setValor] = useState('100')
  const [periodo, setPeriodo] = useState('30d')

  const inverter = () => {
    setMoedaOrigem(moedaDestino)
    setMoedaDestino(moedaOrigem)
  }

  return (
    <div className={styles.app}>
      <Header />

      <main className={styles.main}>
        <CurrencyConverter
          moedaOrigem={moedaOrigem}
          moedaDestino={moedaDestino}
          valor={valor}
          taxa={MOCK_TAXA}
          data={MOCK_DATA}
          onOrigemChange={setMoedaOrigem}
          onDestinoChange={setMoedaDestino}
          onValorChange={setValor}
          onInverter={inverter}
        />

        <PeriodSelector periodo={periodo} onChange={setPeriodo} />

        <section className={styles.grid}>
          <HistoryChart historico={MOCK_HISTORICO} />
          <HistoryTable historico={MOCK_HISTORICO} />
        </section>
      </main>
    </div>
  )
}

export default App