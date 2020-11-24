import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

// eslint-disable-next-line import/prefer-default-export
export const fetchUsers = () => axios.get(`/users`);
