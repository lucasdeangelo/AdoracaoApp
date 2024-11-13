import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { useFonts, Nunito_500Medium } from '@expo-google-fonts/nunito';
import { Poppins_700Bold, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { createEnsaio, fetchHinarioGrupo } from '../api/api';
import { AuthContext } from '../contexts/AuthContext';

export default function AdicionarEnsaio({ navigateTo }) {
    const { id_grupo } = useContext(AuthContext); 
    const [hinosDisponiveis, setHinosDisponiveis] = useState([]);
    const [hinosFiltrados, setHinosFiltrados] = useState([]);  
    const [descricao, setDescricao] = useState('');
    const [local, setLocal] = useState('');
    const [data, setData] = useState('');
    const [hinosSelecionados, setHinosSelecionados] = useState([]);
    const [mostrarHinos, setMostrarHinos] = useState(false); 
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

    useEffect(() => {
        if (pesquisa === '') {
            setHinosFiltrados([]); 
        } else {
            const hinosFiltrados = hinosDisponiveis.filter((hino) =>
                hino.titulo.toLowerCase().includes(pesquisa.toLowerCase()) 
            );
            setHinosFiltrados(hinosFiltrados); 
        }
    }, [pesquisa, hinosDisponiveis]);

    const handleCreateEnsaio = async () => {
        if (!data || !descricao || !local) {
          Alert.alert('Erro', 'Todos os campos são obrigatórios.');
          return;
        }      

        try {
          const hinoIds = hinosSelecionados.length > 0 ? hinosSelecionados : null;
          await createEnsaio(id_grupo, data, descricao, local, hinoIds);
          Alert.alert('Sucesso', 'Ensaio criado com sucesso!');
          setData('');
          setDescricao('');
          setLocal('');
          setHinosSelecionados([]);
          loadEnsaios();
        } catch (error) {
          Alert.alert('Erro', 'Erro ao criar ensaio.');
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

                    <Text style={{paddingLeft: 15, ...styles.h2}}>Ensaios</Text>
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

                    <TouchableOpacity onPress={handleCreateEnsaio} style={styles.submitButton}>
                        <Text style={styles.submitButtonText}>Criar Ensaio</Text>
                    </TouchableOpacity>

                    {/* <Text style={styles.subtitle} onPress={() => setMostrarHinos(!mostrarHinos)}>
                        Selecione os Hinos para o Ensaio
                    </Text>

                    {mostrarHinos && (
                        <View style={styles.box}>                            
                            <TextInput
                                placeholder="Pesquisar hinos..."
                                value={pesquisa}
                                onChangeText={setPesquisa}
                                style={styles.input}
                            />

                            <FlatList
                                data={hinosFiltrados}
                                keyExtractor={(item) => item._id}
                                renderItem={({ item }) => (
                                    <TouchableOpacity
                                        onPress={() => toggleHinoSelection(item._id)}
                                        style={[
                                            styles.hinoItem,
                                            hinosSelecionados.includes(item._id) && styles.selectedHino
                                        ]}
                                    >
                                        <Text style={[
                                            styles.hinoText,
                                            hinosSelecionados.includes(item._id) && { color: '#fff' } 
                                        ]}>
                                            {item.titulo}
                                        </Text>
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    )}                     */}
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
        backgroundColor: '#26516E',
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
        backgroundColor: '#F1FBFF',
        padding: 12,
        paddingVertical: 14,
        borderWidth: 2,
        borderRadius: 12,
        borderColor: '#26516E',
        color: '#26516E',
        marginBottom: 15,
        fontFamily: 'Nunito_500Medium',
      },
      submitButton: {
        backgroundColor: '#26516E',
        padding: 15,
        borderRadius: 12,
        alignItems: 'center',
      },
      submitButtonText: {
        color: '#FFFFFF',
        fontFamily: 'Poppins_700Bold'
      },    
})