/* eslint-disable max-len */
import isActive from '@/utils/isActive'
import { TypeNavLink } from '@/types/layout/layout.interface'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type TypeFooterNavLink = {
  title: string
  links: TypeNavLink[]
}

const AppFooter: React.FC = () => {
  const pathname = usePathname()

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
    <>
      <motion.footer
  return (
    <>
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: 'spring' }}
        className=' drop-shadow-2xl rounded-t-2xl py-10 bg-secondary sm:pt-16 lg:pt-24'
      >
        <div className='container px-4 mx-auto'>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-8 xl:gap-x-12'>
            <div className='col-span-2 md:col-span-4 xl:pr-8'>
              <Image width={340} height={40} src='/logo_2.svg' alt='logo' />

              <p className='text-base text-white mt-7'>
                OpenFly - Where Innovation Meets Ingenuity.
              </p>
            </div>

            {FooterNavCols.map((col, index) => (
              <div key={index} className='lg:col-span-2'>
                <p className='text-base font-semibold text-white'>
                  {col.title}
                </p>

                <ul className='mt-6 space-y-5'>
                  {col.links.map((link) => (
                    <li key={link.id}>
                      <Link
                        href={link.path}
                        className={`${isActive(link.path, pathname) ? 'active' : ' '} flex text-sm text-white transition-all duration-200 hover:text-primary focus:text-primary`}
                      >
                        {' '}
                        {link.name}{' '}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <hr className='mt-16 mb-10 border-gray-200' />

          <div className='sm:flex sm:items-center sm:justify-between'>
            <p className='text-sm text-gray-600'>
              © Copyright 2024, All Rights Reserved by OpenFly
            </p>

            <ul className='flex items-center mt-5 space-x-3 md:order-3 sm:mt-0'>
              <li>
                <a
                  href='https://github.com/freeeakn/Project_Zero.git'
                  title=''
                  className='flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-primary hover:text-white focus:text-white hover:bg-primary hover:border-primary focus:border-primary'
                >
                  <svg
                    className='w-4 h-4'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z'
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.footer>
    </>
  )
}

export default AppFooter
