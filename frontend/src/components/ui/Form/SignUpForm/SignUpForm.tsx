/* eslint-disable max-len */
'use client'
import { IEmailPassword } from '@/types/ui/ui.interface'
import BtnSubmit from '../../Buttons/BtnSubmit/BtnSubmit'
import FormLabel from '../FormLabel/FormLabel'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useContext, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '@/providers/StoreProvider'
import { emailPattern } from '../SignInForm/EmailPattern'

const SignUpForm: React.FC = () => {
  const { store } = useContext(Context)
  const [password, setPassword] = useState<string>()
  const [passwordMask, setPasswordMask] = useState<string>()
  const [err, setErr] = useState<boolean>(false)
  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
  } = useForm<IEmailPassword>({
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<IEmailPassword> = (data) => {
    if (password === passwordMask) {
      store.signUp(data)
      setErr(false)
    } else {
      setErr(true)
    }
  }

  useEffect(() => {
    if (password === passwordMask) {
      setTimeout(() => setErr(false), 500)
    } else {
      setTimeout(() => setErr(true), 500)
    }
  }, [password, passwordMask])

  return (
    <>
      <section>
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0'>
          <div className='w-full  rounded-2xl  md:mt-0 sm:max-w-md xl:p-0'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-white md:text-2xl text-center'>
                Sign Up
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
                    id='email'
                    className={`input ${errors.email ? 'input-error' : ''} w-full`}
                    placeholder='name@company.com'
                    required
                  />
                  {errors.email && (
                    <p className='text-red-500 text-xs'>
                      errors.email?.message
                    </p>
                  )}
                </div>
                <div>
                  <FormLabel>Password</FormLabel>
                  <input
                    type='password'
                    {...formRegister('password')}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id='password'
                    placeholder='••••••••'
                    className={`input ${err ? 'input-error' : ''} w-full`}
                    required
                  />
                </div>
                <div>
                  <FormLabel>Repeat password</FormLabel>
                  <input
                    type='password'
                    id='passwordMask'
                    value={passwordMask}
                    onChange={(e) => setPasswordMask(e.target.value)}
                    placeholder='••••••••'
                    className={`input ${err ? 'input-error' : ''} w-full`}
                    required
                  />
                  {err && (
                    <p className='text-red-500 text-xs'>
                      Passwords do not match
                    </p>
                  )}
                </div>
                <BtnSubmit text='Sign up' />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default observer(SignUpForm)
