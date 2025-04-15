import React from 'react'
import { BsGithub, BsInstagram } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { LiaLinkedinIn } from 'react-icons/lia'
import { TfiEmail } from 'react-icons/tfi'

export default function CountactUs() {
    return (
        <>
            <section className="py-5 md:py-10">
                <div className="container">
                    <div className='grid grid-cols-12 border-2 border-rose-950 gap-6'>
                        <div className='col-span-4 bg-white/30 backdrop-blur-none border-2 border-rose-950'>
                            <h5>Contact Info</h5>
                            <div className='py-5 flex flex-col gap-y-6'>
                                <div className='flex items-center justify-start gap-4'>
                                    <div className='bg-hamzaPrimary/30 backdrop-blur-sm p-3 rounded-lg'>
                                        <TfiEmail size={25} className='text-hamzaPrimary' />
                                    </div>
                                    <div>
                                        <h6 className='text-[14px] leading-[20px] text-indigo-500 font-medium '>Email</h6>
                                        <p className='text-gray-800 text-base text-[14px] leading-[14px]'>rabiasid123@gmail.com</p>
                                    </div>
                                </div>
                                <div className='flex items-center justify-start gap-4'>
                                    <div className='bg-hamzaPrimary/30 backdrop-blur-sm p-3 rounded-lg'>
                                        <TfiEmail size={25} className='text-hamzaPrimary' />
                                    </div>
                                    <div>
                                        <h6 className='text-[14px] leading-[20px] text-indigo-500 font-medium '>Email</h6>
                                        <p className='text-gray-800 text-base text-[14px] leading-[14px]'>rabiasid123@gmail.com</p>
                                    </div>
                                </div>
                                <div className='flex items-center justify-start gap-4'>
                                    <div className='bg-hamzaPrimary/30 backdrop-blur-sm p-3 rounded-lg'>
                                        <TfiEmail size={25} className='text-hamzaPrimary' />
                                    </div>
                                    <div>
                                        <h6 className='text-[14px] leading-[20px] text-indigo-500 font-medium '>Email</h6>
                                        <p className='text-gray-800 text-base text-[14px] leading-[14px]'>rabiasid123@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <h5>Social Info</h5>
                            <div className='py-4 flex gap-x-2'>
                                <div className='bg-hamzaPrimary/30 backdrop-blur-sm p-3 rounded-full'>
                                    <FaFacebook size={25} className='text-hamzaPrimary' />
                                </div>
                                <div className='bg-hamzaPrimary/30 backdrop-blur-sm p-3 rounded-full'>
                                    <BsInstagram size={20} className='text-hamzaPrimary' />
                                </div>
                                <div className='bg-hamzaPrimary/30 backdrop-blur-sm p-3 rounded-full'>
                                    <LiaLinkedinIn size={25} className='text-hamzaPrimary' />
                                </div>
                                <div className='bg-hamzaPrimary/30 backdrop-blur-sm p-3 rounded-full'>
                                    <BsGithub size={25} className='text-hamzaPrimary' />
                                </div>
                            </div>
                        </div>
                        <div className='col-span-8 bg-white/30 backdrop-blur-none border-2 border-rose-950'>
                            <h5>Send us a message</h5>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
