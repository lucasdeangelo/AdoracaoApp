import { View, Text, StyleSheet, TouchableOpacity, Image, Button} from 'react-native'
import React from 'react'
import { Link, useRouter, } from 'expo-router'


const hino = () => {
    const router = useRouter()
  return (
    <View style={styles.container}>
        <View>
            <Image source={require('../assets/icons/main-icon.png')} style={styles.img}/>
        </View>
        <View style={styles.main}>
            <TouchableOpacity onPress={() => {router.push("/tabs-harpa/hino1")}}>
                <View style={styles.hino1}>
                    <Text style={styles.number}>01</Text>    
                    <Text style={styles.title}>Chuva de Graças</Text>    
                    <Text style={styles.txt}>CPAD/J.R</Text>    
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {router.push("/tabs-harpa/hino2")}}>
                <View style={styles.hino2}>
                    <Text style={styles.number}>02</Text>    
                    <Text style={styles.title}>O Que Saudosa Lembrança</Text>    
                    <Text style={styles.txt}>CPAD/A.N</Text>    
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {router.push("/tabs-harpa/hino3")}}>
                <View style={styles.hino1}>
                    <Text style={styles.number}>03</Text>    
                    <Text style={styles.title}>Plena Paz</Text>    
                    <Text style={styles.txt}>CPAD/A.N</Text>    
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {router.push("/tabs-harpa/hino4")}}>
                <View style={styles.hino2}>
                    <Text style={styles.number}>04</Text>    
                    <Text style={styles.title}>Deus Velará Por Ti</Text>    
                    <Text style={styles.txt}>CPAD/A.N</Text>    
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {router.push("/tabs-harpa/hino5")}}>
                <View style={styles.hino1}>
                    <Text style={styles.number}>05</Text>    
                    <Text style={styles.title}>Ó Desce, Fogo Santo</Text>    
                    <Text style={styles.txt}>CPAD/J.R</Text>    
                </View>
            </TouchableOpacity>
            
            <Button style={styles.button} onPress={() => router.back()} title="Voltar" />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: "#FFFDFA",  
        justifyContent: "flex-start"
    },
    img: {
        marginLeft: 20,
        marginTop:5,
        width: 80,
        height: 80
    },
    main:{
        marginTop: 40
    },
    hino1: {
        borderRadius: 15,
        backgroundColor: "#FAF5F0",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        marginTop: 0,
    },
    hino2: {
        borderRadius: 15,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
       
    },
    number: {
        fontSize: 18,
        
    },
    title: {
        fontSize: 20,

    },
    txt: {
        fontSize: 16,

    },
    
})
export default hino