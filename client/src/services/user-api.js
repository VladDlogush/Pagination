import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

// eslint-disable-next-line import/prefer-default-export
export const fetchUsers = () => {
  return axios.get(`/users`).then(response => response.data);
};
