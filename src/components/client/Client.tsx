"use client"
import { OldAPI } from '@/services/oldService';
import Image from 'next/image';
import React, { ReactNode, useEffect, useState } from 'react'

type ClientItem = {
    image: any;
    alt: string
};

type ClientData = {
    title: string;
    description: ReactNode;
    clientList?: ClientItem[];
};

type propsType = {
    data: ClientData;
};


let imageBaseUrl = "https://backend.aiproresume.com/public/images/"


export default function Client(props: propsType) {
    const { data } = props
    const [our_clients, set_our_clients] = useState<any>([]);


    useEffect(() => {
        OldAPI.get("/our-clients").then((res) => {
            if (res?.success) {
                set_our_clients(res?.data?.clients);
            }
        });
    }, []);


    return (
        <div className='py-5 md:py-10 '>
            <div className='container '>
                <div className='text-center mb-4 md:mb-8'>
                    <h3 className="text-[26px] md:text-[30px] lg:text-[40px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-1">
                        {data.title}
                    </h3>
                    <p className="text-[16px] lg:text-[18px] ">
                        {data.description}
                    </p>
                </div>


                <div className='flex flex-wrap justify-center mx-auto gap-[10px] sm:gap-[30px] lg:gap-[50px]'>
                    {our_clients?.length > 0 ? our_clients?.map((client: any) => (
                        <div key={client?.id} className="bg-indigo-200/20 backdrop-blur-none border border-white rounded-lg px-5 py-2">
                            <Image
                                src={imageBaseUrl + client?.image}
                                alt={client?.name}
                                className='mx-auto'
                                width={120}
                                height={120}
                            />
                        </div>
                    )) : null}
                    {/* {data?.clientList?.map((item: any, index: any) => (
                        <div key={index} className="">
                            <Image src={item?.image} alt={item?.alt} className='mx-auto' />
                        </div>
                    ))} */}
                </div>
            </div>
        </div>
    )
}
