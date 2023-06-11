import React from 'react';
import './styles.css';
export default ForgotPassword ;

function ForgotPassword() {
  return (
    <div>
      <header>
        <img src="https://wallpapercave.com/wp/wp2700223.jpg" width="600" height="200" alt="Comic Webpage Logo" />
        <h1>Registrate</h1>
        <nav>
          <ul>
            <li><a href="">Inicio</a></li>
            <li><a href="appMain">Comics</a></li>
            <li><a href="AboutUs">Nosotros</a></li>
          </ul>
        </nav>
      </header>

      <div className="container">
        <div className="wrapper">
          <div className="title"><span>Contraseña Olvidada</span></div>
          <form action="#">
            <div className="row">
              <i className="fas fa-envelope"></i> 
              <input type="email" placeholder="Email" required />
            </div>
            <div className="row button">
              <input type="submit" value="Recuperar Contraseña" />
            </div>
            <div className="login-link"><a href="/">Devuelta al login</a></div>
          </form>
        </div>
      </div>

      <footer>
        <p>&copy; 2023 Comic Webpage. All rights reserved.</p>
      </footer>
    </div>
  );
}