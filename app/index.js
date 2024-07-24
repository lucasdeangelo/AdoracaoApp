import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Login from './screens/login'
import Harpa from './screens/harpa'
import Hino from './screens/hino'

export default function Page() {
  const [currentScreen, setCurrentScreen] = useState('Harpa')
  const [selectedHino, setSelectedHino] = useState(null);

  const navigateTo = (screen, hino = null) => {
    console.log('Navigating to:', screen, 'with hino:', hino);
    setSelectedHino(hino);
    setCurrentScreen(screen);
  };

  return (    
      <View style={styles.container}>
        {currentScreen === 'Harpa' && <Harpa navigateTo={navigateTo} />}
        {currentScreen === 'Hino' && <Hino hino={selectedHino} navigateTo={navigateTo} />}
    </View>    
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
