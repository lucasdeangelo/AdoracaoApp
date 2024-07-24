import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react';
import { useFonts, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { Poppins_700Bold } from '@expo-google-fonts/poppins';
import MenuInferior from '../components/menuInferior';
import MenuSuperior from '../components/menuSuperior';
import { fetchHinoByNumero } from '../api/api';

const formatText = (text, style = styles.textLine) => {
  return text.split('<br>').map((line, index) => (
    <Text key={index} style={styles.textLine}>{line.trim()}</Text>
  ));
};

export default function Hino({ hino, navigateTo }) {
  const [fontLoaded] = useFonts({
    Nunito_700Bold,
    Poppins_700Bold
  })

  if (!fontLoaded) {
    return null;
  }

  if (!hino) {
    return (
      <View style={styles.container}>
        <Text>Hino não encontrado.</Text>
      </View>
    );
  }

  const { titulo, coro, verses } = hino;

  return (
    <View style={styles.container}>              
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => navigateTo('Harpa')}>
          <Text style={styles.backButton}>&#60;</Text>
        </TouchableOpacity>    

        <Text style={{paddingLeft: 15, ...styles.h2}}>Harpa Cristã</Text>
      </View>
        <ScrollView style={styles.box}>                          
          <Text style={styles.title}>{hino.numero} - {titulo}</Text>

          {Object.entries(verses).map(([key, verse], index) => (
            <View key={index} style={styles.verseContainer}>
              {formatText(verse)}
              {index === 0 && coro && (
                <View style={styles.coroContainer}>
              {formatText(coro, styles.coro)}
            </View>)}
            </View>
          ))}
        </ScrollView>

        <MenuInferior/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  h2: {
    fontSize: 24,
    fontFamily: 'Poppins_700Bold'    
  },
  box: {
    backgroundColor: '#FFFAE1',
    paddingLeft: 20,
    marginTop: 15
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins_700Bold',
    marginBottom: 20,
    marginTop: 10
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
  textLine: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Nunito_700Bold',
    lineHeight: 12
  },
  coro: {
    fontSize: 44,
    fontStyle: 'italic',
    marginBottom: 20,
    marginTop: 10,
    fontWeight: 'bold',
    fontFamily: 'Poppins_700Bold' 
  },
  titleContainer:{
    display: 'flex',
    flexDirection: 'row'
  },
  coroContainer: {
    marginTop: 10,
  },
  verseContainer: {
    marginBottom: 10, // Adds space between verses
  },

})