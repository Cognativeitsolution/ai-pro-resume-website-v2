'use client'
import { CTA } from '@/components';
import React, { useState } from 'react'
import { AiOutlineUpload } from 'react-icons/ai'

export default function UploadParser() {
    const [activeTab, setActiveTab] = useState<'text' | 'json'>('text');
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
        <section className='relative -top-[220px] z-10'>
            <div className='container'>
                <div className=" ring-1 ring-white bg-indigo-200/30 backdrop-blur-sm rounded-3xl shadow-md p-0">
                    <div className='flex flex-col gap-4 my-8 pt-12 px-5 w-9/12 mx-auto pb-0'>
                        {/* Upload */}
                        <label htmlFor="uploadFile1"
                            className=" border-[1.2px] border-dashed border-[#7d16c4] font-semibold text-base rounded-3xl w-full h-52 flex 
                                    flex-col items-center justify-center cursor-pointer">
                            <div className='bg-[#7d16c4]/20 backdrop-blur-sm p-5 rounded-full mb-3'>
                                <AiOutlineUpload size={30} className='text-[#7d16c4]' />
                            </div>
                            <h5 className='font-semibold text-[18px] text-zinc-950'>Upload Resume</h5>

                            <input
                                type="file"
                                id="uploadFile1"
                                accept=".doc,.docx,.pdf"
                                onChange={handleFileChange}
                                className="hidden"
                            />
                            <p className="text-xs font-medium text-slate-400 mt-2">{fileData.name ? `${fileData.name}` : "pdf, doc, docx"}</p>

                        </label>

                        <div className='flex justify-center py-2'>
                            <CTA
                                btn
                                text="Create Resume"
                                bgColor="bg-primary hover:bg-PrimaryDark"
                                txtColor="text-white"
                                border="border-0"
                            />
                        </div>
                        <div className='bg-white p-5 w-full rounded-t-3xl '>
                            <div className="flex space-x-4 border-b border-gray-300 mb-4 justify-center">
                                <button
                                    onClick={() => setActiveTab('text')}
                                    className={`py-2 px-4 font-semibold ${activeTab === 'text' ? 'border-b-2 border-[#7d16c4] text-hamborder-[#7d16c4]' : 'text-gray-500'}`}
                                >
                                    Text
                                </button>
                                <button
                                    onClick={() => setActiveTab('json')}
                                    className={`py-2 px-4 font-semibold ${activeTab === 'json' ? 'border-b-2 border-[#7d16c4] text-hamborder-[#7d16c4]' : 'text-gray-500'}`}
                                >
                                    JSON
                                </button>
                            </div>

                            <div className="text-sm text-gray-700">
                                {activeTab === 'text' ? (
                                    <div>
                                        <p>This is a plain text preview of the resume.</p>
                                    </div>
                                ) : (
                                    <pre className="bg-violet-100/75 p-3 rounded overflow-x-auto">
                                        {JSON.stringify({ name: fileData.name }, null, 2)}
                                    </pre>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
