import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ScriptMenuBar from '../ScriptMenuBar';
import './style.css'

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="logo-details">
          <i className='bx bxs-factory icon'></i>
          <div className="logo_name">Toyota Project</div>
          <i className='bx bx-menu' id="btn" onClick={toggleSidebar}></i>
        </div>
        <ul className="nav-list">
          <li>
            <Link to="/">
              <i className='bx bx-home' ></i>
              <span className="links_name">Inicio</span>
            </Link>
            <span className="tooltip">Inicio</span>
          </li>
          <li>
            <Link to="/dashboardmaquinas">
              <i className='bx bxs-hard-hat'></i>
              <span className="links_name">Dashboard Maquinas</span>
            </Link>
            <span className="tooltip">Dashboard Maquinas</span>
          </li>
          <li>
            <Link to="/dashboardlinhas">
            <i className='bx bxs-package'></i>
              <span className="links_name">Dashboard Linhas</span>
            </Link>
            <span className="tooltip">Dashboard Linhas</span>
          </li>
          <li>
            <Link to="/unidades">
              <i className='bx bx-buildings' ></i>
              <span className="links_name">Unidades</span>
            </Link>
            <span className="tooltip">Unidades</span>
          </li>
          <li>
            <Link to="/avisos">
              <i className='bx bx-error-circle' ></i>
              <span className="links_name">Avisos</span>
            </Link>
            <span className="tooltip">Avisos</span>
          </li>
          <li>
            <Link to="/configs">
              <i className='bx bx-cog' ></i>
              <span className="links_name">Configurações</span>
            </Link>
            <span className="tooltip">Configurações</span>
          </li>
          <li className="profile">
            <div className="profile-details">
              <div className="name_job">
                <div className="name">Prem Shahi</div>
                <div className="job">Web designer</div>
              </div>
            </div>
            <i className='bx bx-log-out' id="log_out" ></i>
          </li>
        </ul>
      </div>
      <ScriptMenuBar />
    </div>
  );
};

export default Sidebar;
