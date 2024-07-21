import { errorCatch } from '@/api/api.helper'
import { removeFromStorage, saveToStorage } from '@/services/auth/auth.helper'
import { AuthService } from '@/services/auth/auth.service'
import { IEmailPassword, IUser } from '@/types/services/services.interface'
import { makeAutoObservable } from 'mobx'

class ErrorStore {
  error: string | null = null

  setError(err: string): void {
    this.error = err
  }

  clearError() {
    this.error = null
  }
}

export default class Store {
  user: IUser = {
    nickname: '',
    email: '',
    role: '',
  }
  errorStore = new ErrorStore()
  token: string | null = null
  isLoading: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  setToken(token: string | null): void {
    this.token = token
  }

  setUser(user: IUser): void {
    this.user = user
  }

  setLoading(bool: boolean): void {
    this.isLoading = bool
  }

  async signUp(data: IEmailPassword) {
    try {
      this.setLoading(true)
      const response = await AuthService.main('signup', data)
      saveToStorage(response.data)
      this.setToken(response.data.token)
      this.setUser(response.data.user)
      if (this.errorStore.error) {
        this.errorStore.clearError()
      }
    } catch (error) {
      this.errorStore.setError(errorCatch(error))
    } finally {
      this.setLoading(false)
    }
  }

  async signIn(data: IEmailPassword) {
    try {
      this.setLoading(true)
      const response = await AuthService.main('signin', data)
      saveToStorage(response.data)
      this.setToken(response.data.token)
      this.setUser(response.data.user)
      if (this.errorStore.error) {
        this.errorStore.clearError()
      }
    } catch (error) {
      this.errorStore.setError(errorCatch(error))
    } finally {
      this.setLoading(false)
    }
  }

  async logout() {
    try {
      this.setLoading(true)
      const response = await AuthService.logout()
      removeFromStorage()
      this.setToken(null)
      this.setUser({} as IUser)
      if (this.errorStore.error) {
        this.errorStore.clearError()
      }
    } catch (error) {
      this.errorStore.setError(errorCatch(error))
    } finally {
      this.setLoading(false)
    }
  }

  async checkAuth() {
    this.isLoading = true
    try {
      this.setLoading(true)
      const response = await AuthService.getNewTokens()
      saveToStorage(response.data)
      this.setToken(response.data.token)
      this.setUser(response.data.user)
      if (this.errorStore.error) {
        this.errorStore.clearError()
      }
    } catch (error) {
      this.errorStore.setError(errorCatch(error))
    } finally {
      this.setLoading(false)
    }
  }
}
