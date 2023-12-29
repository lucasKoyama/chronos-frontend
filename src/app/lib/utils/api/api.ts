import axios, { AxiosInstance } from 'axios';

const API_BASE_URL = 'https://chronos-backend.vercel.app/';

const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export default api;
