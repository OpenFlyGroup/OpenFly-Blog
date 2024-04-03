import { instance } from '@/api/api.interceptor'
import {
  IEmailPassword,
  IAuthResponse,
} from '@/types/services/services.interface'
import axios, { AxiosResponse } from 'axios'

const PATH = 'auth'

export const AuthService = {
  async main(
    type: 'signup' | 'signin',
    data: IEmailPassword
  ): Promise<AxiosResponse<IAuthResponse>> {
    return await instance.post<IAuthResponse>(`/${PATH}/${type}`, data)
  },

  async getNewTokens(): Promise<AxiosResponse<IAuthResponse>> {
    return await axios.get<IAuthResponse>(
      `${process.env.BASE_URL}/${PATH}/refresh`,
      {
        withCredentials: true,
      }
    )
  },

  async logout(): Promise<void> {
    return await instance.post('/api/logout')
  },
}
