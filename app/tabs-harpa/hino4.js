import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const hino4 = () => {
  return (
    
    <View style={styles.container}>
        <View style={styles.mainTitle}>
            <Text style={styles.number}>04</Text>    
            <Text style={styles.title}>Deus Velará Por Ti</Text>    
            <Text style={styles.txt}>CPAD/A.N</Text>
        </View>
        <View>
            <Text style={styles.estrofe1}>
                Não desanimes, Deus proverá<br/>
                Deus velará por ti<br/>
                Sob Suas asas te acolherá<br/>
                Deus velará por ti<br/>
            </Text>
            
            <Text style={styles.coro}>
                Deus cuidará de ti<br/>
                No teu viver, no teu sofrer<br/>
                Seu olhar te acompanhará<br/>
                Deus velará por ti<br/>
            </Text>

            <Text style={styles.estrofe}>
                Se o coração palpitar de dor<br/>
                No teu viver, no teu sofrer<br/>
                Seu olhar te acompanhará<br/>
                Deus velará por ti<br/>
            </Text>

            <Text style={styles.estrofe}>
                Nos desalentos, nas provações<br/>
                Deus velará por ti<br/>
                Lembra-te d'Ele nas tentações<br/>
                Deus velará por ti<br/>
            </Text>

            <Text style={styles.estrofe}>
                Tudo o que pedes, Ele fará<br/>
                Deus velará por ti<br/>
                E o que precisas, não negará<br/>
                Deus velará por ti<br/>
            </Text>

            <Text style={styles.estrofe}>
                Como estiveres, não temas, vem<br/>
                Deus velará por ti<br/>
                Ele te entende e te ama bem<br/>
                Deus velará por ti<br/>
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
export default hino4