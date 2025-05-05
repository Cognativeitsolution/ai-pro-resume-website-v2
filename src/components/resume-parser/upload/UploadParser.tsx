'use client'
import Image from 'next/image';
import React, { useState } from 'react'
// ==============
import { CTA } from '@/components';
// ==============
import UploadImg from 'media/resume_parser/upload-file.webp'

interface UploadParserProps {
    progress?: boolean;
}

export default function UploadParser({ progress }: UploadParserProps) {
    const [fileData, setFileData] = useState<{ name: string; file: File | null }>({
        name: "",
        file: null,
    });

    const handleFileChange = (e: any) => {
        const file = e.target.files[0];
        if (file) {
            setFileData({
                name: file.name,
                file: file,
            });
        } else {
            setFileData({
                name: "",
                file: null,
            });
        }
    };
    return (
        <section className={`relative z-10 ${progress ? "md:-mb-[180px] lg:-mb-[220px] md:-top-[160px] lg:-top-[220px]" : "md:-mb-[190px] lg:-mb-[270px] xl:-mb-[250px] md:-top-[170px] lg:-top-[270px] xl:-top-[250px]"}`}>
            <div className='container'>
                <div className={`ring-1 ring-white bg-indigo-200/30 backdrop-blur-sm rounded-3xl shadow-md p-0 ${progress && "w-full lg:w-3/4 mx-auto"}`}>
                    <div className='flex flex-col gap-4 my-8 px-5 w-11/12 sm:w-10/12 md:w-9/12 mx-auto py-8'>
                        {/* Progress */}
                        {progress && (
                            <div className="flex flex-col items-start justify-start gap-5">
                                <div className="flex items-center justify-center space-x-4">
                                    <div className="text-[16px] font-medium text-white bg-zinc-800 w-8 h-8 flex items-center justify-center rounded-full">
                                        1
                                    </div>
                                    <div className="bg-white w-24 h-0.5"></div>
                                    <div className="text-[16px] font-medium text-white bg-zinc-800/50 w-8 h-8 flex items-center justify-center rounded-full">
                                        2
                                    </div>
                                    <span className="text-[16px] font-medium text-white">Optional</span>
                                </div>
                                <p>First, we’ll need your resume to extract your experience and skills.</p>
                            </div>
                        )}
                        {/* Upload */}
                        <label htmlFor="uploadFile1"
                            className=" border-[1.2px] border-dashed border-[#7d16c4] font-semibold text-base rounded-3xl w-full h-52 flex 
                                    flex-col items-center justify-center cursor-pointer">
                            <div className='bg-white/85 backdrop-blur-sm p-3 rounded-full mb-3'>
                                <Image src={UploadImg} alt="upload" width={40} height={40} />
                            </div>
                            <h5 className='font-semibold text-[18px] text-zinc-950'>Upload Resume</h5>
                            <input
                                type="file"
                                id="uploadFile1"
                                accept=".doc,.docx,.pdf"
                                onChange={handleFileChange}
                                className="hidden"
                            />
                            <p className="text-[15px] font-medium text-slate-400 ">{fileData.name ? `${fileData.name}` : "pdf, doc, docx"}</p>
                        </label>

                        <div className='flex justify-center pt-2'>
                            <CTA
                                btn
                                text="Create Resume"
                                bgColor="bg-primary hover:bg-PrimaryDark"
                                txtColor="text-white"
                                border="border-0"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
