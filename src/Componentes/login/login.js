import React, { useState } from 'react';
import './login.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'; // Importa Link


function Login() {
 

  return (
    <div className="split-screen">
      <div className="left">
        <div className="login-text">
          <h2>Login</h2>
          <h2>Control Room</h2>
          <p>B Tech</p>
        </div>
      </div>
      <div className="right">
        <form className="login-form">
          <label htmlFor="username">Usuario</label>
          <input type="text"  required />

          <label htmlFor="password">Contraseña</label>
          <input type="password"  required />
            <br></br> <br></br>
            <Link to="/controlRoom">
            <button type="submit">Iniciar sesión</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
