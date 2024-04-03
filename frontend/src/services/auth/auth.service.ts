import { instance } from '@/api/api.interceptor'
import {
  ITokens,
  IEmailPassword,
} from '@/types/services/services.interface'
import { removeFromStorage, saveToStorage } from './auth.helper'

const PATH = 'auth'

export const AuthService = {
  async main(type: 'signup' | 'signin', data: IEmailPassword) {
    const response = await instance.post<ITokens>(
      `/${PATH}/${type}`,
      data
    )
    response.data.accessToken ? saveToStorage(response.data) : null
    return response.data
  },

  async getNewTokens() {
    const response = await instance.get<ITokens>(
      `/${PATH}/refresh`
    )
    response.data.accessToken ? saveToStorage(response.data) : null
    return response.data
  },

  async logout() {
    const response = await instance.post('/api/logout')
    removeFromStorage()
    return response.data
  },
}
