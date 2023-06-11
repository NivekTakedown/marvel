import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

function Register() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    axios.post('https://marvel-api-production.up.railway.app/api/user/register', {
      nombre,
      apellido,
      correo_electronico: email,
      telefono,
      contrasena,
    })
      .then(response => {
        const { info } = response.data;
        setMessage(info);
      })
      .catch(error => {
        console.error('Error al registrar el usuario:', error);
        setMessage('Error al registrar el usuario');
      });
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
              <input type="text" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} required />
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
      <p>{message}</p>
    </div>
  );
}

export default Register;
