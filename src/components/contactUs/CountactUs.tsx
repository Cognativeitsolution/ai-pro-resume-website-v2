import React from 'react'
import { TfiEmail } from 'react-icons/tfi'

export default function CountactUs() {
    return (
        <>
            <section className="py-5 md:py-10">
                <div className="container">
                    <div className='grid grid-cols-12 border-2 border-rose-950 gap-6'>
                        <div className='col-span-4 bg-white/30 backdrop-blur-none border-2 border-rose-950'>
                            <h5>Contact Info</h5>
                            <div className=''>
                                <div className='flex items-center justify-start gap-4'>
                                    <div className='bg-hamzaPrimary/30 backdrop-blur-sm p-3 rounded-lg'>
                                        <TfiEmail size={40} className='text-hamzaPrimary' />
                                    </div>
                                    <div>
                                        <h6 className='leading-none'>Email</h6>
                                        <p>rabiasid@gmail.com</p>
                                    </div>
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
