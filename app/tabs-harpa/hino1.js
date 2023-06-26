import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const hino1 = () => {
  return (
    <View style={styles.container}>
        <View style={styles.mainTitle}>
            <Text style={styles.number}>01</Text>    
            <Text style={styles.title}>Chuva de Graças</Text>    
            <Text style={styles.txt}>CPAD/J.R</Text>
        </View>
        <View style={styles.mainText}>
            <Text style={styles.estrofe1}>Deus prometeu com certeza <br/>Chuvas de graça mandar; <br/>Ele nos dá fortaleza, <br/>E ricas bênçãos sem par.</Text>

            <Text style={styles.coro}>Chuvas de graça,<br/>Chuvas pedimos, Senhor;<br/>Manda-nos chuvas constantes,<br/>Chuvas do Consolador.</Text>

            <Text style={styles.estrofe}>Cristo nos tem concedido<br/>O santo Consolador,<br/>De plena paz nos enchido,<br/>Para o reinado do amor.</Text>

            <Text style={styles.estrofe}>Dá-nos, Senhor, amplamente,<br/>Teu grande gozo e poder;<br/>Fonte de amor permanente,<br/>Põe dentro de nosso ser.</Text>

            <Text style={styles.estrofe}>Faze os teus servos piedosos,<br/>Dá-lhes virtude e valor,<br/>Dando os teus dons preciosos,<br/>Do santo Preceptor.</Text>
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
})
export default hino1