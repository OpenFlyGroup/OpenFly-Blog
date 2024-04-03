import { TypeNavLink } from '@/types/layout.interface'
import Image from 'next/image'
import Link from 'next/link'

type TypeFooterNavLink = {
  title: string
  links: TypeNavLink[]
}

const Footer = () => {
  const FooterNavCols: TypeFooterNavLink[] = [
    {
      title: 'Company',
      links: [
        { id: 0, name: 'About', path: '/about' },
        { id: 1, name: 'Features', path: '/features' },
        { id: 2, name: 'Works', path: '/works' },
        { id: 3, name: 'Career', path: '/career' },
      ],
    },
    {
      title: 'Help',
      links: [
        { id: 0, name: 'FAQ', path: '/faq' },
        { id: 1, name: 'Customer Support', path: '/customer_support' },
        { id: 2, name: 'Terms & Conditions', path: '/terms_conditions' },
        { id: 3, name: 'Privacy Policy', path: '/privacy_policy' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { id: 0, name: 'Development Tutorial', path: '/dev_tutorial' },
        { id: 1, name: 'How to - Blog', path: '/How_to' },
        { id: 3, name: 'YouTube Playlist', path: '/' },
      ],
    },
  ]
  return (
    <footer className='footer p-10 bg-base-200 text-base-content'>
      <aside>
        <Link href='/'>
          <Image width={340} height={40} src='brand/logo_2.svg' alt='logo' />
        </Link>
        <p className='text-base text-white mt-7'>
          OpenFly - Where Innovation Meets Ingenuity.
        </p>
      </aside>
      {FooterNavCols.map((col, index) => (
        <nav key={index} className='lg:col-span-2'>
          <h6 className='footer-title'>{col.title}</h6>
          {col.links.map((link) => (
            <Link key={link.id} href={link.path} className='link link-hover'>
              {link.name}
            </Link>
          ))}
        </nav>
      ))}
    </footer>
  )
}

export default Footer
