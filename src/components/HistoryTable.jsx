import { useState, useMemo } from 'react'
import styles from './HistoryTable.module.css'
import { aplicarFiltros, ordenarRegistros } from '../utils/filters'
import { gerarCSV, downloadCSV } from '../utils/csv'

function HistoryTable({ historico, moedaOrigem, moedaDestino, valor }) {
  const [dataMin, setDataMin] = useState('')
  const [dataMax, setDataMax] = useState('')
  const [cotacaoMin, setCotacaoMin] = useState('')
  const [cotacaoMax, setCotacaoMax] = useState('')
  const [ordenarPor, setOrdenarPor] = useState('data')
  const [direcao, setDirecao] = useState('asc')
  const [mensagem, setMensagem] = useState('')

  const filtrados = useMemo(() => {
    const f = aplicarFiltros(historico, { dataMin, dataMax, cotacaoMin, cotacaoMax })
    return ordenarRegistros(f, ordenarPor, direcao)
  }, [historico, dataMin, dataMax, cotacaoMin, cotacaoMax, ordenarPor, direcao])

  const limpar = () => {
    setDataMin('')
    setDataMax('')
    setCotacaoMin('')
    setCotacaoMax('')
  }

  const toggleDirecao = () => setDirecao((d) => (d === 'asc' ? 'desc' : 'asc'))

  const exportar = () => {
    if (filtrados.length === 0) {
      setMensagem('Não há registros para exportar.')
      return
    }
    const csv = gerarCSV(filtrados, { origem: moedaOrigem, destino: moedaDestino, valorOriginal: valor })
    const dataHoje = new Date().toISOString().slice(0, 10)
    const nome = `currency-exchange-${dataHoje}.csv`
    const ok = downloadCSV(csv, nome)
    setMensagem(ok ? `CSV exportado: ${filtrados.length} registro(s).` : 'Falha ao exportar.')
  }

  return (
    <section className={styles.card}>
      <h2 className={styles.cardTitulo}>Histórico — tabela</h2>

      <div className={styles.filtros}>
        <input type="date" value={dataMin} onChange={(e) => setDataMin(e.target.value)} placeholder="Data mín" />
        <input type="date" value={dataMax} onChange={(e) => setDataMax(e.target.value)} placeholder="Data máx" />
        <input type="number" value={cotacaoMin} onChange={(e) => setCotacaoMin(e.target.value)} placeholder="Cotação mín" step="0.0001" />
        <input type="number" value={cotacaoMax} onChange={(e) => setCotacaoMax(e.target.value)} placeholder="Cotação máx" step="0.0001" />
        <button onClick={limpar}>Limpar filtros</button>
      </div>

      <div className={styles.ordenacao}>
        <label>Ordenar por:</label>
        <select value={ordenarPor} onChange={(e) => setOrdenarPor(e.target.value)}>
          <option value="data">Data</option>
          <option value="cotacao">Cotação</option>
        </select>
        <button onClick={toggleDirecao}>{direcao === 'asc' ? 'Ascendente' : 'Descendente'}</button>
        <button onClick={exportar} className={styles.botaoExportar}>Exportar CSV</button>
      </div>

      {mensagem && <p className={styles.mensagem}>{mensagem}</p>}

      <div className={styles.tabelaWrapper}>
        <table className={styles.tabela}>
          <thead>
            <tr>
              <th>Data</th>
              <th>Cotação</th>
            </tr>
          </thead>
          <tbody>
            {filtrados.length === 0 ? (
              <tr>
                <td colSpan="2" className={styles.vazio}>Nenhum registro encontrado.</td>
              </tr>
            ) : (
              filtrados.map((h) => (
                <tr key={h.data}>
                  <td>{h.data}</td>
                  <td>{Number(h.cotacao).toFixed(4)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <p className={styles.legenda}>Registros: {filtrados.length} de {historico.length}</p>
    </section>
  )
}

export default HistoryTable