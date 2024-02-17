import axios from 'axios';
import { getContentType } from './api.helper';
import { getAccessToken } from '@/services/auth/auth.helper';

const instance = axios.create({
    baseURL: process.env.SERVER_URL,
    headers: getContentType(),
});

instance.interceptors.request.use(async config => {
    const accessToken = getAccessToken();
    config.headers && accessToken ?
        config.headers.Authorization = `Bearer ${accessToken}` : null;
    return config;
});