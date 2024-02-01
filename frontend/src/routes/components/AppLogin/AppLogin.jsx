import { NavLink } from "react-router-dom";

const AppLogin = () => {
    return (
        <>
        <section>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                {/* <NavLink to="/" className="flex items-center mb-6 text-2xl font-semibold text-black">
                    <img className="w-64 mr-2" src="logo2.svg" alt="logo" />
                </NavLink> */}
                <div className="w-full bg-white rounded-2xl shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-[#0000ff] focus:border-[#0000ff] block w-full p-2.5" placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-black">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-[#0000ff] focus:border-[#0000ff] block w-full p-2.5" required="" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[#0000ff]" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label className="text-gray-500 ">Remember me</label>
                                    </div>
                                </div>
                                {/* <a href="#" className="text-sm font-medium text-[#0000ff] hover:underline">Forgot password?</a> */}
                            </div>
                            <button type="submit" className="w-full text-white bg-[#0000ff] hover:bg-[#0000ff] focus:ring-4 focus:outline-none focus:ring-[#0000ff] font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <NavLink to="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</NavLink>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default AppLogin;