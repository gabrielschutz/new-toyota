import Menu from '../../components/Slidebar/Sidebar';
import { Card } from '../../components/Card';
import './style.css';
import React from 'react';

function DashboardMaquinas() {

  const teste = {
    nomeMaquina: "Valor",
    nomeOperador: "Valor",
    codigo: "Valor",
    iot:"Valor"
  }

  return (

    <div>
      <Menu />
      <div className="DashBoardMaquinas-section">
        <Card dados={teste}/>
        <Card dados={teste}/>
        <Card dados={teste}/>
        <h1>DashboardMaquinas</h1>
        <p>Teste to the  DashboardMaquinas  page.</p>
      </div>
    </div>
  )
}

export default DashboardMaquinas;
