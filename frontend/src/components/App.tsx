import { IDefaultLayout } from '@/types/layout.interface'
import Header from './layouts/Header/Header'
import BottomNav from './layouts/BottomNav/BottomNav'

const App: React.FC<Readonly<IDefaultLayout>> = ({ children }) => {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <Header />
      <main className='flex-1 py-6'>{children}</main>
      <BottomNav />
    </div>
  )
}

export default App
