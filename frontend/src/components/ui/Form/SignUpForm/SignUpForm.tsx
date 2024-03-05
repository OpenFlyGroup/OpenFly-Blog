/* eslint-disable max-len */
'use client'
import { motion } from 'framer-motion'
import BtnSubmit from '../../Buttons/BtnSubmit/BtnSubmit'
import FormLabel from '../FormLabel/FormLabel'
import { useAuth } from '@/hooks/useAuth'
import { useActions } from '@/hooks/useActions'
import { IEmailPassword } from '@/store/user/user.interface'
import { SubmitHandler, useForm } from 'react-hook-form'
// import Link from "next/link";

interface ISignup extends IEmailPassword {
  nickname: string
}

const SignUpForm: React.FC = () => {
  const { isLoading } = useAuth()

  const { signup } = useActions()

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ISignup>({
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<ISignup> = (data) => {
    signup(data)
    reset()
  }

  return (
    <>
      <section>
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
          {/* <Link href="/" className="flex items-center mb-6 text-2xl font-semibold text-white">
                    <img className="w-64 mr-2" src="logo2.svg" alt="logo" />
                </Link> */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: 'spring' }}
            className='w-full bg-secondary rounded-2xl shadow-2xl md:mt-0 sm:max-w-md xl:p-0'
          >
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-white md:text-2xl'>
                Sign Up
              </h1>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='space-y-4 md:space-y-6'
              >
                <div>
                  <FormLabel>Your nickname</FormLabel>
                  <input
                    type='text'
                    {...formRegister('nickname')}
                    id='text'
                    className='bg-gray-50 border border-gray-300 text-secondary sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5'
                    placeholder='nickname'
                    required
                  />
                </div>
                <div>
                  <FormLabel>Your email</FormLabel>
                  <input
                    type='email'
                    {...formRegister('email')}
                    id='email'
                    className='bg-gray-50 border border-gray-300 text-secondary sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5'
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
                    className='bg-gray-50 border border-gray-300 text-secondary sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5'
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
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default SignUpForm
