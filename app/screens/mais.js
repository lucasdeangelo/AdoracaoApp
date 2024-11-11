import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useFonts, Nunito_500Medium } from '@expo-google-fonts/nunito';
import { Poppins_700Bold, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

export default function Mais() {
  const [fontLoaded] = useFonts({
    Nunito_500Medium,
    Poppins_700Bold, Poppins_600SemiBold
  })

  if (!fontLoaded) {
    return null;
  };
  return (
    <View>
      <View>
        <View>
          <Text style={{paddingLeft: 15, ...styles.h2}}>Mais</Text>

          <View style={{marginTop: 20}}>
            <TouchableOpacity style={styles.item} activeOpacity={0.7}>Editar Perfil</TouchableOpacity>
            
            <TouchableOpacity style={styles.item} activeOpacity={0.7}>Redefinir Senha</TouchableOpacity>

            <TouchableOpacity style={styles.item} activeOpacity={0.7}>Notificações</TouchableOpacity>

            <TouchableOpacity style={styles.item} activeOpacity={0.7}>Mudar Harpa</TouchableOpacity>
          </View>

          <View style={{marginTop: 40}}>
            <TouchableOpacity style={styles.item} activeOpacity={0.7}>Suporte</TouchableOpacity>
            
            <TouchableOpacity style={styles.item} activeOpacity={0.7}>Privacidade</TouchableOpacity>

            <TouchableOpacity style={styles.item} activeOpacity={0.7}>Termos e Condições </TouchableOpacity>            
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  h2: {
    fontSize: 24,
    fontFamily: 'Poppins_700Bold'    
  },
  h3: {
    fontSize: 14,
    fontFamily: 'Nunito_500Medium',
    color: '#BFBFBF',    
  },
  txt: {
    fontSize: 14,
    fontFamily: 'Nunito_500Medium',
    color: '#BFBFBF',
    lineHeight: 14
  },
  item: {
    padding: 14,
    marginHorizontal: 5,
    marginBottom: 16,
    borderRadius: 10,
    backgroundColor: '#FFCB69',
    fontFamily: 'Poppins_600SemiBold',  
    color: '#fff'
  },
})