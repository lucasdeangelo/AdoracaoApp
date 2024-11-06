import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const token = await AsyncStorage.getItem('userToken');
      const id_user = await AsyncStorage.getItem('userId');
      const userType = await AsyncStorage.getItem('userType');
      
      if (token && id_user && userType) {
        setUser({ token, id_user, userType });
      }
    };

    loadUser();
  }, []);

  const login = async ({ token, id_user, userType }) => {
    await AsyncStorage.setItem('userToken', token);
    await AsyncStorage.setItem('userId', id_user);
    await AsyncStorage.setItem('userType', userType);
    setUser({ token, id_user, userType });
  };


  const logout = () => {
    setUser(null);
    AsyncStorage.removeItem('userToken');
    AsyncStorage.removeItem('userId');
    AsyncStorage.removeItem('userType');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
