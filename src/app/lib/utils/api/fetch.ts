import { AxiosResponse } from 'axios';
import api from './api';
import { TaskFromApi } from '../../types/task';

export const fetchTasksByUserId = async (userId: string): Promise<TaskFromApi[]> => {
  try {
    const response: AxiosResponse<TaskFromApi[]> = await api.get(`tasks/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
