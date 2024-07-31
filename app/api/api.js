import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.3.2:3333/',
  timeout: 10000
});

export const registerUser = async () => {
  const response = await api.post('/user');
  return response.data;
};

export const userLogin = async () => {
  const response = await api.post('/login');
  return response.data;
};

export const fetchHinos = async () => {
  try {
    const response = await api.get('/hinosHarpa');
    return response.data;
  } catch (error) {
    console.error('Erro ao obter hinos:', error);
    throw error;
  }
};

export const fetchHinoByNumero = async (numero) => {
  try {
    const response = await api.get('/hinosHarpa/${numero}');
    return response.data;
  } catch (error) {
    console.error('Erro ao obter hino:', error);
    throw error;
  }
};

export const fetchHinosGeral = async () => {
  try {
    const response = await api.get('/hinario');
    return response.data;
  } catch (error) {
    console.error('Erro ao obter hinos:', error);
    throw error;
  }
};