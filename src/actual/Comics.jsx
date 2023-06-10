import React from 'react';
import './styles.css';

function Login() {
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
          <div className="title"><span>Logueate</span></div>
          <form action="#">
            <div className="row">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Email o teléfono" required />
            </div>
            <div className="row">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Contraseña" required />
            </div>
            <div className="pass"><a href="fp.html">Olvidaste tu contraseña?</a></div>
            <div className="row button">
              <input type="submit" value="Logueate" />
            </div>
            <div className="signup-link">No eres miembro? <a href="Register.html">Regístrate ahora</a></div>
          </form>
        </div>
      </div>

      <footer>
        <p>&copy; 2023 Comic Webpage. All rights reserved.</p>
      </footer>
    </div>
  );
}