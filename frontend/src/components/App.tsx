'use client'
import { IDefaultLayout } from '@/types/layout.interface'
import Header from './layout/Header/Header'
import BottomNav from './layout/BottomNav/BottomNav'
import Footer from './layout/Footer/Footer'
import { createContext, useEffect, useRef } from 'react'
import autoAnimate from '@formkit/auto-animate'
import Store from '@/store/store'
import { getAccessToken } from '@/services/auth/auth.helper'
import { Observer } from 'mobx-react-lite'
import { StoreProvider } from '@/providers/StoreProvider'

const App: React.FC<Readonly<IDefaultLayout>> = ({ children }) => {
  const parent = useRef(null)
  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])
  return (
    <StoreProvider>
      <div className='flex flex-col justify-between min-h-screen'>
        <Header />
        <main ref={parent} className='flex-1 py-6'>{children}</main>
        <BottomNav />
        <Footer />
      </div>
    </StoreProvider>
  )
}

export default App
