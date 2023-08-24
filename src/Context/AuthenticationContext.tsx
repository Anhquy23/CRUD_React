import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';

const AuthenticationContext = createContext();

export const useAuth = () => {
  return useContext(AuthenticationContext);
};

export const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const {data : users} = await axios.get('http://localhost:3000/users');
      
      const isCheck = users.filter(item => item.email === email && item.password === password)
      // console.log(isCheck);

      // const token = response.data.token;
      // localStorage.setItem('token', token);

      // setUser(response.data.user); 

      return true;
    } catch (error) {
      console.error('Error logging in:', error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const isAuthenticated = () => {
    return user !== null;
  };

  return (
    <AuthenticationContext.Provider
      value={{ user, login, logout, isAuthenticated }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
