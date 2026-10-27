# Requisitos — Currency Exchange App

## 1. Contexto

Você foi contratado como desenvolvedor front-end por uma empresa de tecnologia
financeira. A empresa deseja disponibilizar uma ferramenta para consultar taxas
de câmbio, converter valores e analisar o comportamento histórico de moedas.

Hoje, os usuários consultam diferentes sites, realizam conversões manualmente e
copiam informações para planilhas. A proposta é centralizar esse processo em uma
Single Page Application desenvolvida em React, consumindo a API Frankfurter.

## 2. Público-alvo

Usuários que precisam consultar taxas de câmbio, converter valores entre moedas
e analisar a evolução histórica de um par de moedas, sem precisar recorrer a
múltiplos sites ou planilhas manuais.

## 3. Objetivo

Desenvolver uma SPA em React capaz de converter moedas, consultar dados
históricos, visualizar gráfico e tabela, aplicar filtros e exportar os dados
selecionados em CSV.

## 4. Escopo

### 4.1 Escopo mínimo do produto

- **Conversor de moedas**
- **Histórico e gráfico**
- **Tabela de dados**
- **Exportação CSV**

### 4.2 Fora do escopo

Não é necessário implementar:

- autenticação;
- cadastro de usuários;
- back-end próprio;
- banco de dados;
- pagamentos;
- compra ou venda real de moedas.

## 5. Requisitos Funcionais (RF)

### 5.1 Conversor de moedas

- RF01: O usuário deve poder selecionar a moeda de origem.
- RF02: O usuário deve poder selecionar a moeda de destino.
- RF03: O usuário deve poder informar um valor a ser convertido.
- RF04: A aplicação deve apresentar o valor convertido.
- RF05: A aplicação deve exibir a taxa utilizada na conversão.
- RF06: A aplicação deve exibir a data efetiva da cotação.
- RF07: O usuário deve poder inverter as moedas selecionadas.
- RF08: A aplicação deve validar entradas inválidas.

### 5.2 Histórico e gráfico

- RF09: A aplicação deve disponibilizar os seguintes períodos de análise:
  7 dias, 15 dias, 30 dias, 3 meses, 6 meses, 1 ano e 5 anos.
- RF10: A aplicação deve consultar e exibir a evolução histórica do par de
  moedas selecionado.
- RF11: A aplicação deve apresentar os dados históricos em um gráfico dinâmico.
- RF12: A aplicação deve atualizar os dados ao alterar o par de moedas ou o
  período selecionado.

### 5.3 Tabela de dados

- RF13: A aplicação deve exibir os registros históricos em uma tabela.
- RF14: A tabela deve permitir filtro por intervalo de datas.
- RF15: A tabela deve permitir filtro por cotação mínima e máxima.
- RF16: A tabela deve permitir a combinação de filtros.
- RF17: A tabela deve permitir a limpeza dos filtros.
- RF18: A tabela deve permitir ordenação por data.
- RF19: A tabela deve permitir ordenação por cotação.
- RF20: A tabela deve exibir a quantidade de registros encontrados.

### 5.4 Exportação CSV

- RF21: A aplicação deve exportar apenas os registros resultantes dos filtros.
- RF22: O arquivo CSV deve incluir cabeçalhos.
- RF23: O arquivo CSV deve ser gerado no navegador.
- RF24: A aplicação deve impedir a exportação quando não houver registros.
- RF25: O arquivo deve utilizar um nome identificável.

## 6. Requisitos Não Funcionais (RNF)

- RNF01: A aplicação deve ser uma SPA desenvolvida em React.
- RNF02: O projeto deve ser criado e executado com Vite.
- RNF03: Os estilos devem ser organizados com CSS Modules.
- RNF04: A interface deve ser responsiva em desktop e dispositivos móveis.
- RNF05: A aplicação deve exibir estados de loading, erro e ausência de dados.
- RNF06: O consumo da API deve utilizar fetch com async/await.
- RNF07: A lógica reutilizável deve ser extraída em Custom Hooks.
- RNF08: O projeto deve ser executável a partir das instruções do README.
- RNF09: O versionamento deve representar a evolução incremental do projeto.

## 7. Regras de Negócio

- RN01: A conversão do valor informado pelo usuário é realizada pela aplicação
  a partir da taxa obtida na API.
- RN02: As cotações são obtidas da API Frankfurter.
- RN03: A aplicação deve lidar com datas sem cotação publicada (finais de
  semana/feriados), utilizando a cotação mais recente disponível.
- RN04: Os filtros da tabela atuam sobre os registros históricos carregados.
- RN05: A exportação CSV contém exatamente os registros filtrados da tabela.
- RN06: A exportação é bloqueada quando não há registros a exportar.

## 8. Critérios de Aceite

A aplicação será considerada concluída quando:

- a conversão entre duas moedas funcionar corretamente;
- a inversão das moedas funcionar;
- os dados atualizarem ao alterar o par de moedas;
- todos os períodos históricos funcionarem;
- o gráfico exibir dados reais;
- a tabela exibir dados reais;
- os filtros individuais e combinados funcionarem;
- a ordenação funcionar;
- a exportação CSV funcionar;
- entradas inválidas forem tratadas;
- a ausência de dados for tratada;
- falhas na API forem tratadas;
- os estados de loading forem exibidos;
- a responsividade funcionar em desktop e celular;
- o projeto for instalável e executável a partir do README.

## 9. Tecnologias e Conceitos Obrigatórios

- React + JSX (componentes funcionais)
- Vite (criação, desenvolvimento e build)
- Props (comunicação entre componentes)
- useState (controle de moedas, valores, períodos, filtros e estados)
- useEffect (sincronização de efeitos e consultas à API)
- Custom Hooks (extração de lógica reutilizável)
- Fetch + async/await (consumo da API Frankfurter)
- CSS Modules (organização e isolamento dos estilos)
- Biblioteca de gráficos (visualização do histórico)
- Postman (investigação e validação dos endpoints)
- Git + GitHub (versionamento e evidência da evolução incremental)

## 10. Bibliotecas Permitidas

- Recharts ou Chart.js (gráficos)
- Lucide React (ícones)
- date-fns (manipulação de datas)
- Papa Parse (exportação CSV)

As bibliotecas não substituem os conceitos trabalhados em aula. A lógica de
conversão, estados, efeitos, filtros, ordenação, consumo da API e exportação
deve ser compreendida e explicável.
path">
C:\Users\otavi\Desktop\CurrencyExhcangeAPP\docs\REQUIREMENTS.md