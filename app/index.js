import { View, StyleSheet } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthProvider, AuthContext } from './contexts/AuthContext';
import Login from './screens/login';
import Cadastro from './screens/cadastro';
import Dashboard from './screens/dashboard';
import DashboardCantor from './screens/dashboardCantor';
import DashboardGrupo from './screens/dashboardGrupo';
import Adoracao from './screens/adoracao';
import Harpa from './screens/harpa';
import Hino from './screens/hino';
import Hinario from './screens/hinario'; 
import HinoGeral from './screens/hinoGeral';
import EnsaiosReg from './screens/ensaiosReg';
import EnsaiosComp from './screens/ensaiosComp';
import EventosCantor from './screens/eventosCantor';
import EventosReg from './screens/eventosReg';
import EventosComp from './screens/eventosComp';
import GrupoReg from './screens/grupoReg';
import GrupoComp from './screens/grupoComp';
import HinarioReg from './screens/hinarioReg';
import HinarioComp from './screens/hinarioComp';
import MenuInferiorAdorador from './components/menuInferior';
import MenuInferiorReg from './components/menuInferiorReg';
import MenuInferiorComp from './components/menuInferiorComp';

const userScreens = {
  Adorador: {
    dashboard: Dashboard,
    menuInferior: MenuInferiorAdorador,
    screens: [Adoracao, Harpa, Hino, Hinario, HinoGeral],
  },
  Músico: {
    dashboard: Dashboard,
    menuInferior: MenuInferiorAdorador,
    screens: [Adoracao, Harpa, Hino, Hinario, HinoGeral],
  },
  Cantor: {
    dashboard: DashboardCantor,
    menuInferior: MenuInferiorAdorador,
    screens: [EventosCantor, Harpa, Hino, Hinario, HinoGeral],
  },
  Regente: {
    dashboard: DashboardGrupo,
    menuInferior: MenuInferiorReg,
    screens: [EnsaiosReg, EventosReg, GrupoReg, HinarioReg, Adoracao],
  },
  Componente: {
    dashboard: DashboardGrupo,
    menuInferior: MenuInferiorComp,
    screens: [EnsaiosComp, EventosComp, GrupoComp, HinarioComp, Adoracao],
  },
};

function Page() {
  const { user } = useContext(AuthContext);
  const [currentScreen, setCurrentScreen] = useState('Dashboard');
  const [selectedHino, setSelectedHino] = useState(null);
  const [selectedHinoGeral, setSelectedHinoGeral] = useState(null);

  console.log('Tipo de usuário atual:', user?.userType);

  const navigateTo = (screen, hino = null, hinoGeral = null) => {
    setSelectedHino(hino);
    setSelectedHinoGeral(hinoGeral);
    setCurrentScreen(screen);
  };

  const handleLogin = async (userToken, userType) => {
    try {
      await AsyncStorage.setItem('userToken', userToken);
      await AsyncStorage.setItem('userType', userType);
      setCurrentScreen('Dashboard');
    } catch (error) {
      console.error('Erro ao salvar token de login:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      await AsyncStorage.removeItem('userType');
      setCurrentScreen('Login');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  const userType = user?.userType;
  const { dashboard: DashboardComponent, menuInferior: MenuComponent } = userScreens[userType] || {};

  let ScreenComponent;

  if (!user) {
    ScreenComponent = Login;
  } else if (currentScreen === 'Dashboard') {
    ScreenComponent = DashboardComponent;
  } else {
    ScreenComponent = userScreens[userType]?.screens.find(screen => screen.name === currentScreen) || DashboardComponent;
  }

  return (
    <View style={styles.container}>
      <ScreenComponent
        navigateTo={navigateTo}
        selectedHino={selectedHino}
        selectedHinoGeral={selectedHinoGeral}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
      {user && MenuComponent && <MenuComponent navigateTo={navigateTo} />}
    </View>
  );
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
