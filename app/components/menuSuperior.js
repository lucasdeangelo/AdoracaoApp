import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useFonts, Nunito_600SemiBold } from '@expo-google-fonts/nunito';
import { Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Link } from 'expo-router'

export default function MenuSuperior() {
    const [fontLoaded] = useFonts({
        Nunito_600SemiBold,
        Poppins_700Bold
      })
    
      if (!fontLoaded) {
        return null;
      }
  return (
    <View>
        <View style={styles.main}>
            <View style={styles.profile}>
                <Image source={require('../../assets/icons/perfil-1.svg')} style={styles.profileiImg}/>
                
                <View style={styles.txt}>
                    <Text style={styles.h4}>Lucas</Text>
                    <Text style={styles.h6}>Adorador</Text>
                </View>
            </View>

            <View style={styles.btn}>
                <Link href={'/screens/notificacoes'}>            
                    <Image source={require('../../assets/icons/notification.svg')}  style={{marginRight: 15}}/>
                </Link>

                <Link href={'/screens/configuracoes'}>
                    <Image source={require('../../assets/icons/config.svg')} style={styles.config}/>
                </Link>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        display: 'flex',
        flexDirection: 'row'
    },
    profile: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 8
    },
    profileiImg: {    
        width: 50,
        height: 50
    },
    txt: {
        display: 'flex', 
        paddingLeft: 10,
        justifyContent: 'center',
        
    },
    h4: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 16,
        lineHeight: 10
    },
    h6: {
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 14,
        lineHeight: 16
    },
    btn: {
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        top: 10,
        left: 310
    }
})