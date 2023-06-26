import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const hino3 = () => {
  return (
    
    <View style={styles.container}>
        <View style={styles.mainTitle}>
            <Text style={styles.number}>03</Text>    
            <Text style={styles.title}>Plena Paz</Text>    
            <Text style={styles.txt}>CPAD/A.N</Text>
        </View>
        <View>
            <Text style={styles.estrofe1}>
            Plena paz e santo gozo<br/>
            Tenho em ti, ó meu Jesus!<br/>
            Pois eu creio em Tua morte sobre a cruz<br/>
            No Senhor só confiando<br/>
            Neste mundo viverei<br/>
            Entoando aleluias ao meu Rei!
            </Text>
            
            <Text style={styles.coro}>
            Oh! Glória ao meu Jesus!<br/>
            Pois é digno de louvor<br/>
            É meu Rei, meu bom Pastor<br/>
            E meu Senhor<br/>
            Como os anjos, que O louvam<br/>
            Eu também O louvarei<br/>
            Entoando aleluias ao meu Rei
            </Text>

            <Text style={styles.estrofe}>
            O amor de Jesus Cristo<br/>
            É mui grande para mim<br/>
            Pois Sua graça me encheu de amor sem fim<br/>
            Meu Jesus foi para a glória<br/>
            Mas um dia eu O verei<br/>
            Entoando aleluias ao meu Rei!
            </Text>

            <Text style={styles.estrofe}>
            Este mundo não deseja<br/>
            Tão bondoso Salvador<br/>
            Não sabendo agradecer Seu grande amor<br/>
            Eu, porém, estou gozando<br/>
            Do favor da Sua lei<br/>
            Entoando aleluias ao meu Rei!
            </Text>

            <Text style={styles.estrofe}>
                Quando o povo israelita<br/>
                Com Jesus se consertar<br/>
                Dando glória ao Seu nome, sem cessar<br/>
                Nesse tempo, céu e terra<br/>
                Hão de ser a mesma grei<br/>
                Entoando aleluias ao meu Rei!
            </Text>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        padding: 30,
    },
    number: {
        fontWeight: "bold",
        fontSize: 32,
    },
    title: {
        fontWeight: "bold",
        fontSize: 32,   
    },
    txt: {
        fontWeight: 600,
        fontSize: 17,   
        fontStyle: "italic",
    },
    estrofe1: {
        paddingTop: 30,
        paddingBottom: 20,
        fontSize: 20,
    },
    coro: {
        paddingBottom: 20,
        fontSize: 20,
        fontWeight: "bold" 
    },
    estrofe: {
        paddingBottom: 20,
        fontSize: 20,
    },
});
export default hino3