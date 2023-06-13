import React from 'react';
import './styles.css'; // Importa tu archivo CSS personalizado aquí
import Header from '../page/header/index.jsx';
import LoginForm from '../page/Forms/LoginForm.jsx';

function Login() {


  return (
    <div>
      <Header title="Iniciar sesión" />
      <LoginForm handleLogin />
    </div>
  );
}

export default Login;