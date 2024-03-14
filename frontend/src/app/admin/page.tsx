import Container from '@/components/layout/Container/Container'
import Crumbs from '@/components/sections/Crumbs/Crumbs'
import BtnLink from '@/components/ui/Buttons/BtnLink/BtnLink'
import { MenuItem } from 'primereact/menuitem'

const AdminPage: React.FC = () => {
  const crumbs: MenuItem[] = [
    {
      label: 'admin',
      url: 'admin',
    },
  ]
  return (
    <Container>
      <div className='w-full flex flex-col gap-6'>
        <Crumbs items={crumbs} />
        <div className='drop-shadow-2xl p-5 flex flex-col gap-5 bg-secondary text-white rounded-2xl'>
          <BtnLink text='Upload Post' url='/admin/upload/post' />
        </div>
      </div>
    </Container>
  )
}

export default AdminPage
