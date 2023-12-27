import { AxiosResponse } from 'axios';
import api from './api';
import { TaskFromApi } from '../../types/task';

async function fetchTasksByUserId(userId: string): Promise<TaskFromApi[]> {
  try {
    const response: AxiosResponse<TaskFromApi[]> = await api.get(`tasks/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

async function fetchTaskById(taskId: string): Promise<TaskFromApi> {
  try {
    const response: AxiosResponse<TaskFromApi> = await api.get(`tasks/${taskId}`);
    console.log(response.data)
    return response.data;
  } catch  (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export {
  fetchTasksByUserId,
  fetchTaskById,
}
