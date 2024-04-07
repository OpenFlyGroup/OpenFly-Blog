'use client'
import { Context } from '@/providers/StoreProvider'
import { TypeNavLink } from '@/types/layout.interface'
import isActive from '@/utils/isActive'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useContext } from 'react'
import SignInForm from '@/components/ui/Form/SignInForm/SignInForm'
import SignInModal from '@/components/ui/Form/SignInForm/SignInModal'
import { useState } from 'react'

const Header: React.FC = () => {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  const { store } = useContext(Context)
  const pathname = usePathname()
  const NavLinks: TypeNavLink[] = [
    { id: 1, name: 'Forum', path: '/forum' },
    { id: 2, name: 'News', path: '/news' },
    { id: 3, name: 'Company', path: '/about' },
  ]
  return (
    <header className='navbar lg:px-10 bg-base-200'>
      <div className='navbar-start gap-4'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary rounded-box w-52 gap-2'
          >
            {NavLinks.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.path}
                  className={`${isActive(item.path, pathname) ? 'active' : ' '} text-sm font-[500] leading-6 text-base-100 hover:bg-base-100 hover:text-primary duration-200`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href='/'>
          <span className='sr-only'>OpenFly</span>
          <Image
            width={100}
            height={20}
            className='drop-shadow-2xl'
            src='/brand/logo_2.svg'
            alt='logo'
          />
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal bg-base-100 rounded-full gap-2'>
          {NavLinks.map((item) => (
            <li key={item.id}>
              <Link
                href={item.path}
                className={`${isActive(item.path, pathname) ? 'active' : ' '} rounded-full text-sm font-[500] leading-6 text-white hover:text-primary duration-200`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='navbar-end gap-6'>
        <label className='cursor-pointer grid place-items-center'>
          <input
            type='checkbox'
            aria-label='dark'
            value='dark'
            className='toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2'
          />
          <svg
            className='col-start-1 row-start-1 stroke-base-100 fill-base-100'
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <circle cx='12' cy='12' r='5' />
            <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
          </svg>
          <svg
            className='col-start-2 row-start-1 stroke-base-100 fill-base-100'
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
          </svg>
        </label>
        <button className='btn' onClick={openModal}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-6 h-6'
          >
            <path
              fillRule='evenodd'
              d='M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z'
              clipRule='evenodd'
            />
          </svg>
        </button>
        <div>
          <SignInModal
            isOpen={isOpen}
            closeModal={closeModal}
            openModal={openModal}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
