import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import axios from 'axios';

function Login() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${"https://marvel-api-production.up.railway.app/api/user/login"}`,
        {
          credenciales: emailOrPhone,
          contrasena: password
        }
      );

      if (response.status === 200) {
        // guardar el token en el local storage
        localStorage.setItem('token', response.data.token);
        // redireccionar a la ruta /appMain
        window.location.href = '/appMain';
      }
    } catch (error) {
      console.log(error.response.data);
      console.error(error);
      // errores de conexión con el servidor
    }
  };

  return (
    <div>
      <header>
        <img src="https://wallpapercave.com/wp/wp2700223.jpg" width="600" height="200" alt="Comic Webpage Logo" />
        <h1>Registrate</h1>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/appMain">Comics</Link></li>
            <li><Link to="/AboutUs">Nosotros</Link></li>
          </ul>
        </nav>
      </header>

      <div className="container">
        <div className="wrapper">
          <div className="title"><span>Logueate</span></div>
          <form onSubmit={handleLogin}>
            <div className="row">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Email o teléfono" required value={emailOrPhone} onChange={(e) => setEmailOrPhone(e.target.value)} />
            </div>
            <div className="row">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Contraseña" required value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="signup-link">¿Olvidaste tu contraseña? <a href="/ForgotPassword">Haz clic aquí</a></div>
            <div className="row button">
              <input type="submit" value="Logueate" />
            </div>
            <div className="signup-link">No eres miembro? <Link to="/register">Regístrate ahora</Link></div>
          </form>
        </div>
      </div>

      <footer>
        <p>&copy; 2023 Comic Webpage. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Login;
