import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import MenuInferior from './components/menuInferior';
import Login from './screens/login'
import Dashboard from './screens/dashboard'
import Adoracao from './screens/adoracao'
import Harpa from './screens/harpa'
import Hino from './screens/hino'

export default function Page() {
  const [currentScreen, setCurrentScreen] = useState('Dashboard')
  const [selectedHino, setSelectedHino] = useState(null);
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


  const navigateTo = (screen, hino = null) => {
    setSelectedHino(hino);
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
      default:
        ScreenComponent = Dashboard;
    }
  // }


  return (    
    <View style={styles.container}>
      <ScreenComponent navigateTo={navigateTo} selectedHino={selectedHino} />
     <MenuInferior navigateTo={navigateTo} />
    </View>    
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
