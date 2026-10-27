const DIAS_POR_PERIODO = {
  '7d': 7,
  '15d': 15,
  '30d': 30,
  '3m': 90,
  '6m': 180,
  '1a': 365,
  '5a': 1825,
}

/**
 * Retorna a data de início para um período, a partir da data base.
 * @param {string} periodo
 * @param {Date} [base=new Date()]
 * @returns {Date}
 */
export function dataInicioPeriodo(periodo, base = new Date()) {
  const dias = DIAS_POR_PERIODO[periodo] ?? 30
  const d = new Date(base)
  d.setDate(d.getDate() - dias)
  return d
}

/**
 * Formata uma Date para string ISO (YYYY-MM-DD).
 * @param {Date} d
 * @returns {string}
 */
export function formatarDataISO(d) {
  return d.toISOString().slice(0, 10)
}

/**
 * Filtra registros históricos para o período informado.
 * @param {Array<{data: string, cotacao: number}>} registros
 * @param {string} periodo
 * @returns {Array}
 */
export function filtrarPorPeriodo(registros, periodo) {
  if (!Array.isArray(registros)) return []
  const inicio = dataInicioPeriodo(periodo)
  return registros.filter((r) => new Date(r.data) >= inicio)
}