'use client'

import { ICrumbsProps } from '@/types/sections/sections.interface'
import { BreadCrumb } from 'primereact/breadcrumb'
import { MenuItem } from 'primereact/menuitem'

const Crumbs: React.FC<ICrumbsProps> = ({ items }) => {
  const home: MenuItem = { icon: 'pi pi-home', url: '/' }

  return (
    <BreadCrumb
      pt={{
        root: {
          className:
            'bg-secondary dark:bg-secondary border-none rounded-2xl drop-shadow-2xl p-4',
        },
        label: {
          className: 'dark:text-white text-white',
        },
        separatorIcon: {
          className: 'dark:text-white text-white',
        },
        icon: {
          className: 'dark:text-white text-white',
        },
      }}
      model={items}
      home={home}
    />
  )
}

export default Crumbs
