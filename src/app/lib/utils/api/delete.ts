import { AxiosError } from 'axios';
import api from './api';

async function deleteTask(taskId: string): Promise<void> {
  try {
    await api.delete(`tasks/${taskId}`);
  } catch (error) {
    const axiosError = error as AxiosError;

    if (axiosError.response) {
      console.error('Server Error:', axiosError.response);
    } else if (axiosError.request) {
      console.error('No Response from Server');
    } else {
      console.error('Error:', axiosError.message);
    }
  }
};

export {
  deleteTask,
}
