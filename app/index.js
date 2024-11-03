import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthProvider, AuthContext } from './contexts/AuthContext';
import MenuInferior from './components/menuInferior';
import Login from './screens/login'
import Cadastro from './screens/cadastro'
import Dashboard from './screens/dashboard'
import Adoracao from './screens/adoracao'
import Harpa from './screens/harpa'
import Hino from './screens/hino'
import Hinario from './screens/hinario'; 
import HinoGeral from './screens/hinoGeral';

function Page() {
  const [currentScreen, setCurrentScreen] = useState('Dashboard')
  const [selectedHino, setSelectedHino] = useState(null);
  const [selectedHinoGeral, setSelectedHinoGeral] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        if (token) {
          setIsLoggedIn(true);
          setCurrentScreen('Dashboard');
        } else {
          setIsLoggedIn(false);
          setCurrentScreen('Login'); 
        }
      } catch (error) {
        console.error('Failed to check login status:', error);
      }
    };

    checkLoginStatus();
  }, []);


  const navigateTo = (screen, hino = null, hinoGeral = null) => {
    setSelectedHino(hino);
    setSelectedHinoGeral(hinoGeral);
    setCurrentScreen(screen);
  };

  const handleLogin = async (userToken) => {
    try {
      await AsyncStorage.setItem('userToken', userToken); // Salva o token no AsyncStorage
      setIsLoggedIn(true);
      setCurrentScreen('Dashboard'); 
    } catch (error) {
      console.error('Erro ao salvar token de login:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userToken'); 
      setIsLoggedIn(false);
      setCurrentScreen('Login'); 
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };


  let ScreenComponent;

   if (!isLoggedIn) {
     ScreenComponent = Login;     
  } else {
    switch (currentScreen) {
      case 'Dashboard':
        ScreenComponent = Dashboard;
        break;
      case 'Adoracao':
        ScreenComponent = Adoracao;
        break;
      case 'Harpa':
        ScreenComponent = Harpa;
        break;
      case 'Hino':
        ScreenComponent = Hino;
        break;
      case 'Hinario':
        ScreenComponent = Hinario;
        break;
      case 'HinoGeral': 
        ScreenComponent = HinoGeral;
        break;
      case 'Cadastro':
        ScreenComponent = Cadastro;
        break;
      default:
        ScreenComponent = Dashboard;
        break;
    }
  }
  console.log('Navegando para:', currentScreen);


  return (    
    <View style={styles.container}>
      <ScreenComponent
        navigateTo={navigateTo}
        selectedHino={selectedHino}
        selectedHinoGeral={selectedHinoGeral}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
      {isLoggedIn && <MenuInferior navigateTo={navigateTo} />}
    </View>   
  )
}
export default function App() {
  return (
    <AuthProvider>
      <Page />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
