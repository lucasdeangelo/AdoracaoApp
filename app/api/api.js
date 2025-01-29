import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.3.2:3333',
  timeout: 10000
});

export const registerUser = async () => {
  const response = await api.post('/user');
  return response.data;
};

export const userLogin = async (loginUser) => {
  try {
    const response = await axios.post(
      'http://10.0.3.2:3333/login', 
      loginUser,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );    
    return response.data; 
  } catch (error) {
    throw error;
  }
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

export const fetchHinarioGrupo = async (id_grupo) => {
  try {
    const response = await api.get(`/grupo/${id_grupo}/hinos`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter hinos do grupo:', error);
    throw error;
  }
};

export const removeHinoFromGrupo = async (id_grupo, id_hino) => {
  try {
    const response = await api.delete(`/grupo/${id_grupo}/hinos/${id_hino}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao remover hino do grupo:', error);
    throw error;
  }
};

export const fetchUsuariosParaComponentes = async () => {
  try {
    const response = await api.get('/user/componentes');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar usuários para componentes:', error);
    throw error;
  }
};

export const fetchComponentes = async (id_grupo) => {
  try {
    const response = await api.get(`/user/grupo/${id_grupo}/componentes`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar usuários para componentes:', error);
    throw error;
  }
};

export const removeComponentFromGrupo = async (idUser) => {
  try {
    const response = await api.put(`user/removeComponente/${idUser}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao remover hino do grupo:', error);
    throw error;
  }
};

export const fetchEnsaiosDoGrupo = async (id_grupo) => {
  try {
    const response = await api.get(`ensaios/${id_grupo}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar ensaios do grupo:', error);
    throw error;
  }
};

export const createEnsaio = async (id_grupo, data, descricao, local, hinoIds) => {
  try {
    const response = await api.post(`ensaios/${id_grupo}`, {
      data,
      descricao,
      local,
      hinoIds: hinoIds || []
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao criar ensaio:', error);
    throw error;
  }
};

export const removeEnsaio = async (id) => {
  try {
    const response = await api.delete(`ensaios/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao deletar ensaio:', error);
    throw error;
  }
};

export const fetchEventosDoGrupo = async (id_grupo) => {
  try {
    const response = await api.get(`eventos/${id_grupo}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar ensaios do grupo:', error);
    throw error;
  }
};

export const createEvento = async (id_grupo, data, descricao, local, hinoIds) => {
  try {
    const response = await api.post(`eventos/${id_grupo}`, {
      data,
      descricao,
      local,
      hinoIds: hinoIds || []
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao criar ensaio:', error);
    throw error;
  }
};

export const removeEvento = async (id) => {
  try {
    const response = await api.delete(`eventos/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao deletar ensaio:', error);
    throw error;
  }
};

export const addFavorito = async (id_user, hinoId, tipo_hino) => {
  try {
    const response = await api.post(`/favoritos/${id_user}`, { hinoId, tipo_hino });
    return response.data;
  } catch (error) {
    console.error('❌ Erro ao adicionar favorito:', error.response?.data || error.message);
    throw error;
  }
};

export const fetchFavoritos = async (id_user) => {
  try {
    const response = await api.get(`/favoritos/${id_user}`);
    return response.data;  
  } catch (error) {
    console.error('Erro ao carregar favoritos:', error);
    throw error;
  }
};

export const removeFavorito = async (id_user, hinoId) => {
  try {
    const response = await api.delete(`/favoritos/${id_user}/${hinoId}`);
    return response.data;  
  } catch (error) {
    console.error('Erro ao remover favorito:', error);
    throw error;
  }
};