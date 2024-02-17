import { motion } from "framer-motion";
import Image from "next/image";

const Post = () => {
    return (
        <>
        <div
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
            <article className="drop-shadow-2xl p-5 flex flex-col lg:flex-row border-y-2 gap-5 bg-white rounded-xl cursor-pointer">
                <div className="flex flex-col gap-5">
                    <a className=" flex justify-start items-center gap-5" href="">
                        <Image width={48} height={20} src="/logo.svg" alt="avatar" />
                        <h3>PROJECTZERO</h3>
                    </a>
                    <img className="rounded-xl shadow-lg w-full" src="https://plus.unsplash.com/premium_photo-1664439520373-c832fe4c3186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80" alt="" />
                    <p>
                        26 june 19:48
                    </p>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex">
                        <p className=" text-sm text-white p-2 bg-[#0000ff] rounded-xl">category</p>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis delectus quam beatae nulla dolorum corporis vero dicta tempore nemo. Rem veritatis at expedita eos quia deleniti atque quo, iure perspiciatis!</p>
                    <div className="flex gap-10">
                        <div className="flex items-center gap-2">
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8">
                                    <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
                                </svg>
                            </button>
                            <p>28</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8">
                                    <path fillRule="evenodd" d="M10 3c-4.31 0-8 3.033-8 7 0 2.024.978 3.825 2.499 5.085a3.478 3.478 0 01-.522 1.756.75.75 0 00.584 1.143 5.976 5.976 0 003.936-1.108c.487.082.99.124 1.503.124 4.31 0 8-3.033 8-7s-3.69-7-8-7zm0 8a1 1 0 100-2 1 1 0 000 2zm-2-1a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <p>28</p>
                        </div>
                        {/* <div className="flex items-center gap-2">
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8">
                                    <path d="M13 4.5a2.5 2.5 0 11.702 1.737L6.97 9.604a2.518 2.518 0 010 .792l6.733 3.367a2.5 2.5 0 11-.671 1.341l-6.733-3.367a2.5 2.5 0 110-3.475l6.733-3.366A2.52 2.52 0 0113 4.5z" />
                                </svg>
                            </button>
                            <p>15</p>
                        </div> */}
                    </div>
                    <div >
                        <div className=" flex flex-col gap-2 p-3 border-b-2 hover:bg-slate-100">
                            <div className="flex gap-4 items-start">
                                <img className="rounded-full w-[40px]" src="https://images.generated.photos/qI5uM1dlPhWuZfuUOvcIt7cWP0BrcyA_3RAXpw2EJ5k/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Nzc4Mjk0LmpwZw.jpg" alt="avatar" />
                                <div>
                                    <h3 className='text-sm text-[#0000ff]'>@Wonder</h3>
                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolorem molestias accusantium rerum debitis consequatur voluptates temporibus tempora minima odit tempore, similique a aliquam fugit earum harum autem eligendi cupiditate.</p>
                                </div>
                            </div>
                        </div>
                        <div className=" flex flex-col gap-2 p-3 hover:bg-slate-100">
                            <div className="flex gap-4 items-start">
                                <img className="rounded-full w-[40px]" src="https://images.generated.photos/qI5uM1dlPhWuZfuUOvcIt7cWP0BrcyA_3RAXpw2EJ5k/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Nzc4Mjk0LmpwZw.jpg" alt="avatar" />
                                <div>
                                    <h3 className='text-sm text-[#0000ff]'>@Wonder</h3>
                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </article>
        </div>
        </>
    );
}

export default Post;