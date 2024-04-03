/* eslint-disable max-len */
'use client'
import { IEmailPassword } from '@/types/ui/ui.interface'
import BtnSubmit from '../../Buttons/BtnSubmit/BtnSubmit'
import FormLabel from '../FormLabel/FormLabel'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '@/providers/StoreProvider'

// interface ISignup extends IEmailPassword {
//   nickname: string
// }

const SignUpForm: React.FC = () => {
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
    store.signUp(data)
    reset()
  }

  return (
    <>
      <section>
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0'>
          <div className='w-full bg-base-200 rounded-2xl shadow-2xl md:mt-0 sm:max-w-md xl:p-0'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-white md:text-2xl'>
                Sign Up
              </h1>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='space-y-4 md:space-y-6'
              >
                {/* <div>
                  <FormLabel>Your nickname</FormLabel>
                  <input
                    type='text'
                    {...formRegister('nickname')}
                    id='text'
                    className='input w-full'
                    placeholder='nickname'
                    required
                  />
                </div> */}
                <div>
                  <FormLabel>Your email</FormLabel>
                  <input
                    type='email'
                    {...formRegister('email')}
                    id='email'
                    className='input w-full'
                    placeholder='name@company.com'
                    required
                  />
                </div>
                <div>
                  <FormLabel>Password</FormLabel>
                  <input
                    type='password'
                    {...formRegister('password')}
                    id='password'
                    placeholder='••••••••'
                    className='input w-full'
                    required
                  />
                </div>
                {/* <div>
                                <FormLabel>Repeat password</FormLabel>
                                <input type="password" {...formRegister("password")} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-secondary sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5" required />
                            </div> */}
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
