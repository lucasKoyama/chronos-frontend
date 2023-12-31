import { AxiosError } from 'axios';
import { task } from '../../types/task';
import api from './api';

const updateTask = async (task: Partial<task>): Promise<void> => {
  try {
    await api.patch(`tasks/${task.taskId}`, task);
  } catch (error) {
    const axiosError = error as AxiosError;

    if (axiosError.response) {
      console.error('Server Error:', axiosError.response.data);
    } else if (axiosError.request) {
      console.error('No Response from Server');
    } else {
      console.error('Error:', axiosError.message);
    }
  }
};

export {
  updateTask,
}
