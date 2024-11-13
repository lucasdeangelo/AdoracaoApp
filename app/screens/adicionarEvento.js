import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { useFonts, Nunito_500Medium } from '@expo-google-fonts/nunito';
import { Poppins_700Bold, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { createEvento, fetchHinarioGrupo } from '../api/api';
import { AuthContext } from '../contexts/AuthContext';

export default function AdicionarEvento({ navigateTo }) {
    const { id_grupo } = useContext(AuthContext); 
    const [hinosDisponiveis, setHinosDisponiveis] = useState([]);
    const [hinosFiltrados, setHinosFiltrados] = useState([]);  
    const [descricao, setDescricao] = useState('');
    const [local, setLocal] = useState('');
    const [data, setData] = useState('');
    const [hinosSelecionados, setHinosSelecionados] = useState([]);
    const [pesquisa, setPesquisa] = useState('');  

    useEffect(() => {
        const loadHinos = async () => {
            try {
              const hinos = await fetchHinarioGrupo(id_grupo);
              setHinosDisponiveis(hinos);
              setHinosFiltrados(hinos);  
            } catch (error) {
              console.error('Erro ao carregar hinos:', error);
            }
        };
        loadHinos();
    }, [id_grupo]);
    
    const handleCreateEvento = async () => {
        if (!data || !descricao || !local) {
          Alert.alert('Erro', 'Todos os campos são obrigatórios.');
          return;
        }      

        try {
          const hinoIds = hinosSelecionados.length > 0 ? hinosSelecionados : null;
          await createEvento(id_grupo, data, descricao, local, hinoIds);
          Alert.alert('Sucesso', 'Evento criado com sucesso!');
          setData('');
          setDescricao('');
          setLocal('');
          setHinosSelecionados([]);
          loadEventos();
        } catch (error) {
          Alert.alert('Erro', 'Erro ao criar evento.');
        }
    };

    const toggleHinoSelection = (hinoId) => {
        const hinoIdInt = parseInt(hinoId, 10);
        setHinosSelecionados((prev) =>
            prev.includes(hinoIdInt) ? prev.filter((id) => id !== hinoIdInt) : [...prev, hinoIdInt]
        );
    };    

    const [fontLoaded] = useFonts({
        Nunito_500Medium,
        Poppins_700Bold,
        Poppins_600SemiBold
    });

    if (!fontLoaded) {
    return null;
    }
   
    return (
        <View>
            <View>
                <View style={styles.titleContainer}>
                    <TouchableOpacity onPress={() => navigateTo('GrupoReg')}>
                    <Text style={styles.backButton}>&#60;</Text>
                    </TouchableOpacity>    

                    <Text style={{paddingLeft: 15, ...styles.h2}}>Adicionar Evento</Text>
                </View>

                <View style={styles.container}>
                <TextInput
                        placeholder="Data (AAAA-MM-DD HH:MM)"
                        value={data}
                        onChangeText={setData}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Descrição"
                        value={descricao}
                        onChangeText={setDescricao}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Local"
                        value={local}
                        onChangeText={setLocal}
                        style={styles.input}
                    />

                    <TouchableOpacity onPress={handleCreateEvento} style={styles.submitButton}>
                        <Text style={styles.submitButtonText}>Criar Ensaio</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    h2: {
        fontSize: 24,
        fontFamily: 'Poppins_700Bold',  
        marginBottom: 15  
    },
    titleContainer:{
        paddingVertical: 10,
        paddingLeft: 10,
        display: 'flex',
        flexDirection: 'row'
    },
    backButton: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: '#FF8282',
        paddingTop: 3,
        paddingBottom: 5,
        paddingHorizontal: 14,
        borderRadius: 5
    },
    container:{
        margin: 10
    },
    title: {
        fontSize: 24,
        fontFamily: 'Poppins_700Bold',
        marginBottom: 10
    },
    subtitle: {
        fontSize: 18,
        fontFamily: 'Poppins_600SemiBold',
        marginBottom: 10,
        marginTop: 10
    },
    searchBar: {
        padding: 13,
        backgroundColor: '#F1FBFF',
        borderWidth: 2,
        borderColor: '#26516E',
        fontFamily: 'Nunito_500Medium', 
        marginHorizontal: 5,
        marginBottom: 12,
        borderRadius: 12,
        color: '#26516E'
      },
    hinoItem: {
        padding: 10,
        backgroundColor: '#F1FBFF',
        borderRadius: 8,
        marginBottom: 8
    },
    selectedHino: {
        backgroundColor: '#26516E'
    },
    hinoText: {
        fontSize: 16,
        fontFamily: 'Poppins_600SemiBold',
        color: '#26516E'
    }, 
    input: {
        backgroundColor: '#FFE2E2',
        padding: 12,
        paddingVertical: 14,
        borderWidth: 2,
        borderRadius: 12,
        borderColor: '#FF8282',
        color: '#FF8282',
        marginBottom: 15,
        fontFamily: 'Nunito_500Medium',
      },
    submitButton: {
        backgroundColor: '#FF8282',
        padding: 15,
        borderRadius: 12,
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#FFFFFF',
        fontFamily: 'Poppins_700Bold'
    },  
})