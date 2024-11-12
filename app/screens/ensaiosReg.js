import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList, Alert } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { useFonts, Nunito_500Medium } from '@expo-google-fonts/nunito';
import { Poppins_700Bold, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { fetchEnsaiosDoGrupo, createEnsaio, fetchHinosGeral } from '../api/api';
import { AuthContext } from '../contexts/AuthContext';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function EnsaiosReg({ navigateTo }) {
  const { id_grupo } = useContext(AuthContext); 
  const [ensaios, setEnsaios] = useState([]);
  const [hinosDisponiveis, setHinosDisponiveis] = useState([]);

  useEffect(() => {
    const loadEnsaios = async () => {
      try {
        const data = await fetchEnsaiosDoGrupo(id_grupo);
        setEnsaios(data);
      } catch (error) {
        console.error('Erro ao carregar ensaios:', error);
      }
    };

    const loadHinos = async () => {
      try {
        const hinos = await fetchHinosGeral();
        setHinosDisponiveis(hinos);
      } catch (error) {
        console.error('Erro ao carregar hinos:', error);
      }
    };

    loadEnsaios();
    loadHinos();
  }, [id_grupo]);


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
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => navigateTo('GrupoReg')}>
          <Text style={styles.backButton}>&#60;</Text>
        </TouchableOpacity>    

        <Text style={{paddingLeft: 15, ...styles.h2}}>Ensaios</Text>

        <TouchableOpacity onPress={() => navigateTo('AdicionarEnsaio')}>
          <Text style={{...styles.backButton, ...styles.btn}}>+</Text>
        </TouchableOpacity>
      </View>

      
      <FlatList
        data={ensaios}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const formattedDate = format(new Date(item.data), 'dd/MM - HH:mm', { locale: ptBR });
          return (
            <View style={styles.ensaioItem}>
              <View style={styles.ensaioTitleView}>
                <Text style={{...styles.ensaioTitle, fontSize: 18}}>{item.descricao}</Text>
              </View>
              <Text style={styles.ensaioTitle}>{formattedDate}</Text>
              <Text style={styles.ensaioText}>{item.local}</Text>
              <Text style={styles.ensaioText}>Hinos: {item.hinos.join(', ')}</Text>
            </View>
          );
        }}
      />     
    </View>
  );
}

const styles = StyleSheet.create({
  h2: {
    fontSize: 24,
    fontFamily: 'Poppins_700Bold',  
    marginBottom: 15  
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
  btn: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    left: 190
  },
  ensaioTitleView:{
    display: 'flex',
    flexDirection: 'row'
  },
  ensaioTitle:{
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    color: '#26516E',
    marginBottom: 5
  },
  ensaioItem: {
    padding: 10,
    marginHorizontal: 30,
    marginVertical: 10,
    backgroundColor: '#F5FBFF',
    borderRadius: 8,
    marginBottom: 8
  },
  ensaioText: {
    fontSize: 15,
    fontFamily: 'Nunito_500Medium',
    color: '#5F8BA9',
    marginBottom: 5
  },
});
