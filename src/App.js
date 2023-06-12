import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppMain from './components/index';
import ForgotPassword from './components/fp';
import AboutUs from './components/Nosotros';
import Login from './components/Login';
import Register from './components/Register';
import Perfil from './components/Perfil';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/AppMain" element={<AppMain />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Perfil" element={<Perfil />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
