import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DashboardMaquinas from './pages/DashBoardMaquinas';
import DashboardLinhas from './pages/DashBoardLinhas';
import Configs from './pages/Configs';
import Avisos from './pages/Avisos';
import Unidades from './pages/Unidades';

function rotas() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/dashboardmaquinas" element={<DashboardMaquinas />} />
      <Route exact path="/dashboardlinhas" element={<DashboardLinhas />} />
      <Route exact path="/configs" element={<Configs />} />
      <Route exact path="/avisos" element={<Avisos />} />
      <Route exact path="/unidades" element={<Unidades />} />
    </Routes>
  );
}

export default rotas;
