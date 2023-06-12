import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../components/styles.css'; // Importa tu archivo CSS personalizado aquí
import axios from 'axios';
import Modal from 'react-modal';

function Login() {
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
  
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
          localStorage.setItem('token', response.data.data[0].token);
          //get token from local storage
          // redireccionar a la ruta /appMain
          window.location.href = '/appMain';
        }
      } catch (error) {
        console.log(error.response.status);
        if (error.response.status === 401) {
          setModalMessage('Credenciales incorrectas');
        }
        else if (error.response.status === 404) {
          setModalMessage('Usuario no encontrado');
        }
        else{
          setModalMessage('Error del servidor');
        }
  
        setModalIsOpen(true);
      }
    };

  return (
    <div>
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

      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className="custom-modal"> {/* Agrega la clase "custom-modal" al modal */}
        <div>{modalMessage}</div>
        <button onClick={() => setModalIsOpen(false)}>Cerrar</button>
      </Modal>
    </div>
  );
}

export default Login;