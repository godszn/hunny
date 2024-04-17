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
                <div className="splash-widget flex flex-col relative w-[35%] justify-center bg-white h-[84%] justify-evenly rounded-[26px]">
                <div className="line absolute w-5/6 border-t-slate-800 top-[100px] left-[49px]" style={{borderTop: '1px solid #EFD378'}}></div>
                    <div className="top-c">
                        <Image className="absolute top-[0] left-[41%]" src={logo} alt='' />
                        <div className="absolute top-[30px] right-[30px] p-1 bg-gray-300 rounded-md cursor-pointer">
                            <Image src={cancel} alt='' />
                        </div>
                    </div>
                    <div className="choice p-8 pl-0 pr-0">
                        <section className="mb-8">
                            <h1 className="text-2xl text-center">
                                Are you model or explorer?
                            </h1>
                        </section>
                        <section className="flex justify-evenly">
                            <div className="model border border-black rounded-[26px] h-fit w-[36%] pt-8 pb-8 pr-4 pl-4 cursor-pointer">
                                <Image src={exp} alt='' />
                                <h1 className="text-center text-lg font-bold mt-4">
                                    Model
                                </h1>
                            </div>
                            <div className="explorer border border-black rounded-[26px] h-fit w-[36%] pt-8 pb-8 pr-4 pl-4 cursor-pointer">
                                <Image src={hb} alt='' />
                                <h1 className="text-center text-lg font-bold mt-4">
                                    Explorer
                                </h1>
                            </div>
                        </section>

                    </div>
                    <div className="mx-6">
                        <button className="w-full h-12 bg-gray-300 rounded-[28px] text-[#9E9E9E]">
                            Next
                        </button>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page
