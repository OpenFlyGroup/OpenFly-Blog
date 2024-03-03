import { IBtnSubmitProps } from '@/types/ui/ui.interface'
import Link from 'next/link'

interface IBtnLinkProps extends IBtnSubmitProps {
  url: string
}

const BtnLink: React.FC<IBtnLinkProps> = ({ text, url }) => (
  <Link
    type='submit'
    href={url}
    // eslint-disable-next-line max-len
    className='w-full duration-200 text-secondary bg-primary hover:bg-white hover:ring-2 focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center'
  >
    {text}
  </Link>
)

export default BtnLink
