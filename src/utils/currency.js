/**
 * Converte um valor usando a taxa fornecida.
 * @param {number} valor
 * @param {number} taxa
 * @returns {number}
 */
export function converterValor(valor, taxa) {
  const n = Number(valor)
  if (isNaN(n) || n < 0) return 0
  if (isNaN(taxa) || taxa <= 0) return 0
  return n * taxa
}

/**
 * Formata um número como moeda com o código informado.
 * @param {number} valor
 * @param {string} codigo
 * @returns {string}
 */
export function formatarMoeda(valor, codigo) {
  const n = Number(valor)
  if (isNaN(n)) return ''
  return `${n.toFixed(2)} ${codigo}`
}

/**
 * Inverte a origem e o destino.
 * @param {string} origem
 * @param {string} destino
 * @returns {{origem: string, destino: string}}
 */
export function inverterMoedas(origem, destino) {
  return { origem: destino, destino: origem }
}