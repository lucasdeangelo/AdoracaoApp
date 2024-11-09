import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFonts, Nunito_500Medium } from '@expo-google-fonts/nunito';
import { Poppins_700Bold , Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { fetchHinosGeral } from '../api/api'

export default function Hinario({ navigateTo }) {
  const [hinos, setHinos] = useState([]);
  const [filteredHinos, setFilteredHinos] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const getHinosGeral = async () => {
      try {
        const data = await fetchHinosGeral();
        setHinos(data);
        setFilteredHinos(data);
      } catch (error) {
        console.error('Erro ao obter hinos:', error);
      }
    };

    getHinosGeral();
  }, []);

  const removeAccents = (str) => {
    return str ? str.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : '';
  };

  useEffect(() => {
    const filtered = hinos.filter(hino => 
      removeAccents(hino.titulo.toLowerCase()).includes(removeAccents(searchText.toLowerCase())) ||
      hino.numero.toString().includes(searchText)
    );
    setFilteredHinos(filtered);
  }, [searchText, hinos]);

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
      <View>
        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={() => navigateTo('Adoracao')}>
            <Text style={styles.backButton}>&#60;</Text>
          </TouchableOpacity>    

          <Text style={{paddingLeft: 15, ...styles.h2}}>Hinos Cristãos</Text>
        </View>
          <View>
          <TextInput
            style={styles.searchBar}
            placeholder="&#x1F50D; Buscar hino..."
            value={searchText}
            onChangeText={text => setSearchText(text)}
          />
          {filteredHinos.map((hino) => (
            <TouchableOpacity
              key={hino.numero}
              data={filteredHinos}
              onPress={() => navigateTo('HinoGeral', hino)}
            >
              <Text style={styles.item}>{hino.titulo} - {hino.autor}
              </Text>
            </TouchableOpacity>
          ))}  

        </View>
      </View>        
    </View>
  )
}

const styles = StyleSheet.create({
  h2: {
    fontSize: 24,
    fontFamily: 'Poppins_700Bold',  
    marginBottom: 15  
  },
  searchBar: {
    padding: 18,
    backgroundColor: '#F1FBFF',
    borderWidth: 2,
    borderColor: '#26516E',
    fontFamily: 'Poppins_600SemiBold', 
    marginHorizontal: 5,
    marginBottom: 12,
    borderRadius: 12,
    color: '#26516E'
  },
  container: {
    flex: 1,
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
    backgroundColor: '#26516E',
    paddingTop: 3,
    paddingBottom: 5,
    paddingHorizontal: 14,
    borderRadius: 5
  },
})