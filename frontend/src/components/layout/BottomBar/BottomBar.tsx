'use client'
import { ICheckUserProps } from '@/types/ui/ui.interface'
import isActive from '@/utils/isActive'
/* eslint-disable max-len */
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Toolbar } from 'primereact/toolbar'
import React from 'react'

const BottomBar: React.FC<ICheckUserProps> = ({ user }) => {
  const pathname = usePathname()
  const centerContent = (
    <div className='flex items-center gap-16'>
      <Link
        href='/'
        className={`${isActive('/', pathname) ? 'active' : ' '} flex items-center text-white hover:bg-primary hover:text-secondary`}
      >
        <i className='pi pi-home text-2xl' />
      </Link>
      <Link
        href={user ? '/profile' : '/signin'}
        className={`${isActive('/profile', pathname) ? 'active' : ' '} flex items-center text-white hover:bg-primary hover:text-secondary`}
      >
        <i className='pi pi-user text-2xl' />
      </Link>
      <Link
        href='/news'
        className={`${isActive('/news', pathname) ? 'active' : ' '} flex items-center text-white hover:bg-primary hover:text-secondary`}
      >
        <i className='pi pi-megaphone text-2xl' />
      </Link>
      <Link
        href='/forum'
        className={`${isActive('/forum', pathname) ? 'active' : ' '} flex items-center text-white hover:bg-primary hover:text-secondary`}
      >
        <i className='pi pi-align-justify text-2xl' />
      </Link>
    </div>
  )

  return (
    <div className='block fixed bottom-0 w-full z-30 md:hidden'>
      <Toolbar
        pt={{
          root: {
            className:
              'rounded-t-2xl border-none drop-shadow-2xl bg-secondary dark:bg-secondary',
          },
        }}
        center={centerContent}
      />
    </div>
  )
}

export default BottomBar
