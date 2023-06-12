import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

function DeleteUser() {
  const [credenciales, setcredenciales] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleDeleteUser = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://marvel-api-production.up.railway.app/api/user/deleteUser', {
        credenciales,
        contrasena,
        token: localStorage.getItem('token'),
      });
      console.log(response.data); 
    } catch (error) {
      console.error(error); // Manejo de errores
    }
  };

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
          <form onSubmit={handleDeleteUser}>
            <div className="row">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" value={credenciales} onChange={(e) => setcredenciales(e.target.value)} required />
            </div>
            <div className="row">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Contraseña" value={contrasena} onChange={(e) => setContrasena(e.target.value)} required />
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
