'use client'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IEmailPassword } from '@/types/ui/ui.interface'
import { useContext } from 'react'
import { Context } from '@/providers/StoreProvider'
import { observer } from 'mobx-react-lite'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Link from 'next/link'
import BtnSubmit from '../../Buttons/BtnSubmit/BtnSubmit'
import FormLabel from '../FormLabel/FormLabel'
import { emailPattern } from './EmailPattern'

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
                  <div className='flex flex-col items-center justify-center px-4 py-8 mx-auto lg:py-0'>
                    {/* <NavLink to="/" className="flex items-center mb-6 text-2xl font-semibold text-white">
                    <img className="w-64 mr-2" src="logo2.svg" alt="logo" />
                </NavLink> */}
                    <div className='w-full  rounded-2xl  md:mt-0 sm:max-w-md xl:p-0'>
                      <div className='p-6 space-y-4 md:space-y-9 sm:p-8'>
                        <h1 className='text-xl font-bold leading-tight tracking-tight text-white md:text-2xl'>
                          Sign in to your account
                        </h1>
                        <form
                          onSubmit={handleSubmit(onSubmit)}
                          className='space-y-4 md:space-y-6'
                        >
                          <div>
                            <FormLabel>Your email</FormLabel>
                            <input
                              type='email'
                              {...formRegister('email', {
                                required: 'Email is required',
                                pattern: {
                                  value: emailPattern,
                                  message: 'Please enter valid email',
                                },
                              })}
                              // eslint-disable-next-line max-len
                              className='input w-full'
                              placeholder='name@company.com'
                              required
                            />
                          </div>
                          <div>
                            <FormLabel>Password</FormLabel>
                            <input
                              type='password'
                              {...formRegister('password', {
                                required: 'Password is required',
                                minLength: {
                                  value: 6,
                                  message: 'Min length must be 6 characters',
                                },
                              })}
                              placeholder='••••••••'
                              // eslint-disable-next-line max-len
                              className='input w-full'
                              required
                            />
                          </div>
                          <div className='flex items-center justify-between'>
                            <div className='flex items-start'>
                              <div className='flex items-center h-5'>
                                <input
                                  id='remember'
                                  aria-describedby='remember'
                                  type='checkbox'
                                  className='checkbox checkbox-primary'
                                  required
                                />
                              </div>
                              <div className='ml-3 text-sm'>
                                <label className='text-gray-500 '>
                                  Remember me
                                </label>
                              </div>
                            </div>
                            <Link
                              href='/'
                              className='text-sm font-medium text-primary hover:underline'
                            >
                              Forgot password?
                            </Link>
                          </div>
                          <BtnSubmit text='Sign in' />
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
                        </form>
                      </div>
                    </div>
                  </div>
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
