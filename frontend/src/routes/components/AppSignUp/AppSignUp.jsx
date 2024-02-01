const AppSignUp = () => {
    return (
        <>
        <section>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                {/* <NavLink to="/" className="flex items-center mb-6 text-2xl font-semibold text-black">
                    <img className="w-64 mr-2" src="logo2.svg" alt="logo" />
                </NavLink> */}
                <div className="w-full bg-white rounded-2xl shadow-2xl md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
                            Sign Up
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
                            <div>
                                <label className="block mb-2 text-sm font-medium text-black">Repeat password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-[#0000ff] focus:border-[#0000ff] block w-full p-2.5" required="" />
                            </div>
                            <button type="submit" className="w-full duration-200 text-white bg-[#0000ff] hover:bg-[#ffffff] hover:text-[#0000ff] hover:ring-2 focus:ring-4 focus:outline-none focus:ring-[#0000ff] font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign up</button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default AppSignUp;