// src/pages/LoginPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Aquí puedes validar usuario y contraseña si lo deseas
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <h1>Bienvenido a Residencial App</h1>
      <p>Inicia sesión para continuar</p>
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
};

export default LoginPage;
