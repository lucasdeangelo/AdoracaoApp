import { StyleSheet, Image, Text, View, TextInput, Picker, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { useFonts, Nunito_500Medium } from '@expo-google-fonts/nunito';
import { Poppins_700Bold } from '@expo-google-fonts/poppins';
import { registerUser } from '../api/api';

export default function Cadastro({ navigateTo }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [typeUser, settypeUser] = useState('');

  const [fontLoaded] = useFonts({
    Nunito_500Medium,
    Poppins_700Bold
  })

  if (!fontLoaded) {
    return null;
  }

  
  const handleRegister = () => {
    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem");
      return;
    }

    const createUser = {
      name,
      email,
      password,
      typeUser,
    };

    registerUser(createUser)
      .then(response => {
        Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
        router.push('/screens/login');
      })
      .catch(error => {
        Alert.alert('Erro', 'Erro ao realizar cadastro. Tente novamente.');
        console.error(error);
      });
  };

  return (
    <View>
      <View style={styles.main}>
        <Image source={require('../../assets/images/icon.png')} style={styles.image}/>
        <View style={styles.mainText}>
          <Text style={styles.h1}>Vamos criar sua conta!</Text>           
          <Text style={{...styles.txt, paddingTop: 5}}>Está pronto adorar? insira as informações abaixo para criar sua conta!</Text>        
        </View>

        <View style={styles.form}>
          <View>
            <Text style={styles.h3}>Nome</Text>
            <TextInput
              style={styles.input}
              placeholder={'Insira seu Nome...'}
              value={name}
              onChangeText={setName}
            />
          </View>

          <View style={{paddingTop: 12}}>
            <Text style={styles.h3}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder={'Insira seu Email...'}
              value={email}
              onChangeText={setEmail}
              keyboardType='email-address'
            />
          </View>

          <View style={{paddingTop: 12}}>
            <Text style={styles.h3}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder={'Insira sua Senha...'}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <View style={{paddingTop: 12}}>
            <Text style={styles.h3}>Confirme sua Senha</Text>
            <TextInput              
              style={styles.input}
              placeholder={'Insira sua Senha Novamente...'}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
          </View>

          <View style={{paddingTop: 12}}>
            <Text style={styles.h3}>Tipo de usuário</Text>
            <Picker     
              selectedValue={typeUser}         
              style={styles.input}
              onValueChange={(itemValue) => settypeUser(itemValue)}
            >
              <Picker.Item label="Selecione o tipo de usuário" value=""/>
              <Picker.Item label="Adorador" value="Adorador" />
              <Picker.Item label="Regente" value="Regente" />
              <Picker.Item label="Cantor" value="Cantor" />
              <Picker.Item label="Músico" value="Músico" />
              <Picker.Item label="Componente" value="Componente" />
            </Picker>            
          </View>

          <TouchableOpacity style={styles.btn} activeOpacity={0.7} onPress={handleRegister}>Cadastrar</TouchableOpacity>

          <View style={{textAlign: 'center', paddingTop: 20}}>
            <Text style={styles.h3}>Ao se cadastrar você estará concordando com os termos de politica e privacidade!</Text>
          </View>

          <View style={{textAlign: 'center', paddingTop: 10}}>
            <Text style={styles.h3}>Já tem conta? <TouchableOpacity style={styles.span} onPress={() => navigateTo('Login')}>Faça Login</TouchableOpacity></Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
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
    lineHeight: 40,
    textAlign: 'center'    
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
    lineHeight: 14,
    textAlign: 'center'
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