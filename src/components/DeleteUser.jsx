import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';
import Modal from 'react-modal';
import Header from '../page/header';

function DeleteUser() {
  const [credenciales, setcredenciales] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleDeleteUser = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://marvel-api-production.up.railway.app/api/user/deleteUser', {
        credenciales,
        contrasena,
        token: localStorage.getItem('token'),
      });
      if(response.status === 200){
      setModalMessage('Usuario eliminado exitosamente')
      setModalIsOpen(true);
      localStorage.removeItem('token');
      setTimeout(() => {
        //redireccionar a login
        window.location.href = '/appMain';
      }
      , 5000);
      }

    } catch (error) {
    if (error.response.status === 400) {
        setModalMessage('Logueate primero');
      }
    if (error.response.status === 401) {
      setModalMessage('Credenciales incorrectas');
    }
    else if (error.response.status === 401) {
      setModalMessage('Usuario no encontrado');
    }
    setModalIsOpen(true);
  }
  };

  return (
    <div>
      {/* Header */}
      <Header title="Borrar usuario"/>

      {/* Registration Section */}
      <div className="container">
        <div className="wrapper">
          <div className="title"><span>Borrar</span></div>
          <form onSubmit={handleDeleteUser}>
            <div className="row">
              <i className="fas fa-envelope"></i>
              <input type="text" placeholder="credenciales" value={credenciales} onChange={(e) => setcredenciales(e.target.value)} required />
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
        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className="custom-modal"> {/* Agrega la clase "custom-modal" al modal */}
        <div>{modalMessage}</div>
        <button onClick={() => setModalIsOpen(false)}>Cerrar</button>
      </Modal>
      </div>
    </div>
  );
}

export default DeleteUser;