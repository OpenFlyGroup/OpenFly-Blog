import { instance } from '@/api/api.interceptor'
import { IAuthResponse, IUser } from '@/types/services/services.interface'
import axios, { AxiosResponse } from 'axios'
import jwt from 'jsonwebtoken'

const BASE_URL = process.env.BASE_URL || 'http://localhost:8000/api/v1/'
const JWT_SECRET = process.env.REACT_APP_JWT_SECRET || 'secret'

const PATH = 'auth'

export const AuthService = {
  async main(type: 'signup' | 'signin', data: IEmailPassword) {
    const response = await instance<IAuthResponse>({
      url: `/${PATH}/${type}`,
      method: 'POST',
      data,
    })

    response.data.accessToken ? saveToStorage(response.data) : null

    return response.data
  },

  async getNewTokens() {
    const refreshToken = Cookies.get('refreshToken')

    const response = await axios.post<string, { data: IAuthResponse }>(
      process.env.SERVER_URL + `/${PATH}/signin/access-token`,
      { refreshToken },
      { headers: getContentType() }
    )

    response.data.accessToken ? saveToStorage(response.data) : null

    return response
  },
}
