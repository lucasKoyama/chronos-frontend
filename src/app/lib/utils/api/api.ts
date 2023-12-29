'use client';
import axios, { AxiosInstance } from 'axios';

const API_BASE_URL = 'https://chronos-backend.vercel.app/';

const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

const token = localStorage.getItem('token');
if (token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default api;
