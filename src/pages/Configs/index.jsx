import Menu from '../../components/Slidebar/Sidebar';

import './style.css';

import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const Configuracoes = (props) => {

  const [selectedOption, setSelectedOption] = useState('');
 
  const [formState, setFormState] = useState({
    nameMaquina: "",
    nameOperadores: "",
    codigoMaquina: "",
    iotMaquina: ""
  });

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    history.push("/dashboardmaquinas", formState);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  const renderForm = () => {
    switch (selectedOption) {
      case 'opcao1':
        return (
          <div>
            <div>
              <h2 className="TituloConfig">Cadastros de IOTs</h2>
              <label htmlFor="nome" className='TituloConfig'>Nome:</label>
              <div className='container'>
                <input id="inputNameIot" className='caixaTexto' type="text" placeholder="Digite o nome da IOT" />
              </div>
              <label htmlFor="uuid" className='TituloConfig'>UUID:</label>
              <div className='container'>
                <input id="inputUuidIot" className='caixaTexto' type="text" placeholder="Digite o uuid da IOT" />
              </div>
              <div className='divBotaoSub'>
                <button className='BotaoEnviar' type="submit">Enviar</button>
              </div>
            </div>
          </div>
        );
      case 'opcao2':
        return (
          <form onSubmit={handleSubmit}>
            <h2 className="TituloConfig">Cadastros de Maquinas/Processos</h2>
            <label htmlFor="nome" className='TituloConfig'>Nome Maquina:</label>
            <div className='container'>
              <input name="nomeMaquina" value={formState.nameMaquina} onChange={handleChange} id="inputNomeMaquina" className='caixaTexto' type="text" placeholder="Digite o nome da maquina" />
            </div>
            <label htmlFor="uuid" className='TituloConfig'>Operador(es):</label>
            <div className='container'>
              <input name="operadores" value={formState.nameOperadores} onChange={handleChange} id="inputNomeOperador" className='caixaTexto' type="text" placeholder="Digite o do operador ou operadores da maquina" />
            </div>
            <label htmlFor="uuid" className='TituloConfig'>Codigo Maquina:</label>
            <div className='container'>
              <input name="codigoMaquina" value={formState.codigoMaquina} onChange={handleChange} id="inputCodMaquina" className='caixaTexto' type="text" placeholder="Digite o cod da Maquina" />
            </div>
            <label htmlFor="uuid" className='TituloConfig'>IOT da Maquina:</label>
            <div className='container'>
              <input name="iotMaquina" value={formState.iotMaquina} onChange={handleChange} id="inputIotMaquina" className='caixaTexto' type="text" placeholder="Digite o IOT da maquina" />
            </div>
            <div className='divBotaoSub'>
              <button className='BotaoEnviar' type="submit">Enviar</button>
            </div>
            </form>

        );
      case 'opcao3':
        return (
          <div>
            <h2 className="TituloConfig">Cadastros de Linhas de Produção</h2>
            <label htmlFor="nome" className='TituloConfig'>Nome da Linha:</label>
            <div className='container'>
              <input id="inputNameIot" className='caixaTexto' type="text" placeholder="Digite o nome da linha" />
            </div>
            <label htmlFor="uuid" className='TituloConfig'>IOTs da Linha:</label>
            <div className='container'>
              <input id="inputUuidIot" className='caixaTexto' type="text" placeholder="Digite os IOTs da Linha" />
            </div>
          </div>
        );
      case 'opcao4':
        return (
          <div>
            <h2 className="TituloConfig">Cadastros de Unidades</h2>
            <label htmlFor="nome" className='TituloConfig'>Nome da Unidade:</label>
            <div className='container'>
              <input id="inputNameIot" className='caixaTexto' type="text" placeholder="Digite o nome da unidade" />
            </div>
            <label htmlFor="uuid" className='TituloConfig'>Digite o ID das Linhas:</label>
            <div className='container'>
              <input id="inputUuidIot" className='caixaTexto' type="text" placeholder="Digite o ID das Linhas" />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="configs-section">
      <Menu />
      <div className="TituloConfig">
        <h1>Configurações</h1>
      </div>
      <div className='Botoes'>
        <div className="Botao" onClick={() => handleOptionClick('opcao1')}>Cadastro de IOTs</div>
        <div className="Botao" onClick={() => handleOptionClick('opcao2')}>Cadastro de Maquinas/Processos</div>
        <div className="Botao" onClick={() => handleOptionClick('opcao3')}>Cadastro de Linhas de Produção</div>
        <div className="Botao" onClick={() => handleOptionClick('opcao4')}>Cadastro de Unidades</div>
      </div>

      {renderForm()}
    </div>
  );
};

export default Configuracoes;

