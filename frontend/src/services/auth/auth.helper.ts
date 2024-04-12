import { ITokens } from '@/types/services/services.interface'

export const getAccessToken = () => {
  const accessToken = localStorage.getItem('token')
  return accessToken || null
}

export const saveToStorage = (data: ITokens) => {
  localStorage.setItem('token', data.accessToken)
}

export const removeFromStorage = () => {
  localStorage.removeItem('token')
}
