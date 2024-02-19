import { getContentType } from "@/api/api.helper";
import { IAuthResponse } from "@/lib/user/user.interface";
import axios from "axios";
import Cookies  from "js-cookie";
import { saveToStorage } from "./auth.helper";
import { IEmailPassword } from "@/lib/user/user.interface";
import { instance } from "@/api/api.interceptor";

const PATH = 'auth';

export const AuthService = {

    async main(type: 'signup' | 'signin', data: IEmailPassword) {
        const response = await instance<IAuthResponse>({
            url: `/${PATH}/${type}`,
            method: 'POST',
            data,
        });

        response.data.accessToken ?
        saveToStorage(response.data) : null;

        return response.data;
    },

    async getNewTokens() {
        const refreshToken = Cookies.get('refreshToken');

        const response = await axios.post<string, { data: IAuthResponse }>(
            process.env.SERVER_URL + `/${PATH}/signin/access-token`,
            { refreshToken },
            { headers: getContentType() },
        )

        response.data.accessToken ? 
        saveToStorage(response.data) : null;

        return response;
    },
};