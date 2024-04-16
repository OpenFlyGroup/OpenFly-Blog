'use client'
import { getAccessToken } from '@/services/auth/auth.helper'
import Store from '@/store/store'
import { ReactNode, createContext, useEffect } from 'react'

const store = new Store()

type TypeStore = {
  store: Store
}

export const Context = createContext<TypeStore>({
  store,
})

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  useEffect(()=> {
    if(!getAccessToken()) {
      store.checkAuth()
    }
  },[])
  return <Context.Provider value={{ store }}>{children}</Context.Provider>
}
