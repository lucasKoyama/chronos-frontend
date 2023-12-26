import axios, { AxiosResponse, AxiosError } from 'axios';
import { api } from './api';
import { TaskPostPayload } from '../../types/task';

// Define the type for your request payload
interface MyRequestData {
  // Define the structure of your request payload
  // Example:
  name: string;
  email: string;
}

// Define the type for your response data
interface MyResponseData {
  // Define the structure of your response payload
  // Example:
  id: number;
  message: string;
}

// Function to make the POST request
async function postData(task: TaskPostPayload): Promise<MyResponseData> {
  try {
    // Make the POST request using axios
    const response: AxiosResponse<MyResponseData> = await api.post('tasks', task);

    // Return the data from the response
    return response.data;
  } catch (error) {
    // Handle errors (e.g., network issues, server errors)
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;
      console.error('Axios error:', axiosError.response?.data || axiosError.message);
    } else {
      console.error('Unexpected error:', error);
    }

    // You might want to throw or handle the error based on your application's requirements
    throw error;
  }
}

// Example usage
const requestData: MyRequestData = {
  name: 'John Doe',
  email: 'john@example.com',
};

postData(requestData)
  .then((responseData) => {
    console.log('Response:', responseData);
  })
  .catch((error) => {
    // Handle errors here if needed
    console.error('Error:', error);
  });
