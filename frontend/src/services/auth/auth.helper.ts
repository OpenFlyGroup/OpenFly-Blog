import { ITokens } from '@/types/services/services.interface'

export const getAccessToken = () => {
  const accessToken = localStorage.getItem('Token')
  return accessToken || null
}

export const saveToStorage = (data: ITokens) => {
  localStorage.setItem('Token', data.accessToken)
}

export const removeFromStorage = () => {
  localStorage.removeItem('Token')
}
