"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import BtnSubmit from "../../Buttons/BtnSubmit/BtnSubmit";
import FormLabel from "../FormLabel/FormLabel";

const SignInForm: React.FC = () => {
    return (
        <>
        <section>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                {/* <NavLink to="/" className="flex items-center mb-6 text-2xl font-semibold text-black">
                    <img className="w-64 mr-2" src="logo2.svg" alt="logo" />
                </NavLink> */}
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity:1 }}
                transition={{ type: "spring" }}
                className="w-full bg-white rounded-2xl shadow-2xl md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6">
                            <div>
                                <FormLabel>Your email</FormLabel>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <FormLabel>Password</FormLabel>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5" required />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary" required />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label className="text-gray-500 ">Remember me</label>
                                    </div>
                                </div>
                                <Link href="/" className="text-sm font-medium text-primary hover:underline">Forgot password?</Link>
                            </div>
                            <BtnSubmit text="Sign in" />
                            <p className="text-sm font-light text-gray-500">
                                Don’t have an account yet? <Link href="/signup" className="font-medium text-primary hover:underline">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
        </>
    );
}

export default SignInForm;