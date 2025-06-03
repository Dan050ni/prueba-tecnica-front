import React, { createContext, useState, useContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const res = await fetch(`http://localhost:3001/users?email=${email}&password=${password}`);
      const data = await res.json();

      if (data.length > 0) {
        const loggedInUser = data[0];
        setUser(loggedInUser);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error de login:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
  };

  // Función para registrar nuevo usuario
  const register = async ({ name, email, password, role }) => {
    try {
      // Verificar si ya existe usuario con ese email
      const checkRes = await fetch(`http://localhost:3001/users?email=${email}`);
      const existingUsers = await checkRes.json();

      if (existingUsers.length > 0) {
        // Ya existe usuario con ese email
        return false;
      }

      // Crear nuevo usuario
      const res = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, role }),
      });

      return res.ok;
    } catch (error) {
      console.error('Error de registro:', error);
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
