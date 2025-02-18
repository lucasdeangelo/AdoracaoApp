import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useFonts, Nunito_600SemiBold } from '@expo-google-fonts/nunito';
import { Poppins_700Bold } from '@expo-google-fonts/poppins';

export default function MenuSuperior({ navigateTo }) {
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
                <Image source={require('../../assets/icons/perfil.png')} style={styles.profileiImg}/>
            </View>

            <View style={styles.btn}>
                <TouchableOpacity onPress={() => navigateTo('Notificacao')}>            
                    <Image source={require('../../assets/icons/notification.png')} />
                </TouchableOpacity>                
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
        left: 365
    }
})