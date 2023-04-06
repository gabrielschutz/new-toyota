import React, { useState } from 'react';
import Menu from '../../components/Slidebar/Sidebar';


import './style.css';

function Home() {
  
  return (
    <div>
      <Menu />
      <div className="home-section">
        <h1>Home Page</h1>
        <p>Teste to the home page.</p>
      </div>
    </div>
  )
}

export default Home;
