import { useState, useEffect } from 'react'
import styles from './App.module.css'
import Header from './components/Header'
import CurrencyConverter from './components/CurrencyConverter'
import PeriodSelector from './components/PeriodSelector'
import HistoryChart from './components/HistoryChart'
import HistoryTable from './components/HistoryTable'
import { obterMoedas, obterTaxaAtual, obterHistorico } from './services/frankfurter'

const PERIODOS = ['7d', '15d', '30d', '3m', '6m', '1a', '5a']

function App() {
  const [moedas, setMoedas] = useState([])
  const [moedaOrigem, setMoedaOrigem] = useState('EUR')
  const [moedaDestino, setMoedaDestino] = useState('USD')
  const [valor, setValor] = useState('100')
  const [periodo, setPeriodo] = useState('30d')

  const [taxa, setTaxa] = useState(null)
  const [dataTaxa, setDataTaxa] = useState('')
  const [historico, setHistorico] = useState([])

  const [loadingMoedas, setLoadingMoedas] = useState(true)
  const [loadingDados, setLoadingDados] = useState(false)
  const [erro, setErro] = useState(null)

  // Carrega moedas uma vez
  useEffect(() => {
    let ativo = true
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoadingMoedas(true)
    obterMoedas()
      .then((m) => {
        if (!ativo) return
        const lista = Object.entries(m).map(([code, nome]) => ({ code, nome }))
        setMoedas(lista)
      })
      .catch((e) => {
        if (!ativo) return
        setErro(e.message)
      })
      .finally(() => {
        if (ativo) setLoadingMoedas(false)
      })
    return () => { ativo = false }
  }, [])

  // Carrega taxa atual quando origem/destino mudam
  useEffect(() => {
    if (!moedaOrigem || !moedaDestino || moedaOrigem === moedaDestino) return
    let ativo = true
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoadingDados(true)
    setErro(null)
    obterTaxaAtual(moedaOrigem, moedaDestino)
      .then(({ taxa: t, data: d }) => {
        if (!ativo) return
        setTaxa(t)
        setDataTaxa(d)
      })
      .catch((e) => {
        if (!ativo) return
        setErro(e.message)
      })
      .finally(() => {
        if (ativo) setLoadingDados(false)
      })
    return () => { ativo = false }
  }, [moedaOrigem, moedaDestino])

  // Carrega histórico quando origem/destino/periodo mudam
  useEffect(() => {
    if (!moedaOrigem || !moedaDestino || moedaOrigem === moedaDestino) return
    let ativo = true
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoadingDados(true)
    setErro(null)
    obterHistorico(moedaOrigem, moedaDestino, periodo)
      .then((h) => {
        if (!ativo) return
        setHistorico(h)
      })
      .catch((e) => {
        if (!ativo) return
        setErro(e.message)
      })
      .finally(() => {
        if (ativo) setLoadingDados(false)
      })
    return () => { ativo = false }
  }, [moedaOrigem, moedaDestino, periodo])

  const inverter = () => {
    setMoedaOrigem(moedaDestino)
    setMoedaDestino(moedaOrigem)
  }

  return (
    <div className={styles.app}>
      <Header />

      <main className={styles.main}>
        {erro && (
          <div className={styles.erroBanner}>
            Erro: {erro} — tente novamente.
          </div>
        )}

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

        <section className={styles.grid}>
          <HistoryChart historico={historico} />
          <HistoryTable historico={historico} />
        </section>
      </main>
    </div>
  )
}

export default App