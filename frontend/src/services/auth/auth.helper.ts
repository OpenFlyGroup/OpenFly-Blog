import { IAuthResponse } from '@/types/services/services.interface'

export const getAccessToken = () => {
  const accessToken = localStorage.getItem('token')
  return accessToken || null
}

export const saveToStorage = (data: IAuthResponse) => {
  localStorage.setItem('token', JSON.stringify(data.token))
  localStorage.setItem('user', JSON.stringify(data.user))
}

export const removeFromStorage = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
}
