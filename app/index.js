import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import MenuInferior from './components/menuInferior';
import Login from './screens/login'
import Dashboard from './screens/dashboard'
import Adoracao from './screens/adoracao'
import Harpa from './screens/harpa'
import Hino from './screens/hino'
import Hinario from './screens/hinario'; 
import HinoGeral from './screens/hinoGeral';

export default function Page() {
  const [currentScreen, setCurrentScreen] = useState('Dashboard')
  const [selectedHino, setSelectedHino] = useState(null);
  const [selectedHinoGeral, setSelectedHinoGeral] = useState(null);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const checkLoginStatus = async () => {
  //     try {
  //       const token = await AsyncStorage.getItem('userToken');
  //       if (token) {
  //         setIsLoggedIn(true);
  //         setCurrentScreen('Dashboard');
  //       }
  //     } catch (error) {
  //       console.error('Failed to check login status:', error);
  //     }
  //   };

  //   checkLoginStatus();
  // }, []);


  const navigateTo = (screen, hino = null, hinoGeral = null) => {
    setSelectedHino(hino);
    setSelectedHinoGeral(hinoGeral);
    setCurrentScreen(screen);
  };

  let ScreenComponent;

  // if (!isLoggedIn) {
  //   ScreenComponent = Login;
  // } else {
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
      default:
        ScreenComponent = Dashboard;
        break;
    }
  // }


  return (    
    <View style={styles.container}>
      <ScreenComponent navigateTo={navigateTo} selectedHino={selectedHino} selectedHinoGeral={selectedHinoGeral} />
      <MenuInferior navigateTo={navigateTo} />
    </View>    
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
