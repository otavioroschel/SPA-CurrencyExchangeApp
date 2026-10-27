/**
 * Filtra registros por intervalo de datas (inclusivo).
 * @param {Array<{data: string}>} registros
 * @param {string} dataMin
 * @param {string} dataMax
 * @returns {Array}
 */
export function filtrarPorIntervaloDatas(registros, dataMin, dataMax) {
  if (!Array.isArray(registros)) return []
  return registros.filter((r) => {
    if (dataMin && r.data < dataMin) return false
    if (dataMax && r.data > dataMax) return false
    return true
  })
}

/**
 * Filtra registros por cotação mínima e máxima (inclusivo).
 * @param {Array<{cotacao: number}>} registros
 * @param {number|null} min
 * @param {number|null} max
 * @returns {Array}
 */
export function filtrarPorCotacao(registros, min, max) {
  if (!Array.isArray(registros)) return []
  return registros.filter((r) => {
    if (min !== null && min !== undefined && min !== '' && r.cotacao < Number(min)) return false
    if (max !== null && max !== undefined && max !== '' && r.cotacao > Number(max)) return false
    return true
  })
}

/**
 * Ordena registros por campo.
 * @param {Array} registros
 * @param {'data'|'cotacao'} campo
 * @param {'asc'|'desc'} direcao
 * @returns {Array}
 */
export function ordenarRegistros(registros, campo = 'data', direcao = 'asc') {
  if (!Array.isArray(registros)) return []
  const copia = [...registros]
  copia.sort((a, b) => {
    const va = a[campo]
    const vb = b[campo]
    if (va < vb) return direcao === 'asc' ? -1 : 1
    if (va > vb) return direcao === 'asc' ? 1 : -1
    return 0
  })
  return copia
}

/**
 * Combina filtros de data e cotação.
 * @param {Array} registros
 * @param {{dataMin?: string, dataMax?: string, cotacaoMin?: any, cotacaoMax?: any}} filtros
 * @returns {Array}
 */
export function aplicarFiltros(registros, filtros = {}) {
  let resultado = filtrarPorIntervaloDatas(registros, filtros.dataMin, filtros.dataMax)
  resultado = filtrarPorCotacao(resultado, filtros.cotacaoMin, filtros.cotacaoMax)
  return resultado
}