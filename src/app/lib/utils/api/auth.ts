import axios, { AxiosError, AxiosResponse } from "axios";
import { LoginData, profile, token } from "../../types/login";
import api from "./api";

async function signIn(credentials: LoginData): Promise<profile | undefined> {
  try {
    const token = await fetchToken(credentials);
    if (token) return fetchUser();
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

async function fetchToken(loginData: LoginData): Promise<token | undefined> {
  try {
    const response: AxiosResponse<token | undefined> = await api
      .post('auth/login', loginData);
    const token = response.data?.access_token;
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      localStorage.setItem('token', token);
    }

    return response.data
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

async function fetchUser(): Promise<profile> {
  try {
    const response: AxiosResponse<profile> = await api.get('auth/profile');
    return response.data
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
  signIn,
  fetchUser,
}