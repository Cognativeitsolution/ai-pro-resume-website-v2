import React from 'react'
import Image from 'next/image'
// ===============
import { CTA } from '@/components';
import style from './Tailor.module.css'
// ===============
import tailor from "media/images/tailor.webp";

const Tailor = () => {
    return (
        <div className='pt-20'>
            <div className="grid grid-cols-12 items-center gap-5 xl:gap-10 p-6 rounded-2xl bg-indigo-200/20 backdrop-blur-none border-2 border-white">
                <div className="col-span-12 lg:col-span-3 relative">
                    <div className={`${style.tailorImg} static lg:absolute -top-[170px] xl:-top-[175px] left-0 h-[400px] w-full lg:w-[80%] xl:w-auto -mt-20 rounded-lg overflow-hidden`}>
                        <Image src={tailor} alt="tailor" className="w-full h-full" />
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-9 flex flex-col gap-3">
                    <h3 className='text-[20px] sm:text-[25px] md:text-[30px] xl:text-[35px] leading-[30px] sm:leading-[35px] md:leading-[40px] xl:leading-[45px] font-semibold'>Tailor your resume to the job with a single click</h3>
                    <p className="text-[16px] text-justify md:text-left mb-2">With our resume tailoring feature you can ensure your resume is relevant to the job you’re applying for. Simply copy and paste the job ad in our builder and we’ll show you what you need to include in order to pass the ATS screening.</p>
                    <CTA
                        btn
                        text="Build a Tailored Resume"
                        bgColor="bg-primary hover:bg-PrimaryDark"
                        txtColor="text-white"
                        border="border-0"
                    />
                </div>
            </div>
        </div>
    )
}

export default Tailor