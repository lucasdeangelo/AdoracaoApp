import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const hino2 = () => {
  return (
    
    <View style={styles.container}>
        <View style={styles.mainTitle}>
            <Text style={styles.number}>02</Text>    
            <Text style={styles.title}>Saudosa Lembrança</Text>    
            <Text style={styles.txt}>CPAD/A.N</Text>
        </View>
        <View>
            <Text style={styles.estrofe1}>
                Oh! Que saudosa lembrança<br/>
                Tenho de Ti, ó Sião<br/>
                Terra que eu tanto amo<br/>
                Pois és do meu coração<br/>
                Eu para Ti voarei<br/>
                Quando o Senhor meu voltar<br/>
                Pois Ele foi para o Céu<br/>
                E breve vem me buscar
            </Text>
            <Text style={styles.coro}>
                Sim, eu porfiarei por essa terra de além<br/>
                E lá terminarei as muitas lutas de aquém<br/>
                Lá está meu bom Senhor, ao qual eu desejo ver<br/>
                Ele é tudo pra mim, e sem Ele eu não posso viver
            </Text>
            <Text style={styles.estrofe}>
                Bela, mui bela, é a esperança<br/>
                Dos que vigiam por ti<br/>
                Pois eles recebem força<br/>
                Que só se encontra ali<br/>
                Os que procuram chegar<br/>
                Ao teu regaço, ó Sião<br/>
                Livres serão de pecar<br/>
                E de toda a tentação
            </Text>
            <Text style={styles.estrofe}>
                Sim, eu porfiarei por essa terra de além<br/>
                E lá terminarei as muitas lutas de aquém<br/>
                Lá está meu bom Senhor, ao qual eu desejo ver<br/>
                Ele é tudo pra mim, e sem Ele eu não posso viver
            </Text>
            <Text style={styles.estrofe}>
                Diz a Sagrada Escritura<br/>
                Que são formosos os pés<br/>
                Daqueles que boas novas<br/>
                Levam para os infiéis<br/>
                E, se tão belo é falar<br/>
                Dessas grandezas, aqui<br/>
                Que não será o gozar<br/>
                A graça que existe ali
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
export default hino2