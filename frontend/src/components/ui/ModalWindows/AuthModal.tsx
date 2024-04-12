'use client'
import { observer } from 'mobx-react-lite'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Link from 'next/link'
import SignInForm from '../Form/SignInForm/SignInForm'
import SignUpForm from '../Form/SignUpForm/SignUpForm'

interface AuthInModalProps {
  isOpen: boolean
  closeModal: () => void
  openModal: () => void
}

const AuthModal: React.FC<AuthInModalProps> = ({
  isOpen,
  closeModal,
  openModal,
}) => {
  let [isReg, setIsReg] = useState(false)
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black/25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='modal-box w-full rounded-2xl shadow-2xl md:mt-0 sm:max-w-md xl:p-0 bg-base-200'>
                  {isReg ? (
                    <>
                    <SignUpForm></SignUpForm>
                    <p className='text-sm font-light text-gray-500 text-center mb-4'>
                      Already have an accout?{' '}
                      <Link
                        href='/'
                        className='font-medium text-primary hover:underline text-center'
                        onClick={() => setIsReg(false)}
                      >
                        Sign in
                      </Link>
                    </p>
                  </>
                  ) : (
                    <>
                      <SignInForm></SignInForm>
                      <p className='text-sm font-light text-gray-500 text-center mb-4'>
                        Don’t have an account yet?{' '}
                        <Link
                          href='/'
                          className='font-medium text-primary hover:underline'
                          onClick={() => setIsReg(true)}
                        >
                          Sign up
                        </Link>
                      </p>
                    </>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
export default observer(AuthModal)
