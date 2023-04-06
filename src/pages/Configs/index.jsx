import Menu from '../../components/Slidebar/Sidebar';

import './style.css';

import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const Configuracoes = (props) => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

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
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input defaultValue="test" {...register("example")} />
            {/* include validation with required or other standard HTML validation rules */}
            <input {...register("exampleRequired", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
            <input type="submit" />
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

