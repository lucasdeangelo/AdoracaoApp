import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);  
  const [id_grupo, setGrupoId] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const token = await AsyncStorage.getItem('userToken');
      const id_user = await AsyncStorage.getItem('userId');
      const userType = await AsyncStorage.getItem('userType');
      const storageidGrupo = await AsyncStorage.getItem('grupoId');
      
      if (token && id_user && userType ) {
        setUser({ token, id_user, userType });
      }      
      if (storageidGrupo) {
        setGrupoId(storageidGrupo); 
      }

    };

    loadUser();
  }, []);

  const login = async ({ token, id_user, userType, id_grupo }) => {
    await AsyncStorage.setItem('userToken', token);
    await AsyncStorage.setItem('userId', id_user);
    await AsyncStorage.setItem('userType', userType);
    if (id_grupo) {
      await AsyncStorage.setItem('grupoId', id_grupo.toString());
      setGrupoId(id_grupo);
    }    setUser({ token, id_user, userType });
    
  };


  const logout = () => {
    setUser(null);
    AsyncStorage.removeItem('userToken');
    AsyncStorage.removeItem('userId');
    AsyncStorage.removeItem('userType');
    AsyncStorage.removeItem('grupoId');
  };

  // const saveGrupoId = async (id) => {
  //   try {      
  //     await AsyncStorage.setItem('grupoId', id.toString());
  //     setGrupoId(id); 
  //   } catch (error) {
  //     console.error('Erro ao salvar grupoId no AsyncStorage:', error);
  //   }
  // };

  

  return (
    <AuthContext.Provider value={{ user, login, logout, setGrupoId, id_grupo }}>
      {children}
    </AuthContext.Provider>
  );
};
