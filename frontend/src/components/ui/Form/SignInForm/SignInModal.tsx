'use client'
import BtnSubmit from '../../Buttons/BtnSubmit/BtnSubmit'
import FormLabel from '../FormLabel/FormLabel'
import { SubmitHandler, useForm } from 'react-hook-form'
import { emailPattern } from './EmailPattern'
import { IEmailPassword } from '@/types/ui/ui.interface'
import { useContext } from 'react'
import { Context } from '@/providers/StoreProvider'
import SignInForm from './SignInForm'
import Link from 'next/link'
import { observer } from 'mobx-react-lite'

const SignInModal: React.FC = () => {
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
      <button
        className='btn'
        onClick={() => {
          const modal = document.getElementById(
            'singInModal'
          ) as HTMLDialogElement
          if (modal) {
            modal.showModal()
          }
        }}
      >
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
      <dialog id='singInModal' className='modal'>
        <div className='modal-box w-full rounded-2xl shadow-2xl md:mt-0 sm:max-w-md xl:p-0 bg-base-200'>
          <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0'>
            {/* <NavLink to="/" className="flex items-center mb-6 text-2xl font-semibold text-white">
                    <img className="w-64 mr-2" src="logo2.svg" alt="logo" />
                </NavLink> */}
            <div className='w-full  rounded-2xl  md:mt-0 sm:max-w-md xl:p-0'>
              <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
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
                        <label className='text-gray-500 '>Remember me</label>
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
                  <div className='modal-action justify-between'>
                    <p className='text-sm font-light text-gray-500'>
                      Don’t have an account yet?{' '}
                      <a
                        href='/signup'
                        className='font-medium text-primary hover:underline modal-close'
                      >
                        Sign up
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <form method='dialog' className='modal-backdrop'>
          <button></button>
        </form>
      </dialog>
    </>
  )
}
export default observer(SignInModal)
