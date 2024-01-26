import { View, Text, Button, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'

const harpa = () => {
    const router = useRouter()
  return (
    <View style={styles.container}>
        <View>
            <Image source={require('../../assets/icons/main-icon.png')} style={styles.img}/>
        </View>
       <View style={styles.main}>
          <View style={styles.harpa}>
            <Image source={require('../../assets/images/fundo-harpa.png')} style={styles.image} />
            <Text style={styles.title}>Harpa</Text>  
            <Image source={require('../../assets/icons/Line.png')} style={styles.line}/>    
            <Text style={styles.text}>Harpa Cristã Completa</Text>
            <Link href="/hino" style={styles.link}>Acessar</Link>          
          </View>

          <View style={styles.coros}>
            <Image source={require('../../assets/images/fundo-coros.png')} style={styles.image} />
            <Text style={styles.title}>Coros</Text>  
            <Image source={require('../../assets/icons/Line.png')} style={styles.line}/>    
            <Text style={styles.text}>Coros Cristãos Completos</Text>
            <Link href="/" style={styles.link}>Em Breve</Link>          
          </View>

          <View style={styles.hinos}>
            <Image source={require('../../assets/images/fundo-hinos.png')} style={styles.image} />
            <Text style={styles.title}>Hinos</Text>  
            <Image source={require('../../assets/icons/Line.png')} style={styles.line}/>    
            <Text style={styles.text}>Sua Pasta Digital de Hinos</Text>
            <Link href="/" style={styles.link}>Em breve</Link> 
          </View>
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#FFFDFA"
    },
    img: {
      marginLeft: 20,
      marginTop:5,
      width: 80,
      height: 80
  },
    main: {
      alignItems: "center",
      flex: 1,
      flexDirection: 'column',
      alignItems: "center", 
      padding: 24, 
      backgroundColor: "#FFFDFA",  
      justifyContent: "center"
    }, 
    image: {
      flex: 1,
      padding: 105,
      resizeMode: 'cover',
      justifyContent: 'center',
      backgroundColor: "FFCB69"
    },
    title: {
      position: "relative",
      bottom: 180,
      color: 'white',
      fontSize: 42,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    text: {
      position: "relative",
      bottom: 180,
      color: 'white',
      fontSize: 22,
      fontWeight: 'regular',
      textAlign: 'center',
    },
    line: {
      position: "relative",
      bottom: 180,
      left: 185
    },
    link: {
      borderRadius: 10,
      backgroundColor: "#FFCB69",
      color: "#fff",
      width: 115,
      position: "relative",
      bottom: "45%",
      left: "35%",
      fontSize: 16,
      padding: 5,
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center"
    },
    coros: {
        position: "relative",
        bottom: "11.7%"
    },
    hinos: {
        position: "relative",
        bottom: "23.4%"
    },
  });

export default harpa