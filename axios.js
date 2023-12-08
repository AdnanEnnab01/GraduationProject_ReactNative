import axios from 'axios';

const makeRequest = axios.create({
  baseURL: 'http://192.168.1.56:8080/api', // Update with your backend URL
  withCredentials: true,
});

export { makeRequest };
