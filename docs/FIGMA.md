# Figma e Protótipos — Currency Exchange App

## 1. Link do Figma

- URL do protótipo: _a ser preenchido após a criação no Figma_
- Arquivo de evidências: `docs/figma/` (screenshots exportados do Figma)

## 2. Wireframe de baixa fidelidade

### 2.1 Tela principal (desktop)

```
+--------------------------------------------------------------+
|  Currency Exchange App                              [logo]  |
+--------------------------------------------------------------+
|  [ Moeda origem ▼ ]  ->  [ Moeda destino ▼ ]  [ ⇄ inverter ] |
|                                                              |
|  Valor: [ 100.00 ]          Taxa: 1.0823   Data: 2026-10-27  |
|  Resultado: 108.23 USD                                       |
+--------------------------------------------------------------+
|  Período: [ 7d | 15d | 30d | 3m | 6m | 1a | 5a ]            |
+---------------------------+----------------------------------+
|  GRÁFICO (linha)          |  TABELA (data | cotação)        |
|  evolução da cotação      |  [ filtro data min/max ]         |
|                           |  [ filtro cotação min/max ]      |
|                           |  [ limpar filtros ]              |
|                           |  Registros: 30                   |
|                           |  [ Exportar CSV ]                |
+---------------------------+----------------------------------+
```

### 2.2 Tela principal (mobile)

```
+-----------------------------+
|  Currency Exchange App       |
+-----------------------------+
|  [ Moeda origem ▼ ]         |
|  [ Moeda destino ▼ ]        |
|  [ ⇄ inverter ]             |
|  Valor: [ 100.00 ]          |
|  Taxa: 1.0823               |
|  Data: 2026-10-27           |
|  Resultado: 108.23 USD      |
+-----------------------------+
|  Período: [ 7d ][15d][30d]  |
|           [3m ][6m ][1a][5a]|
+-----------------------------+
|  GRÁFICO (linha)            |
+-----------------------------+
|  TABELA                     |
|  [ filtros ]                |
|  Registros: 30              |
|  [ Exportar CSV ]           |
+-----------------------------+
```

## 3. Protótipo de média fidelidade

O protótipo de média fidelidade aplica a identidade visual (cores, tipografia,
espaçamentos) sobre o wireframe de baixa fidelidade, definindo:

- paleta de cores (primária, secundária, neutros, sucesso/erro);
- tipografia (família, tamanhos, pesos);
- espaçamentos e grid;
- estados dos componentes (hover, focus, disabled);
- ícones (Lucide React).

## 4. Estados da interface

- **Loading**: skeleton/spinner enquanto a API é consultada.
- **Erro**: mensagem amigável com opção de tentar novamente.
- **Ausência de dados**: mensagem informando que não há registros para o período.
- **Entrada inválida**: feedback visual no campo de valor.
- **Vazio (filtros)**: mensagem quando os filtros não retornam registros.

## 5. Adaptação mobile

- Layout em coluna única.
- Seletores e botões com área de toque adequada.
- Gráfico redimensionável (responsivo).
- Tabela com scroll horizontal quando necessário.

## 6. Mapeamento preliminar de componentes (detalhado em COMPONENTS.md)

- Header
- CurrencySelector (origem/destino)
- AmountInput
- ConvertButton / SwapButton
- RateInfo (taxa e data)
- ResultDisplay
- PeriodSelector
- HistoryChart
- HistoryTable (com filtros e ordenação)
- FilterBar
- ExportCsvButton
- LoadingState / ErrorState / EmptyState
path">
C:\Users\otavi\Desktop\CurrencyExhcangeAPP\docs\FIGMA.md