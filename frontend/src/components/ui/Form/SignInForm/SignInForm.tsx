'use client'
import Link from 'next/link'
import BtnSubmit from '../../Buttons/BtnSubmit/BtnSubmit'
import FormLabel from '../FormLabel/FormLabel'
import { SubmitHandler, useForm } from 'react-hook-form'
import { emailPattern } from './EmailPattern'
import { IEmailPassword } from '@/types/ui/ui.interface'
import { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '@/providers/StoreProvider'

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
      <div className='flex flex-col items-center justify-center px-4 py-8 mx-auto lg:py-0'>
        <div className='w-full  rounded-2xl  md:mt-0 sm:max-w-md xl:p-0'>
          <div className='p-6 space-y-4 md:space-y-9 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-white md:text-2xl text-center'>
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
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default observer(SignInForm)
