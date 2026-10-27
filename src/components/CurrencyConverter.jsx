import styles from './CurrencyConverter.module.css'

const MOEDAS = [
  { code: 'EUR', nome: 'Euro' },
  { code: 'USD', nome: 'Dólar Americano' },
  { code: 'BRL', nome: 'Real Brasileiro' },
  { code: 'GBP', nome: 'Libra Esterlina' },
  { code: 'JPY', nome: 'Iene Japonês' },
]

function CurrencyConverter({ moedaOrigem, moedaDestino, valor, taxa, data, onOrigemChange, onDestinoChange, onValorChange, onInverter }) {
  const resultado = (parseFloat(valor) || 0) * taxa

  return (
    <section className={styles.card}>
      <h2 className={styles.cardTitulo}>Conversor de moedas</h2>
      <div className={styles.conversor}>
        <div className={styles.campo}>
          <label>Moeda de origem</label>
          <select value={moedaOrigem} onChange={(e) => onOrigemChange(e.target.value)}>
            {MOEDAS.map((m) => (
              <option key={m.code} value={m.code}>{m.code} — {m.nome}</option>
            ))}
          </select>
        </div>

        <div className={styles.campo}>
          <label>Valor</label>
          <input type="number" value={valor} onChange={(e) => onValorChange(e.target.value)} min="0" />
        </div>

        <button className={styles.botaoInverter} onClick={onInverter} title="Inverter moedas">⇄</button>

        <div className={styles.campo}>
          <label>Moeda de destino</label>
          <select value={moedaDestino} onChange={(e) => onDestinoChange(e.target.value)}>
            {MOEDAS.map((m) => (
              <option key={m.code} value={m.code}>{m.code} — {m.nome}</option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.resultado}>
        <p>Taxa: <strong>{taxa}</strong> · Data: <strong>{data}</strong></p>
        <p className={styles.valorConvertido}>
          {valor || 0} {moedaOrigem} = {resultado.toFixed(2)} {moedaDestino}
        </p>
      </div>
    </section>
  )
}

export default CurrencyConverter