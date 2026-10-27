# Testes de API — Currency Exchange App

## 1. Ferramenta

Postman — investigação e validação dos endpoints da API Frankfurter.

## 2. API utilizada

- Base URL: `https://api.frankfurter.app`
- Documentação oficial: https://www.frankfurter.app/docs/

## 3. Endpoints investigados

### 3.1 Moedas disponíveis

- **Método:** GET
- **URL:** `{{baseUrl}}/currencies`
- **Resposta (200):** objeto com código da moeda como chave e nome como valor.
  ```json
  {
    "AUD": "Australian Dollar",
    "BRL": "Brazilian Real",
    "EUR": "Euro",
    "USD": "US Dollar"
  }
  ```
- **Erros possíveis:** 404 quando o recurso não existe.

### 3.2 Cotação mais recente

- **Método:** GET
- **URL:** `{{baseUrl}}/latest?from=EUR&to=USD`
- **Parâmetros:**
  - `from` — moeda de origem (ISO 4217).
  - `to` — moeda(s) de destino (ISO 4217), separadas por vírgula.
- **Resposta (200):**
  ```json
  {
    "amount": 1,
    "base": "EUR",
    "date": "2026-10-27",
    "rates": { "USD": 1.0823 }
  }
  ```
- **Observação:** a conversão do valor informado pelo usuário é realizada pela
  aplicação a partir da taxa obtida.

### 3.3 Histórico por intervalo

- **Método:** GET
- **URL:** `{{baseUrl}}/2026-09-27..2026-10-27?from=EUR&to=USD`
- **Parâmetros:**
  - intervalo de datas no path (`inicio..fim`);
  - `from`, `to`.
- **Resposta (200):**
  ```json
  {
    "amount": 1,
    "base": "EUR",
    "start_date": "2026-09-27",
    "end_date": "2026-10-27",
    "rates": {
      "2026-09-27": { "USD": 1.0750 },
      "2026-09-28": { "USD": 1.0782 }
    }
  }
  ```

## 4. Comportamento em datas sem cotação

Finais de semana e feriados não possuem cotação publicada. A API retorna a
cotação mais recente disponível para o intervalo solicitado. A aplicação deve
tratar esse caso sem quebrar.

## 5. Respostas de erro

- `404` — moeda não suportada ou recurso inexistente.
- `422` — parâmetros inválidos.
- A aplicação deve exibir mensagem amigável e permitir nova tentativa.

## 6. Collection

A collection exportada está em `docs/postman_collection.json`.