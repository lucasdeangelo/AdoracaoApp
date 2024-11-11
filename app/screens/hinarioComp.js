import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { useFonts, Nunito_500Medium } from '@expo-google-fonts/nunito';
import { Poppins_700Bold, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { fetchHinarioGrupo } from '../api/api';
import { AuthContext } from '../contexts/AuthContext';

export default function HinarioComp({ navigateTo }) {
  const { id_grupo } = useContext(AuthContext); 
  const [hinosGrupo, setHinosGrupo] = useState([]);
  const [filteredHinos, setFilteredHinos] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const getHinario = async () => {
      try {
        const data = await fetchHinarioGrupo(id_grupo);
        setHinosGrupo(data);
        setFilteredHinos(data); 
      } catch (error) {
        console.error('Erro ao obter hinos:', error);
      }
    };
    getHinario();
    
  }, [id_grupo]);

  const removeAccents = (str) => {
    return str ? str.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : '';
  };

  useEffect(() => {
    const filtered = hinosGrupo.filter(hino => 
      removeAccents(hino.titulo && hino.titulo.toLowerCase()).includes(removeAccents(searchText.toLowerCase()))

    );
    setFilteredHinos(filtered);
  }, [searchText, hinosGrupo]);

  const [fontLoaded] = useFonts({
    Nunito_500Medium,
    Poppins_700Bold,
    Poppins_600SemiBold
  })

  if (!fontLoaded) {
    return null;
  };
  

  return (
    <View>
      <View>
        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={() => navigateTo('GrupoReg')}>
            <Text style={styles.backButton}>&#60;</Text>
          </TouchableOpacity>    

          <Text style={{paddingLeft: 15, ...styles.h2}}>Hinário</Text>
        </View>

        <View>
          <TextInput
            style={styles.searchBar}
            placeholder="&#x1F50D; Buscar hino..."
            value={searchText}
            onChangeText={text => setSearchText(text)}
          />
          {filteredHinos.length > 0 ? (
            filteredHinos.map((hino) => (
              <TouchableOpacity
                key={hino.numero}                
                data={filteredHinos}
                onPress={() => navigateTo('HinarioGrupo', hino)}
              >
                <Text style={styles.item}>{hino.titulo} - {hino.autor}</Text>                
              </TouchableOpacity>
            ))
          ) : (
            <Text>Nenhum hino encontrado.</Text>
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
    marginBottom: 15  
  },
  searchBar: {
    padding: 18,
    backgroundColor: '#FFFAE1',
    borderWidth: 2,
    borderColor: '#FFCB69',
    fontFamily: 'Poppins_600SemiBold', 
    marginHorizontal: 5,
    marginBottom: 12,
    borderRadius: 12,
    color: '#BA9D36'
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
    backgroundColor: '#FFFAE1',
    fontFamily: 'Poppins_600SemiBold',  
    color: '#BA9D36'
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
    paddingTop: 3,
    paddingBottom: 5,
    paddingHorizontal: 14,
    borderRadius: 5
  },
})