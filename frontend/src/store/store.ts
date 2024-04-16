import { errorCatch } from '@/api/api.helper'
import { removeFromStorage, saveToStorage } from '@/services/auth/auth.helper'
import { AuthService } from '@/services/auth/auth.service'
import {
  IEmailPassword,
  IUser,
} from '@/types/services/services.interface'
import { makeAutoObservable } from 'mobx'

export default class Store {
  user: IUser = {
    nickname: '',
    email: '',
    role: '',
  }
  isAuth = false
  isLoading = false

  constructor() {
    makeAutoObservable(this)
  }

  setAuth(bool: boolean): void {
    this.isAuth = bool
  }

  setUser(user: IUser): void {
    this.user = user
  }

  setLoading(bool: boolean): void {
    this.isLoading = bool
  }

  async signUp(data: IEmailPassword) {
    try {
      const response = await AuthService.main('signup', data)
      saveToStorage(response.data)
      this.setAuth(true)
      this.setUser(response.data.user)
    } catch (error) {
      console.log(errorCatch(error))
    }
  }

  async signIn(data: IEmailPassword) {
    try {
      const response = await AuthService.main('signin', data)
      saveToStorage(response.data)
      this.setAuth(true)
      this.setUser(response.data.user)
    } catch (error) {
      console.log(errorCatch(error))
    }
  }

  async logout() {
    try {
      const response = await AuthService.logout()
      removeFromStorage()
      this.setAuth(false)
      this.setUser({} as IUser)
    } catch (error) {
      console.log(errorCatch(error))
    }
  }

  async checkAuth() {
    this.isLoading = true
    try {
      const response = await AuthService.getNewTokens()
      saveToStorage(response.data)
      this.setAuth(true)
      this.setUser(response.data.user)
    } catch (error) {
      console.log(errorCatch(error))
    } finally {
      this.isLoading = false
    }
  }
}
