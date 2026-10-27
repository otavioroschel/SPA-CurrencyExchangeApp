import assert from 'node:assert/strict'
import { converterValor, formatarMoeda, inverterMoedas } from './currency.js'
import { dataInicioPeriodo, formatarDataISO, filtrarPorPeriodo } from './periods.js'
import { filtrarPorIntervaloDatas, filtrarPorCotacao, ordenarRegistros, aplicarFiltros } from './filters.js'
import { gerarCSV } from './csv.js'

let passou = 0
let falhou = 0

function teste(nome, fn) {
  try {
    fn()
    passou++
    console.log(`✔ ${nome}`)
  } catch (e) {
    falhou++
    console.log(`✘ ${nome}`)
    console.log(`   ${e.message}`)
  }
}

// currency
teste('converterValor 100 * 1.0823', () => {
  assert.equal(converterValor(100, 1.0823).toFixed(4), '108.2300')
})
teste('converterValor inválido retorna 0', () => {
  assert.equal(converterValor('abc', 1.0823), 0)
  assert.equal(converterValor(-5, 1.0823), 0)
})
teste('formatarMoeda', () => {
  assert.equal(formatarMoeda(108.23, 'USD'), '108.23 USD')
})
teste('inverterMoedas', () => {
  assert.deepEqual(inverterMoedas('EUR', 'USD'), { origem: 'USD', destino: 'EUR' })
})

// periods
teste('dataInicioPeriodo 7d', () => {
  const base = new Date('2026-10-27')
  const inicio = dataInicioPeriodo('7d', base)
  assert.equal(formatarDataISO(inicio), '2026-10-20')
})

// filters
const regs = [
  { data: '2026-10-01', cotacao: 1.08 },
  { data: '2026-10-05', cotacao: 1.09 },
  { data: '2026-10-10', cotacao: 1.07 },
]
teste('filtrarPorIntervaloDatas', () => {
  const r = filtrarPorIntervaloDatas(regs, '2026-10-02', '2026-10-09')
  assert.equal(r.length, 1)
  assert.equal(r[0].data, '2026-10-05')
})
teste('filtrarPorCotacao', () => {
  const r = filtrarPorCotacao(regs, 1.075, 1.085)
  assert.equal(r.length, 1)
})
teste('ordenarRegistros desc', () => {
  const r = ordenarRegistros(regs, 'cotacao', 'desc')
  assert.equal(r[0].cotacao, 1.09)
})
teste('aplicarFiltros combinado', () => {
  const r = aplicarFiltros(regs, { dataMin: '2026-10-01', cotacaoMax: 1.08 })
  assert.equal(r.length, 2)
})

// csv
teste('gerarCSV com cabeçalho', () => {
  const csv = gerarCSV([{ data: '2026-10-01', cotacao: 1.08 }])
  assert.equal(csv, 'Data;Cotação\n2026-10-01;1.08')
})
teste('gerarCSV vazio', () => {
  assert.equal(gerarCSV([]), '')
})

console.log(`\nResultado: ${passou} passaram, ${falhou} falharam.`)
if (falhou > 0) process.exit(1)