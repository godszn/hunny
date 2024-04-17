import React from 'react'
import Image from 'next/image'
import hug from '../../assets/Group 2.svg'
import Footer from '@/components/Footer'
import logo from '../../assets/LOGO.svg'
import cancel from '../../assets/Cancel.svg'
import exp from '../../assets/Rectangle 922.svg'
import hb from '../../assets/Rectangle 9.svg'

const page = () => {
    return (
        <div>
            <div className="splash-signup flex h-[120vh] p-10 bg-blue-400 justify-evenly items-center">
                <div className="splash-widget flex items-center">
                    <Image className="w-[70%]" src={hug} alt='' />
                </div>
                <div className="splash-widget flex flex-col relative w-[42%] justify-center bg-white h-[88%] justify-evenly rounded-[26px]">
                    <div className="line absolute w-[86%] border-t-slate-800 top-[100px] left-[34px]" style={{ borderTop: '1px solid #EFD378' }}></div>
                    <div className="top-c">
                        <Image className="absolute top-[0] left-[41%]" src={logo} alt='' />
                        <div className="absolute top-[30px] right-[30px] p-1 bg-[#F7F6F3] rounded-md cursor-pointer">
                            <Image src={cancel} alt='' />
                        </div>
                    </div>
                    `<div className="signup-form-wrapper pl-7 pr-7">
                        <h1 className="text-lg font-semibold text-center mt-8">
                            Sign up
                        </h1>
                        <div className="signup-form">
                            <section className="pt-5 pb-3">
                                <p>Email Address</p>
                                <input type="text" placeholder="Enter" className="px-4 py-2 border border-gray-400 rounded w-full" />
                            </section>
                            <section className="pt-5 pb-3">
                                <p>Password</p>
                                <input type="password" placeholder="Enter" className="px-4 py-2 border border-gray-400 rounded w-full" />
                            </section>
                            <section className="pt-5 pb-3">
                                <p>Confirm Password</p>
                                <input type="password" placeholder="Enter" className="px-4 py-2 border border-gray-400 rounded w-full" />
                                <div className="flex">
                                    <section>
                                        <input type="checkbox" className="border border-pink-500 bg-pink-500 text-xs" />
                                    </section>
                                    <section className="flex text-sm items-center">
                                        <p className='text-xs'>By signing up, you consent to adhere to our</p>
                                        <span className="text-pink-500 text-[10px] px-[2px]">Terms of Service</span>
                                        <p>and</p>
                                        <span className="text-pink-500 text-[10px] px-[2px]">Privacy Policy</span>
                                    </section>
                                </div>
                            </section>
                        </div>
                        <div className="login-btn mt-24 flex flex-col items-center">
                            <button className="w-full h-12 bg-yellow-300 rounded-full text-black">
                                Next
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page
