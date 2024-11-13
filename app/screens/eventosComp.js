import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Alert } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { useFonts, Nunito_500Medium } from '@expo-google-fonts/nunito';
import { Poppins_700Bold, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { fetchEventosDoGrupo } from '../api/api';
import { AuthContext } from '../contexts/AuthContext';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function EventosComp({ navigateTo }) {
  const { id_grupo } = useContext(AuthContext); 
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    const loadEventos = async () => {
      try {
        const data = await fetchEventosDoGrupo(id_grupo);
        setEventos(data);
      } catch (error) {
        console.error('Erro ao carregar ensaios:', error);
      }
    };    

    loadEventos();    
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
        <TouchableOpacity onPress={() => navigateTo('GrupoComp')}>
          <Text style={styles.backButton}>&#60;</Text>
        </TouchableOpacity>    

        <Text style={{paddingLeft: 15, ...styles.h2}}>Eventos</Text>        
      </View>

      <FlatList
        data={eventos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const formattedDate = format(new Date(item.data), 'dd/MM - HH:mm', { locale: ptBR });
          return (
            <View>
              <View style={styles.eventoItem}>
                
                <View style={styles.eventoTitleView}>
                  <Text style={{...styles.eventoTitle, fontSize: 18}}>{item.descricao}</Text>
                </View>
                <Text style={styles.eventoTitle}>{formattedDate}</Text>
                <Text style={styles.eventoText}>{item.local}</Text>              
              </View>
            
            </View>
          );
        }}
        contentContainerStyle={{ paddingBottom: 80 }}
      />       
    </View>
  )
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
    backgroundColor: '#FF4242',
    paddingTop: 3,
    paddingBottom: 5,
    paddingHorizontal: 14,
    borderRadius: 5
  },
  eventoTitleView:{
    display: 'flex',
    flexDirection: 'row'
  },
  eventoTitle:{
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    color: '#FF4242',
    marginBottom: 5
  },
  eventoItem: {
    padding: 12,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#FFE2E2',
    borderRadius: 8,
    marginBottom: 8
  },
  eventoText: {
    fontSize: 15,
    fontFamily: 'Nunito_500Medium',
    color: '#FF8282',
    marginBottom: 5
  },
})