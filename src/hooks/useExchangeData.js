import { useState, useEffect } from 'react'
import { obterTaxaAtual, obterHistorico } from '../services/frankfurter'

/**
 * Hook customizado para consultar taxa atual e histórico de um par de moedas.
 * @param {string} origem
 * @param {string} destino
 * @param {string} periodo
 */
export function useExchangeData(origem, destino, periodo) {
  const [taxa, setTaxa] = useState(null)
  const [dataTaxa, setDataTaxa] = useState('')
  const [historico, setHistorico] = useState([])
  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState(null)

  useEffect(() => {
    if (!origem || !destino || origem === destino) return
    let ativo = true
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true)
    setErro(null)

    Promise.all([
      obterTaxaAtual(origem, destino),
      obterHistorico(origem, destino, periodo),
    ])
      .then(([t, h]) => {
        if (!ativo) return
        setTaxa(t.taxa)
        setDataTaxa(t.data)
        setHistorico(h)
      })
      .catch((e) => {
        if (!ativo) return
        const msg = e.message === 'Failed to fetch'
          ? 'Falha de rede. Verifique sua conexão com a internet.'
          : e.message
        setErro(msg)
      })
      .finally(() => {
        if (ativo) setLoading(false)
      })

    return () => { ativo = false }
  }, [origem, destino, periodo])

  // Mesma moeda: taxa 1, sem consulta
  const taxaFinal = origem && destino && origem === destino ? 1 : taxa
  const dataFinal = origem && destino && origem === destino
    ? new Date().toISOString().slice(0, 10)
    : dataTaxa
  const historicoFinal = origem && destino && origem === destino ? [] : historico

  return { taxa: taxaFinal, dataTaxa: dataFinal, historico: historicoFinal, loading, erro }
}