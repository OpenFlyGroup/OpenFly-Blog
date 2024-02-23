import { IAuthResponse, ITokens } from '@/store/user/user.interface';
import Cookies from 'js-cookie';

export const getAccessToken = () => {
    const accessToken = Cookies.get('access_token');
    return accessToken || null;
};

// export const getUserFromStorage = () => {
//     return JSON.parse(localStorage.getItem('user') || '{}');
// };

export const saveTokensStorage = (data: ITokens) => {
    Cookies.set('accessToken', data.accessToken);
    Cookies.set('refreshToken', data.refreshToken);
};

export const removeFromStorage = () => {
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
    // localStorage.removeItem('user');
};

export const saveToStorage = (data: IAuthResponse) => {
    saveTokensStorage(data);
    // localStorage.setItem('user', JSON.stringify(data.user));
};