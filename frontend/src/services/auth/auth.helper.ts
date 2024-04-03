import { ITokens } from '@/types/services/services.interface'
import Cookies from 'js-cookie'

export const getAccessToken = () => {
  const accessToken = Cookies.get('accessToken')
  return accessToken || null
}

export const saveToStorage = (data: ITokens) => {
  Cookies.set('accessToken', data.accessToken)
  localStorage.setItem('refreshToken', data.refreshToken)
}

export const removeFromStorage = () => {
  Cookies.remove('accessToken')
  localStorage.removeItem('refreshToken')
}
