import './styles.css'

export function Card(dados) {
  return (
    <div className="caixa-info">
      <div className="info-section">
        <label htmlFor="nome-operador">Nome da maquina:</label>
        <span id="nome-operador">{dados.nomeMaquina}</span>
      </div>
      <div className="info-section">
        <label htmlFor="nome-operador">Nome do Operador:</label>
        <span id="nome-operador">{dados.nomeOperador}</span>
      </div>
      <div className="info-section">
        <label htmlFor="codigo">Código:</label>
        <span id="codigo">{dados.codigo}</span>
      </div>
      <div className="info-section">
        <label htmlFor="iot">IoT:</label>
        <span id="iot">{dados.iot}</span>
      </div>
      <div className="info-section">
        <label htmlFor="Status">Status:</label>
        <i className='bx bx-info-circle' ></i>
      </div>
    </div>
  )
}