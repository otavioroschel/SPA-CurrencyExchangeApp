import { useState, useEffect } from 'react'
import styles from './App.module.css'
import Header from './components/Header'
import CurrencyConverter from './components/CurrencyConverter'
import PeriodSelector from './components/PeriodSelector'
import HistoryChart from './components/HistoryChart'
import HistoryTable from './components/HistoryTable'
import { obterMoedas } from './services/frankfurter'
import { useExchangeData } from './hooks/useExchangeData'

const PERIODOS = ['7d', '15d', '30d', '3m', '6m', '1a', '5a']

function App() {
  const [moedas, setMoedas] = useState([])
  const [loadingMoedas, setLoadingMoedas] = useState(true)
  const [erroMoedas, setErroMoedas] = useState(null)

  const [moedaOrigem, setMoedaOrigem] = useState('EUR')
  const [moedaDestino, setMoedaDestino] = useState('USD')
  const [valor, setValor] = useState('100')
  const [periodo, setPeriodo] = useState('30d')

  const { taxa, dataTaxa, historico, loading: loadingDados, erro: erroDados } =
    useExchangeData(moedaOrigem, moedaDestino, periodo)

  useEffect(() => {
    let ativo = true
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoadingMoedas(true)
    obterMoedas()
      .then((m) => {
        if (!ativo) return
        setMoedas(Object.entries(m).map(([code, nome]) => ({ code, nome })))
      })
      .catch((e) => {
        if (!ativo) return
        setErroMoedas(e.message)
      })
      .finally(() => {
        if (ativo) setLoadingMoedas(false)
      })
    return () => { ativo = false }
  }, [])

  const erro = erroMoedas || erroDados

  const inverter = () => {
    setMoedaOrigem(moedaDestino)
    setMoedaDestino(moedaOrigem)
  }

  return (
    <div className={styles.app}>
      <Header />

      <main className={styles.main}>
        {erro && <div className={styles.erroBanner}>Erro: {erro} — tente novamente.</div>}

        {loadingMoedas ? (
          <p className={styles.info}>Carregando moedas...</p>
        ) : (
          <CurrencyConverter
            moedas={moedas}
            moedaOrigem={moedaOrigem}
            moedaDestino={moedaDestino}
            valor={valor}
            taxa={taxa ?? 0}
            data={dataTaxa}
            onOrigemChange={setMoedaOrigem}
            onDestinoChange={setMoedaDestino}
            onValorChange={setValor}
            onInverter={inverter}
          />
        )}

        <PeriodSelector periodos={PERIODOS} periodo={periodo} onChange={setPeriodo} />

        {loadingDados && <p className={styles.info}>Carregando dados...</p>}

        {!loadingDados && historico.length === 0 && !erro && (
          <p className={styles.info}>Nenhum dado histórico disponível para o período selecionado.</p>
        )}

        <section className={styles.grid}>
          <HistoryChart historico={historico} />
          <HistoryTable historico={historico} />
        </section>
      </main>
    </div>
  )
}

export default App