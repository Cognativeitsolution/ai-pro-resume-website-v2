import React from 'react'
import { BsGithub, BsInstagram } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { LiaLinkedinIn } from 'react-icons/lia'
import { AiTwotoneMail } from "react-icons/ai";
import { MdLocalPhone } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import ContactUsForm from './ContactUsForm'

export default function CountactUs() {
    return (
        <>
            <section className="py-5 md:py-10">
                <div className="container">
                    <div className='grid grid-cols-12 gap-6'>
                        <div className='col-span-4 backdrop-blur-none rounded-xl px-6 py-4'>
                            <h5 className='font-semibold capitalize text-[24px] text-zinc-950'>Contact Info</h5>
                            <div className='py-5 flex flex-col gap-y-6'>
                                <div className='flex items-center justify-start gap-4'>
                                    <div className='bg-hamzaPrimary/20 backdrop-blur-sm rounded-lg  w-[55px] h-[55px] flex items-center justify-center'>
                                        <AiTwotoneMail size={28} className='text-indigo-600' />
                                    </div>
                                    <div>
                                        <h6 className='text-[16px] leading-[26px] text-indigo-500 font-medium '>Email:</h6>
                                        <p className='text-gray-800 text-base text-[16px] leading-[14px]'>info@aiproresume.com</p>
                                    </div>
                                </div>
                                <div className='flex items-center justify-start gap-4'>
                                    <div className='bg-hamzaPrimary/20 backdrop-blur-sm rounded-lg  w-[55px] h-[55px] flex items-center justify-center'>
                                        <MdLocalPhone size={28} className='text-indigo-600' />
                                    </div>
                                    <div>
                                        <h6 className='text-[16px] leading-[26px] text-indigo-500 font-medium '>Phone:</h6>
                                        <p className='text-gray-800 text-base text-[16px] leading-[14px]'>+1 (647) 625-6481</p>
                                    </div>
                                </div>
                                <div className='flex items-center justify-start gap-4'>
                                    <div className='bg-hamzaPrimary/20 backdrop-blur-sm rounded-lg  w-[60px] h-[55px] flex items-center justify-center'>
                                        <MdLocationPin size={28} className='text-indigo-600' />
                                    </div>
                                    <div>
                                        <h6 className='text-[16px] leading-[26px] text-indigo-500 font-medium '>Address:</h6>
                                        <p className='text-gray-800 text-base text-[16px] leading-[14px]'>989 Derry Rd E # 403 Mississauga, ON. L5T 2J8 Canada</p>
                                    </div>
                                </div>


                            </div>
                            <h5 className='font-semibold capitalize text-[24px] text-zinc-950'>Social Info</h5>
                            <div className='py-4 flex gap-x-2'>
                                <div className='bg-hamzaPrimary/20 backdrop-blur-sm p-3 rounded-full w-[45px] h-[45px] flex items-center justify-center'>
                                    <FaFacebook size={25} className='text-indigo-600' />
                                </div>
                                <div className='bg-hamzaPrimary/20 backdrop-blur-sm p-3 rounded-full w-[45px] h-[45px] flex items-center justify-center'>
                                    <BsInstagram size={20} className='text-indigo-600' />
                                </div>
                                <div className='bg-hamzaPrimary/20 backdrop-blur-sm p-3 rounded-full w-[45px] h-[45px] flex items-center justify-center'>
                                    <LiaLinkedinIn size={25} className='text-indigo-600' />
                                </div>
                                <div className='bg-hamzaPrimary/20 backdrop-blur-sm p-3 rounded-full w-[45px] h-[45px] flex items-center justify-center'>
                                    <BsGithub size={25} className='text-indigo-600' />
                                </div>
                            </div>
                        </div>
                        <div className='col-span-8 bg-indigo-200/20 border-2 border-white backdrop-blur-none rounded-xl px-8 py-4'>
                            <h5 className='font-semibold uppercase text-[26px] text-zinc-950'>Let's <span className='text-indigo-500'>Connect</span></h5>
                            <ContactUsForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
