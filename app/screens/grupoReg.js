import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useFonts, Nunito_500Medium } from '@expo-google-fonts/nunito';
import { Poppins_700Bold } from '@expo-google-fonts/poppins';

export default function GrupoReg({ navigateTo }) {
  const [fontLoaded] = useFonts({
    Nunito_500Medium,
    Poppins_700Bold
  })

  if (!fontLoaded) {
    return null;
  };
  
  return (
    <View>
      <View>
        <View>
          <Text style={{paddingLeft: 15, ...styles.h2}}>Grupo</Text>

          <View style={styles.cards}>
            <TouchableOpacity onPress={() => navigateTo('HinarioReg')} style={{...styles.card, backgroundColor: "#FFFAE1",}}>             
              <Image source={require('../../assets/images/hinario-grupo.jpg')} style={styles.image}/>
              <View style={{justifyContent: "center", paddingLeft: 15}}>
                <Text style={{...styles.cardTitle, color: "#BA9D36"}}>Hinário</Text>
                <Text style={{...styles.cardTxt, color: "#B8AB7D"}}>Pasta com todos os hinos {'\n'}do grupo.</Text>
              </View>              
            </TouchableOpacity> 
            

            <TouchableOpacity onPress={() => navigateTo('EnsaiosReg')} style={{...styles.card, backgroundColor: "#F1FBFF",}}> 
              <Image source={require('../../assets/images/ensaio.jpg')} style={styles.image}/>
              <View style={{justifyContent: "center", paddingLeft: 15}}>
                <Text style={{...styles.cardTitle, color: "#26516E"}}>Ensaio</Text>
                <Text style={{...styles.cardTxt, color: "#5F8BA9"}}>Ensaio com todos os membros {'\n'}do grupo.</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigateTo('EventosReg')} style={{...styles.card, backgroundColor: "#FFE9E9",}}> 
              <Image source={require('../../assets/images/eventos.jpg')} style={styles.image}/>
              <View style={{justifyContent: "center", paddingLeft: 15}}>
                <Text style={{...styles.cardTitle, color: "#FF8282"}}>Eventos</Text>
                <Text style={{...styles.cardTxt, color: "#E39393"}}>Veja todos os eventos locais e externos {'\n'}que serão realizados.</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigateTo('Componentes')} style={{...styles.card, backgroundColor: "#E2FFE3",}}> 
              <Image source={require('../../assets/images/componentes.jpg')} style={styles.image}/>
              <View style={{justifyContent: "center", paddingLeft: 15}}>
                <Text style={{...styles.cardTitle, color: "#459041"}}>Componentes</Text>
                <Text style={{...styles.cardTxt, color: "#64A95F"}}>Veja todos os membros do grupo {'\n'} de louvor.</Text>
              </View>
            </TouchableOpacity> 
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  h2: {
    fontSize: 24,
    fontFamily: 'Poppins_700Bold'    
  },
  h3: {
    fontSize: 14,
    fontFamily: 'Nunito_500Medium',
    color: '#BFBFBF',    
  },
  txt: {
    fontSize: 14,
    fontFamily: 'Nunito_500Medium',
    color: '#BFBFBF',
    lineHeight: 14
  },
  cards: {
    paddingTop: 10,
  },
  card: {
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,    
    display: "flex",
    flexDirection: 'row'
  },
  cardTitle:{
    fontSize: 18,
    fontFamily: "Poppins_700Bold",
  },
  cardTxt:{
    fontFamily: 'Nunito_500Medium',
    lineHeight: 18,
    paddingTop: 4
  },
  image:{
    width: 90,
    height: 90,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10
  }
})