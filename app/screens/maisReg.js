import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useFonts, Nunito_500Medium } from '@expo-google-fonts/nunito';
import { Poppins_700Bold } from '@expo-google-fonts/poppins';

export default function MaisReg({ navigateTo }) {
  const [fontLoaded] = useFonts({
    Nunito_500Medium,
    Poppins_700Bold
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
            <TouchableOpacity style={styles.item} activeOpacity={0.7}><Text style={styles.txt}>Editar Perfil</Text></TouchableOpacity>
            
            <TouchableOpacity style={styles.item} activeOpacity={0.7}><Text style={styles.txt}>Redefinir Senha</Text></TouchableOpacity>

            <TouchableOpacity style={styles.item} activeOpacity={0.7} onPress={() => navigateTo('CriarGrupo')}><Text style={styles.txt}>Criar Grupo</Text></TouchableOpacity>

            <TouchableOpacity style={styles.item} activeOpacity={0.7}><Text style={styles.txt}>Mudar Harpa</Text></TouchableOpacity>
          </View>

          <View style={{marginTop: 40}}>
            <TouchableOpacity style={styles.item} activeOpacity={0.7}><Text style={styles.txt}>Suporte</Text></TouchableOpacity>
            
            <TouchableOpacity style={styles.item} activeOpacity={0.7}><Text style={styles.txt}>Privacidade</Text></TouchableOpacity>

            <TouchableOpacity style={styles.item} activeOpacity={0.7}><Text style={styles.txt}>Termos e Condições</Text></TouchableOpacity>            
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
    fontFamily: 'Poppins_700Bold',
    color: '#ffff',
    lineHeight: 14
  },
  item: {
    padding: 16,
    marginHorizontal: 5,
    marginBottom: 16,
    borderRadius: 10,
    backgroundColor: '#FFCB69',
  },
})