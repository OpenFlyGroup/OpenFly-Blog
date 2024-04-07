'use client'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IEmailPassword } from '@/types/ui/ui.interface'
import { useContext } from 'react'
import { Context } from '@/providers/StoreProvider'
import { observer } from 'mobx-react-lite'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import SignInForm from './SignInForm'
import Link from 'next/link'
import SignUpForm from '../SignUpForm/SignUpForm'

interface SignInModalProps {
  isOpen: boolean
  closeModal: () => void
  openModal: () => void
}

const SignInModal: React.FC<SignInModalProps> = ({
  isOpen,
  closeModal,
  openModal,
}) => {
  const { store } = useContext(Context)
  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IEmailPassword>({
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<IEmailPassword> = (data) => {
    store.signIn(data)
    reset()
  }
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
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='modal-box w-full rounded-2xl shadow-2xl md:mt-0 sm:max-w-md xl:p-0 bg-base-200'>
                  <SignInForm />
                  <p className='text-sm font-light text-gray-500'>
                    Don’t have an account yet?{' '}
                    <Link
                      href='/signup'
                      className='font-medium text-primary hover:underline'
                      onClick={closeModal}
                    >
                      Sign up
                    </Link>
                  </p>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
export default observer(SignInModal)
