import React from 'react';
import './styles.css';

function Register() {
  return (
    <div>
      <header>
        <img src="https://wallpapercave.com/wp/wp2700223.jpg" width="600" height="200" alt="Comic Webpage Logo" />
        <h1>Registrate</h1>
        <nav>
          <ul>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="comics.html">Comics</a></li>
            <li><a href="Nosotros.html">Nosotros</a></li>
          </ul>
        </nav>
      </header>

      <div className="container">
        <div className="wrapper">
          <div className="title"><span>Regístrate</span></div>
          <form action="#">
            <div className="row">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Nombre" required />
            </div>
            <div className="row">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Apellido" required />
            </div>
            <div className="row">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" required />
            </div>
            <div className="row">
              <i className="fas fa-phone"></i>
              <input type="tel" placeholder="Teléfono" required />
            </div>
            <div className="row">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Contraseña" required />
            </div>
            <div className="row button">
              <input type="submit" value="Regístrate" />
            </div>
            <div className="signup-link">¿Ya eres miembro? <a href="Comics.html">Inicia sesión</a></div>
          </form>
        </div>
      </div>
    </div>
  );
}