import React from 'react';
import './styles.css';
import Header from '../page/header/index.jsx';




function ForgotPassword() {
  return (
    <div>
      <Header title="Registrate"/>

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
export default ForgotPassword ;