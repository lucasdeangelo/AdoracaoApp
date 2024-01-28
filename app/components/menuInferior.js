import { StyleSheet, Image, View, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

export default function MenuInferior() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View>
          <TouchableOpacity style={styles.option} activeOpacity={0.7}>
            <Link href={'/screens/dashboard'}>
              <Image source={require('../../assets/icons/inicio.svg')} style={styles.image}/>                
            </Link>
          </TouchableOpacity>
        </View>                

        <View>        
          <TouchableOpacity style={styles.option} activeOpacity={0.7}>
            <Link href={'/screens/adoracao'}>
              <Image source={require('../../assets/icons/adoracao.svg')} style={{...styles.image, height: 48}}/>                
            </Link>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.option} activeOpacity={0.7}>
            <Link href={'/screens/pesquisa'}>
              <Image source={require('../../assets/icons/lupa.svg')} style={styles.image}/>                
            </Link>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.option} activeOpacity={0.7}>
            <Link href={'/screens/favoritos'}>
              <Image source={require('../../assets/icons/coracao.svg')} style={{...styles.image, height: 39}}/>                
            </Link>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.option} activeOpacity={0.7}>
            <Link href={'/screens/mais'}>
              <Image source={require('../../assets/icons/mais.svg')} style={styles.image}/>                
            </Link>
          </TouchableOpacity>        
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFCB69',
    
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  main: {
    display: 'flex',
    flexDirection: 'row',        
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,    
    
  },
  image: {
    width: 45,
    height: 45,
  },
  option: {
    flex: 1,
    alignItems: 'center',
  },
});