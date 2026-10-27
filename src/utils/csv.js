/**
 * Gera o conteúdo CSV a partir de registros.
 * @param {Array<{data: string, cotacao: number}>} registros
 * @param {string[]} cabecalhos
 * @returns {string}
 */
export function gerarCSV(registros, cabecalhos = ['Data', 'Cotação']) {
  if (!Array.isArray(registros) || registros.length === 0) return ''
  const linhas = [cabecalhos.join(';')]
  for (const r of registros) {
    linhas.push(`${r.data};${r.cotacao}`)
  }
  return linhas.join('\n')
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