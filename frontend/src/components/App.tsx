'use client'
import { IDefaultLayout } from '@/types/layout/layout.interface'
import { APIOptions, PrimeReactProvider } from 'primereact/api'
import Tailwind from 'primereact/passthrough/tailwind'
import BottomBar from './layout/BottomBar/BottomBar'
import AppHeader from './layout/Header/AppHeader'
import AppFooter from './layout/Footer/AppFooter'
import { twMerge } from 'tailwind-merge'

import 'primeicons/primeicons.css'
import { useAuth } from '@/hooks/useAuth'

const App: React.FC<Readonly<IDefaultLayout>> = ({ children }) => {
  const primeConfig: Partial<APIOptions> = {
    ripple: true,
    unstyled: true,
    pt: Tailwind,
    ptOptions: {
      mergeSections: true,
      mergeProps: true,
      classNameMergeFunction: twMerge,
    },
  }
  const { user } = useAuth()
  return (
    <PrimeReactProvider value={primeConfig}>
      <div className='flex flex-col justify-between min-h-screen'>
        <AppHeader user={user} />
        <main className='flex-1 py-6'>{children}</main>
        <BottomBar user={user} />
        <AppFooter />
      </div>
    </PrimeReactProvider>
  )
}

export default App
