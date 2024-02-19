import { IAuthResponse, ITokens } from '@/lib/user/user.interface';
import Cookies from 'js-cookie';

export const getAccessToken = async () => {
    const accessToken = Cookies.get('access_token');
    return accessToken || null;
};

export const getUserFromStorage = async () => {
    return JSON.parse(localStorage.getItem('user') || '{}');
};

export const saveTokensStorage = (data: ITokens) => {
    Cookies.set('accessToken', data.accessToken);
    Cookies.set('refreshToken', data.refreshToken);
};

export const removeFromStorage = () => {
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
    localStorage.removeItem('user');
};

export const saveToStorage = (data: IAuthResponse) => {
    saveTokensStorage(data);
    localStorage.setItem('user', JSON.stringify(data.user));
};