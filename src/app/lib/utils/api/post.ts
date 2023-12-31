import axios, { AxiosResponse, AxiosError } from 'axios';
import api from './api';
import { TaskFromApi, TaskPayload } from '../../types/task';

async function postTask(task: TaskPayload): Promise<TaskFromApi> {
  try {
    console.log(task)
    const response: AxiosResponse<TaskFromApi> = await api.post('tasks', task);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;
      console.error('Axios error:', axiosError.response?.data || axiosError.message);
    } else {
      console.error('Unexpected error:', error);
    }
    // You might want to throw or handle the error based on your application's requirements
    throw error;
  }
};

export {
  postTask,
}
