import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const hino5 = () => {
  return (
    
    <View style={styles.container}>
        <View style={styles.mainTitle}>
            <Text style={styles.number}>05</Text>    
            <Text style={styles.title}>Ó Desce, Fogo Santo</Text>    
            <Text style={styles.txt}>CPAD/A.N</Text>
        </View>
        <View>
            <Text style={styles.estrofe1}>
                Espírito, alma e corpo<br/>
                Oferto a Ti, Senhor<br/>
                Como hóstia verdadeira<br/>
                Em oblação de amor<br/>
            </Text>
            <Text style={styles.coro}>
                Eu tudo a Deus consagro<br/>
                Em Cristo, o vivo altar<br/>
                Ó desce, fogo santo<br/>
                Do céu vem Tu selar<br/>
            </Text>
            <Text style={styles.estrofe}>
                Sou teu, ó Jesus Cristo<br/>
                Teu sangue me comprou<br/>
                Eu quero a Tua graça<br/>
                Pois de Ti sempre sou<br/>
            </Text>
            <Text style={styles.estrofe}>
                Espírito Divino<br/>
                Do Pai, a promissão<br/>
                Sedenta, a alma pede<br/>
                A Ti a santa unção<br/>
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
export default hino5