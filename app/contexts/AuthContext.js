import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const token = await AsyncStorage.getItem('userToken');
      const userType = await AsyncStorage.getItem('userType');
      if (token && userType) {
        setUser({ token, userType });
      }
    };

    loadUser();
  }, []);

  const login = async ({ token, userType }) => {
    await AsyncStorage.setItem('userToken', token);
    await AsyncStorage.setItem('userType', userType);
    setUser({ token, userType });
  };


  const logout = () => {
    setUser(null);
    AsyncStorage.removeItem('userToken');
    AsyncStorage.removeItem('userType');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
