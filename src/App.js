import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Componentes/NavBar/NavBar';
import Banner from './Componentes/Banner/Banner';
import Card from './Componentes/Card/Card';
import Organigrama from './Componentes/Organigrama/Organigrama';
import Nosotros from './Componentes/Nosotros/Nosotros';
import Producto from './Componentes/Productos/Producto';
import Productos from './Componentes/Productos/Productos';
import Login from './Componentes/login/login';
import ControlR from './Componentes/ControlRoom/ControlRoom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/controlRoom" element={<ControlR />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div id='inicio'>
      <NavBar />
      <Banner />
      <br></br>
      <br></br>
      <Card />
      <div id='producto'>
      <Producto />
      <br></br>
      <Productos />
      <br></br>
      </div>
      <div id='nosotros'>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        <Nosotros />
        <br></br>
        <Organigrama />
        <br></br>
      </div>
    </div>
  );
}

export default App;
