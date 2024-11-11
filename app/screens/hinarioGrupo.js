// hinarioGrupo.js
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { useFonts, Nunito_700Bold, Nunito_500Medium } from '@expo-google-fonts/nunito';

const formatText = (text, style = styles.textLine) => {
  return text.split('<br>').map((line, index) => (
    <Text key={index} style={style}>{line.trim()}</Text>
  ));
};

export default function HinarioGrupo({ selectedHino, navigateTo }) {
  const [fontLoaded] = useFonts({
    Nunito_500Medium,
    Nunito_700Bold
  });

  if (!fontLoaded) {
    return null;
  }

  if (!selectedHino) {
    return (
      <View style={styles.container}>
        <Text>Hino não encontrado.</Text>
      </View>
    );
  }

  const { titulo, autor, verses } = selectedHino;

  return (
    <View style={styles.container}>              
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => navigateTo('Dashboard')}>
          <Text style={styles.backButton}>&#60;</Text>
        </TouchableOpacity>    
        <Text style={{ paddingLeft: 15, ...styles.h2 }}>Hinário</Text>
      </View>
      <ScrollView style={styles.box}>                          
        <Text style={styles.title}>{titulo}</Text>
        <Text style={styles.autor}>{autor}</Text>
        {Object.entries(verses).map(([key, verse], index) => (
          <View key={index} style={styles.verseContainer}>
            {formatText(verse)}              
          </View>
            ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 60,
  },
  h2: {
    fontSize: 24,
    fontFamily: 'Poppins_700Bold'    
  },
  box: {
    backgroundColor: '#FFFAE1',
    margin: 20,
    paddingLeft: 20,
    marginTop: 15,
    borderRadius: 15
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins_700Bold',
    color: '#BA9D36',
    marginTop: 15
  },
  autor: {
    fontSize: 14,
    fontFamily: 'Poppins_600SemiBold',
    color: '#BA9D36',
    marginBottom: 20,   
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
  textLine: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Nunito_500Medium',
    color: '#B8AB7D',
    lineHeight: 17
  },
  coro: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 10,
    fontFamily: 'Poppins_700Bold',
    color: '#BA9D36'
  },
  titleContainer: {
    paddingVertical: 10,
    paddingLeft: 10,
    display: 'flex',
    flexDirection: 'row'
  },
  coroContainer: {
    marginTop: 10,
  },
  verseContainer: {
    marginBottom: 10,
  }
});
