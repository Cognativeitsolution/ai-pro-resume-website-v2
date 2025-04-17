import React from 'react'

export default function ProConsCard() {
    return (
        <>
            <div className='relative py-10'>
                <div className='flex items-end gap-4 absolute -top-1 left-6'>
                    <div className="w-[90px] h-[90px] flex items-center justify-center rounded-full border-2 border-[#B9B9FF] bg-white z-20">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#A78BFA"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-8 h-8"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 2v2m6.364 1.636l-1.414 1.414M22 12h-2M17.364 17.364l-1.414-1.414M12 22v-2M6.636 17.364l1.414-1.414M2 12h2M6.636 6.636l1.414 1.414M9 12a3 3 0 106 0 3 3 0 00-6 0z"
                            />
                        </svg>

                    </div>
                    <h3 className="text-2xl font-bold text-[#A78BFA]">PRO TIP</h3>
                </div>
                <div className="flex items-start gap-4 p-4 border-2 border-[#B9B9FF] rounded-2xl shadow-sm w-full max-w-4xl bg-white">
                    <div className='mt-10 '>
                        <p className="text-sm text-gray-800 mt-1">
                            Some templates also mention skills summary alongside the working experience to accentuate both. This template is perfectly useful for people who have a variety of skills and diversity in career history.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}