import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/auth.css';

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role] = useState('student'); // Todos los que se registran serán estudiantes
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const success = await register({ name, email, password, role });

    if (success) {
      navigate('/login');
    } else {
      setError('Error al registrarse, intenta más tarde.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-logo">T</div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Nombre completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <span className="icon">👤</span>
        </div>

        <div className="input-group">
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <span className="icon">📧</span>
        </div>

        <div className="input-group">
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span className="icon">🔒</span>
        </div>

        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

        <button type="submit">Registrarse</button>
      </form>

      <p>
        ¿Ya tienes cuenta?{' '}
        <Link to="/login">Inicia sesión aquí</Link>
      </p>
    </div>
  );
};

export default Register;
