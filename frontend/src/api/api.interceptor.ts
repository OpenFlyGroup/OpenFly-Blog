import axios, { AxiosRequestConfig } from 'axios'
import { errorCatch, getAuthHeader, getContentType } from './api.helper'
import { getAccessToken, removeFromStorage } from '@/services/auth/auth.helper'
import { AuthService } from '@/services/auth/auth.service'

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  withCredentials: true,
})

instance.interceptors.request.use(async (config) => {
  const accessToken = getAccessToken()
  config.headers && accessToken
    ? (config.headers.Authorization = `Bearer ${accessToken}`)
    : null
  return config
})

instance.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config
    if (
      (error.response.status === 401 ||
        errorCatch(error) === 'jwt expired' ||
        errorCatch(error) === 'jwt must be provided') &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true
      try {
        await AuthService.getNewTokens()
        return instance.request(originalRequest)
      } catch (error) {
        errorCatch(error) === 'jwt expired' ? null : null
        removeFromStorage()
      }
    }
    throw error
  }
)
