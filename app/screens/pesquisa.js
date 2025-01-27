import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useFonts, Nunito_500Medium } from '@expo-google-fonts/nunito';
import { Poppins_700Bold, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { fetchHinos, fetchHinosGeral } from '../api/api';

const removeAccents = (str) => {
  return str ? str.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : '';
};

export default function Pesquisa({ navigateTo }) {
  const [searchText, setSearchText] = useState('');
  const [hinosHarpa, setHinosHarpa] = useState([]);
  const [hinarioGeral, setHinarioGeral] = useState([]);
  const [filteredHinos, setFilteredHinos] = useState([]);

  useEffect(() => {
    const loadHinos = async () => {
      try {
        const hinosHarpaData = await fetchHinos();
        const hinarioGeralData = await fetchHinosGeral();
        setHinosHarpa(hinosHarpaData);
        setHinarioGeral(hinarioGeralData);
        setFilteredHinos([...hinosHarpaData, ...hinarioGeralData]);
      } catch (error) {
        console.error('Erro ao carregar hinos:', error);
      }
    };

    loadHinos();
  }, []);

  useEffect(() => {
    const filtered = [...hinosHarpa, ...hinarioGeral].filter(hino =>
      (hino.titulo && removeAccents(hino.titulo.toLowerCase()).includes(removeAccents(searchText.toLowerCase()))) || 
      (hino.numero && hino.numero.toString().includes(searchText))
    );
    setFilteredHinos(filtered);
  }, [searchText, hinosHarpa, hinarioGeral]);
  

  const handleSelectHino = (hino) => {
    navigateTo('Hino', hino, 'Pesquisa');
  };

  const [fontLoaded] = useFonts({
    Nunito_500Medium,
    Poppins_700Bold,
    Poppins_600SemiBold
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <View>
      <View>
        <Text style={{paddingLeft: 15, ...styles.h2}}>Pesquisa</Text> 

        <View>
        <TextInput
        style={styles.searchBar}
        placeholder="&#x1F50D; Buscar hino..."
        value={searchText}
        onChangeText={setSearchText}
      />

      {filteredHinos.length > 0 ? (
        <FlatList
          data={filteredHinos}
          keyExtractor={(item) => item._id || item.numero.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.hinoItem} onPress={() => handleSelectHino(item)}>
              <Text style={styles.hinoText}>{item.numero} - {item.titulo}</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text style={styles.noResults}>Nenhum hino encontrado.</Text>
      )}  
        </View>       
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  h2: {
    fontSize: 24,
    fontFamily: 'Poppins_700Bold',  
  },
  searchBar: {
    padding: 18,
    backgroundColor: '#FFFAE1',
    borderWidth: 2,
    borderColor: '#FFCB69',
    borderRadius: 12,
    fontFamily: 'Poppins_600SemiBold',
    marginBottom: 12,
    color: '#BA9D36'
  },
  hinoItem: {
    padding: 18,
    borderRadius: 10,
    backgroundColor: '#FFFAE1',
    marginBottom: 10,
  },
  hinoText: {
    fontFamily: 'Poppins_600SemiBold',
    color: '#BA9D36'
  },
  noResults: {
    fontFamily: 'Nunito_500Medium',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: '#B8AB7D'
  }
})