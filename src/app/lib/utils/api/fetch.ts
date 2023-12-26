import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { TaskFromApi } from '../../types/task';

const API_BASE_URL = 'https://chronos-backend.vercel.app/';

const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchTasksByUserId = async (userId: string): Promise<TaskFromApi[]> => {
  try {
    const response: AxiosResponse<TaskFromApi[]> = await api
      .get(`${API_BASE_URL}tasks/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
