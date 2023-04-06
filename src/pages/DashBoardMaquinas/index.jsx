import Menu from '../../components/Slidebar/Sidebar';
import { Card } from '../../components/Card';
import './style.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

function DashboardMaquinas() {

  const obj = {
    nomeMaquina: "Valor",
    nomeOperador: "Operador",
    codigo: 12,
    iot: "AA"
  }


  return (
    <div>
      <Menu />
      <div className="DashBoardMaquinas-section">
        <h1>DashboardMaquinas</h1>
        <div className='container_flex'>
        <Card dados={obj}/>
        <Card dados={obj}/>
        <Card dados={obj}/>
        </div>
      </div>
    </div>
  )
}

export default DashboardMaquinas;
