import Container from '@/components/layout/Container/Container'
import Crumbs from '@/components/sections/Crumbs/Crumbs'
import { MenuItem } from 'primereact/menuitem'

const Forum = () => {
  const crumbs: MenuItem[] = [
    {
      label: 'forum',
      url: 'forum',
    },
  ]
  return (
    <Container>
      <div className='w-full flex flex-col gap-4'>
        <Crumbs items={crumbs} />
      </div>
    </Container>
  )
}

export default Forum
