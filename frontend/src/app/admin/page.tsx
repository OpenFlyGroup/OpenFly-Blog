import Container from '@/components/layout/Container/Container'
import Crumbs from '@/components/sections/Crumbs/Crumbs'
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
      <div>
        <Crumbs items={crumbs} />
      </div>
    </Container>
  )
}

export default AdminPage
