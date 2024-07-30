import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFonts, Nunito_500Medium } from '@expo-google-fonts/nunito';
import { Poppins_700Bold , Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import MenuInferior from '../components/menuInferior';
import MenuSuperior from '../components/menuSuperior';
import { fetchHinosGeral } from '../api/api'

export default function Hinario({ navigateTo }) {
  const [hinos, setHinos] = useState([]);

  useEffect(() => {
    const getHinosGeral = async () => {
      try {
        const data = await fetchHinosGeral();
        setHinos(data);
      } catch (error) {
        console.error('Erro ao obter hinos:', error);
      }
    };

    getHinosGeral();
  }, []);

  const [fontLoaded] = useFonts({
    Nunito_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  })

  if (!fontLoaded) {
    return null;
  };

  return (
    <View style={styles.container}>      
        <MenuSuperior/>
            <View>
              <View style={styles.titleContainer}>
                <TouchableOpacity onPress={() => navigateTo('Adoracao')}>
                  <Text style={styles.backButton}>&#60;</Text>
                </TouchableOpacity>    

                <Text style={{paddingLeft: 15, ...styles.h2}}>Hinos Cristãos</Text>
              </View>
                <View>
                {hinos.map((hino) => (
                  <TouchableOpacity
                    key={hino.numero}
                    onPress={() => navigateTo('HinoGeral', hino)}
                  >
                    <Text style={styles.item}>{hino.titulo}</Text>
                  </TouchableOpacity>
                ))}   

                </View>
            </View>
        <MenuInferior/>
    </View>
  )
}

const styles = StyleSheet.create({
  h2: {
    fontSize: 24,
    fontFamily: 'Poppins_700Bold',  
    marginBottom: 15  
  },
  container: {
    flex: 1,
    paddingTop: 20,
  },
  item: {
    padding: 18,
    marginHorizontal: 5,
    marginBottom: 12,
    borderRadius: 10,
    backgroundColor: '#F1FBFF',
    fontFamily: 'Poppins_600SemiBold',  
    color: '#26516E'
  },
  title: {
    fontSize: 18,
  },    
  titleContainer:{
    paddingVertical: 10,
    paddingLeft: 10,
    display: 'flex',
    flexDirection: 'row'
  },
  backButton: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#FFCB69',
    paddingVertical: 5,
    paddingHorizontal: 14,
    borderRadius: 5
  },
})