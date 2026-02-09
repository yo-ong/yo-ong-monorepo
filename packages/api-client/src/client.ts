import axios, { AxiosHeaders, type AxiosInstance, type AxiosRequestConfig } from 'axios';
import { getToken } from '@repo/utils';

const DEFAULT_BASE_URL = '/api';

export const createApiClient = (config: AxiosRequestConfig = {}): AxiosInstance => {
  const instance = axios.create({
    baseURL: DEFAULT_BASE_URL,
    ...config,
  });

  instance.interceptors.request.use((request) => {
    const token = getToken();
    if (!token) {
      return request;
    }

    const headers = AxiosHeaders.from(request.headers ?? {});
    if (!headers.has('Authorization')) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    request.headers = headers;

    return request;
  });

  return instance;
};

export const apiClient = createApiClient();
