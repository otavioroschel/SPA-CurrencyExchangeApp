const BASE_URL = 'https://api.frankfurter.app'

/**
 * Busca a lista de moedas disponíveis.
 * @returns {Promise<Record<string,string>>}
 */
export async function obterMoedas() {
  const res = await fetch(`${BASE_URL}/currencies`)
  if (!res.ok) throw new Error(`Falha ao buscar moedas (${res.status})`)
  return res.json()
}

/**
 * Busca a cotação mais recente entre origem e destino.
 * @param {string} origem
 * @param {string} destino
 * @returns {Promise<{taxa: number, data: string}>}
 */
export async function obterTaxaAtual(origem, destino) {
  const res = await fetch(`${BASE_URL}/latest?from=${origem}&to=${destino}`)
  if (!res.ok) throw new Error(`Falha ao buscar taxa (${res.status})`)
  const data = await res.json()
  return { taxa: data.rates[destino], data: data.date }
}

/**
 * Busca o histórico de cotações para um período.
 * @param {string} origem
 * @param {string} destino
 * @param {string} periodo
 * @returns {Promise<Array<{data: string, cotacao: number}>>}
 */
export async function obterHistorico(origem, destino, periodo) {
  const dias = { '7d': 7, '15d': 15, '30d': 30, '3m': 90, '6m': 180, '1a': 365, '5a': 1825 }[periodo] ?? 30
  const fim = new Date()
  const inicio = new Date()
  inicio.setDate(inicio.getDate() - dias)
  const ini = inicio.toISOString().slice(0, 10)
  const f = fim.toISOString().slice(0, 10)
  const res = await fetch(`${BASE_URL}/${ini}..${f}?from=${origem}&to=${destino}`)
  if (!res.ok) throw new Error(`Falha ao buscar histórico (${res.status})`)
  const data = await res.json()
  const registros = Object.entries(data.rates).map(([d, r]) => ({
    data: d,
    cotacao: r[destino],
  }))
  registros.sort((a, b) => (a.data < b.data ? -1 : 1))
  return registros
}