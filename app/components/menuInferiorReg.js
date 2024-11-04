import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import React from 'react';

export default function MenuInferiorReg({ navigateTo }) {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View>
          <TouchableOpacity onPress={() => navigateTo('Dashboard')} style={styles.option} activeOpacity={0.7}>            
              <Image source={require('../../assets/icons/inicio.png')} style={styles.image}/>                      
          </TouchableOpacity>
        </View>                

        <View>        
          <TouchableOpacity onPress={() => navigateTo('Adoracao')} style={styles.option} activeOpacity={0.7}>            
            <Image source={require('../../assets/icons/adoracao.png')} style={{...styles.image, height: 48}}/>                        
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => navigateTo('Pesquisa')} style={styles.option} activeOpacity={0.7}>            
            <Image source={require('../../assets/icons/lupa.png')} style={styles.image}/>                
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => navigateTo('GrupoReg')} style={styles.option} activeOpacity={0.7}>            
            <Image source={require('../../assets/icons/grupo.png')} style={{...styles.image, height: 39, }}/>                
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => navigateTo('MaisReg')} style={styles.option} activeOpacity={0.7}>            
              <Image source={require('../../assets/icons/mais.png')} style={styles.image}/>                
          </TouchableOpacity>        
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFCB69',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    left:0,
    right: 0,
  },
  main: {
    display: 'flex',
    flexDirection: 'row',        
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,    
  },
  image: {
    width: 40,
    height: 35,
  },
  option: {
    flex: 1,
    alignItems: 'center',
  },
});