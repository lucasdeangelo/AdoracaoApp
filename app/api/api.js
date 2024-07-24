import axios from 'axios';

const API_URL = 'http://localhost:3333';

export const registerUser = (createUser) => {
  return axios.post(`${API_URL}/user`, createUser);
};

export const userLogin = (loginUser) => {
  return axios.post(`${API_URL}/login`, loginUser)
};

export const fetchHinos = async () => {
  try {
    const response = await axios.get(`${API_URL}/hinosHarpa`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter hinos:', error);
    throw error;
  }
};

export const fetchHinoByNumero = async (numero) => {
  try {
    const response = await axios.get(`${API_URL}/hinosHarpa/${numero}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter hino:', error);
    throw error;
  }
};
