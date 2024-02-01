import { Dialog, Popover } from '@headlessui/react';
import { useState } from 'react';
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const AppHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  return (
    <motion.header
    initial={{ opacity: 0 }}
    whileInView={{ opacity:1 }}
    transition={{ type: "spring" }}
    className='header drop-shadow-2xl z-10'>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <NavLink to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">/PROJECTZERO</span>
            <img className="h-5 w-auto drop-shadow-2xl" src="logo2.svg" alt="" />
          </NavLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#0000ff]"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <NavLink to="/forum" className="text-sm font-[500] leading-6 text-black hover:text-[#0000ff] duration-200">
            Forum
          </NavLink>
          <NavLink to="/news" className="text-sm font-[500] leading-6 text-black hover:text-[#0000ff] duration-200">
            News
          </NavLink>
          <NavLink to="/about" className="text-sm font-[500] leading-6 text-black hover:text-[#0000ff] duration-200">
            Company
          </NavLink>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <NavLink to="/signin"
          className="text-sm font-bold leading-6 text-black hover:text-[#0000ff] duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
            </svg>
          </NavLink>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        >
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">/PROJECTZERO</span>
              <img
                className="h-5 w-auto"
                src="logo2.svg"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-[#0000ff]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-[#0000ff]">
              <div className="space-y-2 py-6">
                <NavLink
                  to='/forum'
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-[#0000ff] hover:bg-gray-50"
                >
                  Forum
                </NavLink>
                <NavLink
                  to='/news'
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-[#0000ff] hover:bg-gray-50"
                >
                  News
                </NavLink>
                <NavLink
                  to='/about'
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-[#0000ff] hover:bg-gray-50"
                >
                  Company
                </NavLink>
              </div>
              <div className="py-6">
                <NavLink
                  to="/signin"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-bold leading-7 text-[#0000ff] hover:bg-gray-50"
                >
                  Sign in
                </NavLink>
                <NavLink
                  to="/signup"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-bold leading-7 text-[#0000ff] hover:bg-gray-50"
                >
                  Sign up
                </NavLink>
              </div>
            </div>
          </div>
        </Dialog.Panel>
        </motion.div>
      </Dialog>
    </motion.header>
  )
}
export default AppHeader;