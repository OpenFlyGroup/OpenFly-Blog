import Container from '@/components/layout/Container/Container'
import Crumbs from '@/components/sections/Crumbs/Crumbs'
import { MenuItem } from 'primereact/menuitem'
import UploadPostForm from '@/components/ui/Form/UploadPostForm/UploadPostForm'

const UploadPostPage = () => {
  const crumbs: MenuItem[] = [
    {
      label: 'admin',
      url: '/admin',
    },
    {
      label: 'upload',
      url: '/admin/upload',
    },
    {
      label: 'post',
      url: 'post',
    },
  ]
  return (
    <Container>
      <div className='w-full flex flex-col gap-6'>
        <Crumbs items={crumbs} />
        <div className='flex justify-center'>
          <UploadPostForm />
        </div>
      </div>
    </Container>
  )
}

export default UploadPostPage
