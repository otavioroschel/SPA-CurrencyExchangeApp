# Componentes — Currency Exchange App

## 1. Mapeamento

| Componente | Responsabilidade | Arquivo JSX | Arquivo CSS Module | Principais props |
|---|---|---|---|---|
| Header | Cabeçalho da aplicação | src/components/Header.jsx | Header.module.css | — |
| CurrencyConverter | Conversor de moedas (seletores, valor, taxa, data, resultado, inverter) | src/components/CurrencyConverter.jsx | CurrencyConverter.module.css | moedas, moedaOrigem, moedaDestino, valor, taxa, data, onOrigemChange, onDestinoChange, onValorChange, onInverter |
| PeriodSelector | Seleção do período de análise | src/components/PeriodSelector.jsx | PeriodSelector.module.css | periodos, periodo, onChange |
| HistoryChart | Gráfico de linha do histórico | src/components/HistoryChart.jsx | HistoryChart.module.css | historico |
| HistoryTable | Tabela com filtros, ordenação e exportação CSV | src/components/HistoryTable.jsx | HistoryTable.module.css | historico |

## 2. Relação entre componentes

```
App
├── Header
├── CurrencyConverter
├── PeriodSelector
└── (grid)
    ├── HistoryChart
    └── HistoryTable
```

`App` mantém o estado global (moedas, seleção, valor, período) e orquestra a consulta
via `useExchangeData`. Os dados fluem para os componentes filhos por props, e as
ações sobem via callbacks.

## 3. Hooks

- `useExchangeData` (src/hooks/useExchangeData.js): consulta taxa atual e histórico,
  expondo `{ taxa, dataTaxa, historico, loading, erro }`.

## 4. Serviços

- `frankfurter.js` (src/services/frankfurter.js): `obterMoedas`, `obterTaxaAtual`,
  `obterHistorico`.

## 5. Utilitários

- `src/utils/currency.js`, `periods.js`, `filters.js`, `csv.js`: funções reutilizáveis
  para conversão, períodos, filtros, ordenação e exportação.