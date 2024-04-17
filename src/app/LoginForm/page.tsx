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
            <div className="splash-login flex h-[120vh] p-10 bg-blue-400 justify-evenly items-center">
                <div className="splash-widget flex items-center">
                    <Image className="w-[70%]" src={hug} alt='' />
                </div>
                <div className="splash-widget flex flex-col relative w-[35%] justify-center bg-white h-[88%] justify-evenly rounded-[26px]">
                    <div className="line absolute w-[86%] border-t-slate-800 top-[100px] left-[34px]" style={{ borderTop: '1px solid #EFD378' }}></div>
                    <div className="top-c">
                        <Image className="absolute top-[0] left-[41%]" src={logo} alt='' />
                        <div className="absolute top-[30px] right-[30px] p-1 bg-[#F7F6F3] rounded-md cursor-pointer">
                            <Image src={cancel} alt='' />
                        </div>
                    </div>
                    <div className="login-form-wrapper px-7 mt-32">
  <h1 className="text-lg font-semibold w-[70%]">
    Log in to see your favorite content creator
  </h1>
  <div className="login-form">
    <section className="pt-5 pb-3">
      <p>Email Address</p>
      <input type="text" placeholder="Email address" className="px-4 py-2 w-[100%] border border-gray-400 rounded" />
    </section>
    <section className="pt-5 pb-3">
      <p>Password</p>
      <input type="password" placeholder="Enter" className="px-4 w-[100%] py-2 border border-gray-400 rounded" />
      <p className="text-[#E688A3] text-right text-sm">Forgot Password?</p>
    </section>
  </div>
  <div className="login-btn mt-24 flex flex-col items-center">
    <button className="w-full h-12 bg-yellow-300 rounded-full text-black">
      Log in
    </button>
    <p className="text-[#E688A3] pt-4 pb-4">
      Sign up as creator
    </p>
  </div>
</div>
<div className="create w-[100%] border-t-4 border-blue-500">
  <section className="flex justify-center mt-4 mb-4">

                            <p>
                                Don’t have an account?
                            </p>
                            <span className='text-[#EFD378]'>
                                Sign up
                            </span>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page
