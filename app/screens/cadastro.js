import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { useFonts, Nunito_500Medium } from '@expo-google-fonts/nunito';
import { Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Link } from 'expo-router';

export default function Cadastro() {
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
        <Image source={require('../../assets/images/icon.png')} style={styles.image}/>
        <View style={styles.mainText}>
          <Text style={styles.h1}>Vamos criar sua conta!</Text>           
          <Text style={{...styles.txt, paddingTop: 5}}>Está pronto para navegar na adoração? insira as informações abaixo para criar sua conta!</Text>        
        </View>

        <View style={styles.form}>
          <View>
            <Text style={styles.h3}>Nome</Text>
            <TextInput
              style={styles.input}
              placeholder={'Insira seu Nome...'}
            />
          </View>

          <View style={{paddingTop: 15}}>
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

          <View style={{paddingTop: 15}}>
            <Text style={styles.h3}>Confirme sua Senha</Text>
            <TextInput              
              style={styles.input}
              placeholder={'Insira sua Senha Novamente...'}
            />
          </View>

          <TouchableOpacity style={styles.btn} activeOpacity={0.7}>Cadastrar</TouchableOpacity>

          <View style={{textAlign: 'center', paddingTop: 20}}>
            <Text style={styles.h3}>Ao se cadastrar você estará concordando com os termos de politica e privacidade!</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 40,
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  image: {
    width: 150,
    height: 150,
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  h1: {
    fontSize: 36,
    fontFamily: 'Poppins_700Bold',
    lineHeight: 40    
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
  }
})