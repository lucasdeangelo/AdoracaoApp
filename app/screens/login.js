import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { useFonts, Nunito_500Medium } from '@expo-google-fonts/nunito';
import { Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Link } from 'expo-router';

export default function Login() {
  const [fontLoaded] = useFonts({
    Nunito_500Medium,
    Poppins_700Bold
  })

  if (!fontLoaded) {
    return null;
  }
  return (
    <View>
      <View style={styles.main}>
        <View style={styles.mainText}>
          <Text style={styles.h3}>A paz do Senhor!</Text>
          <Text style={styles.h1}>Seja Bem-vindo!</Text>           
          <Text style={styles.txt}>Insira suas informações abaixo para entrar na sua conta!</Text>        
        </View>

        <View style={styles.form}>
          <View>
            <Text style={styles.h3}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder={'Insira seu Email...'}
            />
          </View>

          <View style={{paddingTop: 15}}>
            <Text style={styles.h3}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder={'Insira sua Senha...'}
            />
          </View>

          <TouchableOpacity style={styles.btn} activeOpacity={0.7}>Entrar</TouchableOpacity>

          <View style={{textAlign: 'center', paddingTop: 20}}>
            <Text style={styles.h3}>Não tem conta ainda? <Link style={styles.span} href={''}>Criar Agora</Link></Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 220,
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  h1: {
    fontSize: 36,
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
  form: {
    paddingTop: 20
  },
  input: {
    backgroundColor: '#FFFAE8',
    padding: 12,
    paddingVertical: 14,
    borderWidth: 2,
    borderRadius: 12,
    borderColor: '#FFCB69',
    color: '#FFCB69',
    fontFamily: 'Nunito_500Medium',
  },
  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    padding: 15,
    backgroundColor: '#FFCB69',
    color: '#FFFFFF',
    fontFamily: 'Nunito_500Medium',
    borderRadius: 12    
  },
  span: {
    color: '#FFCB69',
    fontFamily: 'Poppins_700Bold'
    
  }
})