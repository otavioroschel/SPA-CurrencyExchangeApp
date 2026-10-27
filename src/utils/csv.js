/**
 * Gera o conteúdo CSV a partir de registros.
 * @param {Array<{data: string, cotacao: number}>} registros
 * @param {{origem?: string, destino?: string}} contexto
 * @returns {string}
 */
export function gerarCSV(registros, contexto = {}) {
  if (!Array.isArray(registros) || registros.length === 0) return ''
  const origem = contexto.origem || ''
  const destino = contexto.destino || ''
  const cabecalho = ['Data', 'Cotacao', 'Moeda_Origem', 'Moeda_Destino', 'Conversao'].join(';')
  const linhas = [cabecalho]
  for (const r of registros) {
    const data = `="${r.data}"`          // força texto no Excel (evita ######)
    const cotacao = Number(r.cotacao).toFixed(4)
    const conversao = origem && destino ? `"${origem} -> ${destino}"` : ''
    linhas.push(`${data};${cotacao};${origem};${destino};${conversao}`)
  }
  return '\uFEFF' + linhas.join('\r\n')
}

/**
 * Dispara o download de um arquivo CSV no navegador.
 * @param {string} conteudo
 * @param {string} nomeArquivo
 */
export function downloadCSV(conteudo, nomeArquivo = 'currency-exchange.csv') {
  if (!conteudo) return false
  const blob = new Blob([conteudo], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = nomeArquivo
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
  return true
}