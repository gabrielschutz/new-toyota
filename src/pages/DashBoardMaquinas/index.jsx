import Menu from '../../components/Slidebar/Sidebar';
import { Card } from '../../components/Card';
import './style.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

function DashboardMaquinas() {
  const location = useLocation();
  const nome = location.state.nome;
  const email = location.state.email;
  return (
    <div>
      <Menu />
      <div className="DashBoardMaquinas-section">
        <h1>DashboardMaquinas</h1>
        <Card />
        <p>Teste to the DashboardMaquinas page.</p>
      </div>
    </div>
  )
}

export default DashboardMaquinas;
