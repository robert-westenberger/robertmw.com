import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3000', // todo: convert to env var
  timeout: 1000 * 10,
  withCredentials: true
});