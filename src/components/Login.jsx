import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Login() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://marvel-api-production.up.railway.app/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          credenciales: emailOrPhone,
          contrasena: password
        })
      });

      const data = await response.json();

      if (response.ok) {
        // Aquí puedes manejar la respuesta exitosa y redireccionar al usuario a la página principal, por ejemplo.
        console.log('Usuario autenticado exitosamente');
      } else {
        // errores de autenticación
        console.log(data.info);
      }
    } catch (error) {
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
