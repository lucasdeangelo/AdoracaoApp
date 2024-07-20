import axios from 'axios';

const API_URL = 'http://localhost:3333';

export const registerUser = (createUser) => {
  return axios.post(`${API_URL}/user`, createUser);
};
export const userLogin = (loginUser) => {
  return axios.post(`${API_URL}/login`, loginUser)
}
