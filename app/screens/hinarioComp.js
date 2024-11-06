import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useFonts, Nunito_500Medium } from '@expo-google-fonts/nunito';
import { Poppins_700Bold, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

export default function HinarioComp({ navigateTo }) {
  const [hinosGrupo, setHinosGrupo] = useState([]);
  const [filteredHinos, setFilteredHinos] = useState([]);
  const [searchText, setSearchText] = useState('');

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
    paddingTop: 3,
    paddingBottom: 5,
    paddingHorizontal: 14,
    borderRadius: 5
  },
})