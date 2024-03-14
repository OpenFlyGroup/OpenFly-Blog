import Container from '@/components/layout/Container/Container'
import Link from 'next/link'

const NotFound = () => (
  <Container>
    <div className='w-full flex flex-col items-center justify-center'>
      <div className='drop-shadow-2xl p-5 flex flex-col gap-5 bg-secondary text-white rounded-2xl'>
        <h2 className=' text-5xl font-bold text-primary'>404</h2>
        <h3 className=' text-3xl'>Page Not Found</h3>
        <p>Could not find requested resource</p>
        <Link
          className='text-center font-bold p-4 bg-primary rounded-3xl text-secondary '
          href='/'
        >
          Return Home
        </Link>
      </div>
    </div>
  </Container>
)

export default NotFound
