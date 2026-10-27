# Testes de Funções — Currency Exchange App

## 1. Funções testadas

Localizadas em `src/utils/`:

- `currency.js`: `converterValor`, `formatarMoeda`, `inverterMoedas`
- `periods.js`: `dataInicioPeriodo`, `formatarDataISO`, `filtrarPorPeriodo`
- `filters.js`: `filtrarPorIntervaloDatas`, `filtrarPorCotacao`, `ordenarRegistros`, `aplicarFiltros`
- `csv.js`: `gerarCSV`, `downloadCSV`

## 2. Casos de teste (resumo)

| Função | Caso | Resultado esperado |
|---|---|---|
| converterValor | 100 * 1.0823 | 108.23 |
| converterValor | valor inválido / negativo | 0 |
| formatarMoeda | 108.23 USD | "108.23 USD" |
| inverterMoedas | EUR, USD | {origem: USD, destino: EUR} |
| dataInicioPeriodo | 7d a partir de 2026-10-27 | 2026-10-20 |
| filtrarPorIntervaloDatas | intervalo 10-02..10-09 | 1 registro |
| filtrarPorCotacao | min 1.075, max 1.085 | 1 registro |
| ordenarRegistros | desc por cotação | maior primeiro |
| aplicarFiltros | dataMin + cotacaoMax | 2 registros |
| gerarCSV | 1 registro | cabeçalho + linha |
| gerarCSV | vazio | string vazia |

## 3. Execução

```bash
npm run test
```

Script: `src/utils/runTests.js` (Node assert). Resultado esperado: 11 testes passando.