'use client'
import Link from 'next/link'
import BtnSubmit from '../../Buttons/BtnSubmit/BtnSubmit'
import FormLabel from '../FormLabel/FormLabel'
import { SubmitHandler, useForm } from 'react-hook-form'
import { emailPattern } from './EmailPattern'
import { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '@/providers/StoreProvider'
import { IEmailPassword } from '@/types/services/services.interface'

const SignInForm: React.FC = () => {
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
              <p className='text-sm font-light text-gray-500'>
                Don’t have an account yet?{' '}
                <Link
                  href='/signup'
                  className='font-medium text-primary hover:underline'
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default observer(SignInForm)
