# Currency Exchange App

Single Page Application (SPA) em React para consultar taxas de câmbio, converter
valores e analisar o comportamento histórico de moedas, utilizando a API
Frankfurter.

## Funcionalidades

- Seleção de moeda de origem e destino.
- Conversão de valor com exibição de taxa e data da cotação.
- Inversão das moedas.
- Validação de entradas inválidas.
- Seleção de período de análise (7d, 15d, 30d, 3m, 6m, 1a, 5a).
- Gráfico histórico dinâmico.
- Tabela com dados reais, filtros combináveis (data e cotação) e ordenação.
- Exportação dos registros filtrados em CSV.
- Estados de loading, erro e ausência de dados.
- Interface responsiva (desktop e mobile).

## Tecnologias

- React 19 + JSX (componentes funcionais)
- Vite 7
- Recharts (gráficos)
- CSS Modules
- Fetch + async/await
- Postman (investigação da API)
- Git + GitHub

## Instalação

```bash
npm install
```

## Execução

```bash
npm run dev
```

Acesse `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## Testes

```bash
npm run test        # testes das funções (Node assert)
npm run lint        # lint
```

## Arquitetura

```
src/
  assets/
  components/        # Header, CurrencyConverter, PeriodSelector, HistoryChart, HistoryTable
  hooks/             # useExchangeData
  services/          # frankfurter.js
  utils/             # currency, periods, filters, csv
  App.jsx
  App.module.css
  main.jsx
docs/
  REQUIREMENTS.md
  COMPONENTS.md
  FIGMA.md
  API_TESTS.md
  FUNCTION_TESTS.md
  AI_USAGE.md
  postman_collection.json
```

## Documentação

- `docs/REQUIREMENTS.md` — requisitos e regras de negócio.
- `docs/COMPONENTS.md` — arquitetura e responsabilidades dos componentes.
- `docs/FIGMA.md` — protótipos e wireframes.
- `docs/API_TESTS.md` — investigação e testes da API no Postman.
- `docs/FUNCTION_TESTS.md` — testes das funções JavaScript.
- `docs/AI_USAGE.md` — registro do uso de IA.

## Imagens

Adicione screenshots da aplicação em `docs/images/` e referencie aqui.