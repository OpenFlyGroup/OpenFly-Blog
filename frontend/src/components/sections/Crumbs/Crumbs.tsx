'use client'

import { ICrumbsProps, MenuItem } from '@/types/sections/sections.interface'
import Link from 'next/link'

const Crumbs: React.FC<ICrumbsProps> = ({ items }) => {
  const home: MenuItem = { url: '/' }

  return (
    <div className='text-sm breadcrumbs'>
      <ul>
        <li>
          <Link href={home.url}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-5 h-5'
            >
              <path
                fillRule='evenodd'
                d='M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z'
                clipRule='evenodd'
              />
            </svg>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index}>
            <Link href={item.url}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Crumbs
