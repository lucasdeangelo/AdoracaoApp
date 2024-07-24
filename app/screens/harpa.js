import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFonts, Nunito_500Medium } from '@expo-google-fonts/nunito';
import { Poppins_700Bold } from '@expo-google-fonts/poppins';
import MenuInferior from '../components/menuInferior';
import MenuSuperior from '../components/menuSuperior';
import { fetchHinos } from '../api/api'

export default function Harpa({ navigateTo }) {
  const [hinos, setHinos] = useState([]);
 
  useEffect(() => {
    const getHinos = async () => {
      try {
        const data = await fetchHinos();
        setHinos(data);
      } catch (error) {
        console.error('Erro ao obter hinos:', error);
      }
    };

    getHinos();
  }, []);


  return (
    <View style={styles.container}>      
        <MenuSuperior/>
            <View>
                <Text style={{paddingLeft: 15, ...styles.h2}}>Harpa Cristã</Text>                
                <View>
                {hinos.map((hino) => (
                  <TouchableOpacity
                    key={hino.numero}
                    onPress={() => navigateTo('Hino', hino)}
                  >
                    <Text style={styles.item}>{hino.numero} - {hino.titulo}</Text>
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
    fontFamily: 'Poppins_700Bold'    
  },
  container: {
    flex: 1,
    paddingTop: 20,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
  },    
})