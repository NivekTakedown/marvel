import React from 'react';
import './styles.css';

function DeleteUser() {
  return (
    <div>
      {/* Header */}
      <header>
        <img src="https://wallpapercave.com/wp/wp2700223.jpg" width="600" height="200" alt="Comic Webpage Logo" />
        <h1>Borrar usuario</h1>
        <nav>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="comics">Comics</a></li>
            <li><a href="Nosotros">Nosotros</a></li>
          </ul>
        </nav>
      </header>

      {/* Registration Section */}
      <div className="container">
        <div className="wrapper">
          <div className="title"><span>Borrar</span></div>
          <form action="#">
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
              <input type="submit" value="Borrar" />
            </div>
            <div className="signup-link">¿No deseas eliminarte? <a href="perfil">Regresa</a></div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DeleteUser;
