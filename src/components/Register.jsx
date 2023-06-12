import React, { useState } from 'react';
import axios from 'axios';// importa useHistory desde React Router
import './styles.css';

function Register() {
  const [nombre, setNombre] = useState('');
  const [identificacion, setIdentificacion] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${"https://marvel-api-production.up.railway.app/api/user/register"}`,
        {
          nombre,
          identificacion,
          telefono,
          correo_electronico: email,
          contrasena,
        }
      );

      if (response.status === 200) {
        setSuccessMessage('Usuario registrado exitosamente');
        setErrorMessage('');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Error al registrar usuario');
      setSuccessMessage('');
    }
  };

  return (
    <div>
      <header>
        <img src="https://wallpapercave.com/wp/wp2700223.jpg" width="600" height="200" alt="Comic Webpage Logo" />
        <h1>Registrate</h1>
        <nav>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="appMain">Comics</a></li>
            <li><a href="AboutUs">Nosotros</a></li>
          </ul>
        </nav>
      </header>

      <div className="container">
        <div className="wrapper">
          <div className="title"><span>Regístrate</span></div>
          <form onSubmit={handleFormSubmit}>
            <div className="row">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
            </div>
            <div className="row">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Identificación" value={identificacion} onChange={(e) => setIdentificacion(e.target.value)} required />
            </div>
            <div className="row">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="row">
              <i className="fas fa-phone"></i>
              <input type="tel" placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
            </div>
            <div className="row">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Contraseña" value={contrasena} onChange={(e) => setContrasena(e.target.value)} required />
            </div>
            <div className="row button">
              <input type="submit" value="Regístrate" />
            </div>
            <div className="signup-link">¿Ya eres miembro? <a href="/">Inicia sesión</a></div>
          </form>
        </div>
      </div>

      {successMessage && (
        <div className="success-register">
          <h2>Success Register!</h2>
          <p>{successMessage}</p>
          <button onClick={() => setSuccessMessage('')}>Close</button>
        </div>
      )}

      {errorMessage && (
        <div className="error-register">
          <h2>Error!</h2>
          <p>{errorMessage}</p>
          <button onClick={() => setErrorMessage('')}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Register;

