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
import Pesquisa from './screens/pesquisa';
import Favoritos from './screens/favoritos';
import Mais from './screens/mais';
import MaisReg from './screens/maisReg';
import CriarGrupo from './screens/criarGrupo';
import EnsaiosReg from './screens/ensaiosReg';
import EnsaiosComp from './screens/ensaiosComp';
import EventosCantor from './screens/eventosCantor';
import EventosReg from './screens/eventosReg';
import EventosComp from './screens/eventosComp';
import GrupoReg from './screens/grupoReg';
import GrupoComp from './screens/grupoComp';
import HinarioReg from './screens/hinarioReg';
import AdicionarHino from './screens/adicionarHino';
import HinarioComp from './screens/hinarioComp';
import hinarioGrupo from './screens/hinarioGrupo';
import Componentes from './screens/componentes';
import Notificacoes from './screens/notificacoes';
import MenuInferiorAdorador from './components/menuInferior';
import MenuInferiorReg from './components/menuInferiorReg';
import MenuInferiorComp from './components/menuInferiorComp';
import MenuSuperiorAdorador from './components/menuSuperior';
import MenuSuperiorGrupo from './components/menuSuperiorGrupo';

const userScreens = {
  Adorador: {
    dashboard: Dashboard,
    menuSuperior: MenuSuperiorAdorador,
    menuInferior: MenuInferiorAdorador,
    screens: [Adoracao, Harpa, Hino, Hinario, HinoGeral, Pesquisa, Favoritos, Mais, Notificacoes],
  },
  Músico: {
    dashboard: Dashboard,
    menuSuperior: MenuSuperiorAdorador,
    menuInferior: MenuInferiorAdorador,
    screens: [Adoracao, Harpa, Hino, Hinario, HinoGeral, Pesquisa, Favoritos, Mais, Notificacoes],
  },
  Cantor: {
    dashboard: DashboardCantor,
    MenuSuperior: MenuSuperiorAdorador,
    menuInferior: MenuInferiorAdorador,
    screens: [EventosCantor, Harpa, Hino, Hinario, HinoGeral, Pesquisa, Favoritos, Mais, Notificacoes],
  },
  Regente: {
    dashboard: DashboardGrupo,
    menuSuperior: MenuSuperiorGrupo,
    menuInferior: MenuInferiorReg,
    screens: [Adoracao, Harpa, Hino, Hinario, HinoGeral, EnsaiosReg, EventosReg, GrupoReg, HinarioReg, hinarioGrupo, AdicionarHino, Componentes, Adoracao, Pesquisa, Favoritos, MaisReg, CriarGrupo, Notificacoes],
  },
  Componente: {
    dashboard: DashboardGrupo,
    menuSuperior: MenuSuperiorGrupo,
    menuInferior: MenuInferiorComp,
    screens: [EnsaiosComp, EventosComp, GrupoComp, HinarioComp, hinarioGrupo, Adoracao, Harpa, Hino, Hinario, HinoGeral, Pesquisa, Favoritos, Mais, Notificacoes],
  },
};

function Page() {
  const { user } = useContext(AuthContext);
  const [currentScreen, setCurrentScreen] = useState('Dashboard');
  const [selectedHino, setSelectedHino] = useState(null);
  const [selectedHinoGeral, setSelectedHinoGeral] = useState(null);

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
  const { dashboard: DashboardComponent, menuInferior: MenuInferiorComponent, menuSuperior: MenuSuperiorComponent } = userScreens[userType] || {};

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
      {user && MenuSuperiorComponent && <MenuSuperiorComponent navigateTo={navigateTo} />}
      <ScreenComponent
        navigateTo={navigateTo}
        selectedHino={selectedHino}
        selectedHinoGeral={selectedHinoGeral}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
      {user && MenuInferiorComponent && <MenuInferiorComponent navigateTo={navigateTo} />}
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
