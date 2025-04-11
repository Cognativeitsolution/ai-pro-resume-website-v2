"use client"
import Image from 'next/image';
import React, { ReactNode } from 'react'

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


export default function Client(props: propsType) {
    const { data } = props
    // const [our_clients, set_our_clients] = useState<any[]>([]);

    // useEffect(() => {
    //     OldAPI.get("/our-clients").then((res) => {
    //         console.log(res, "res");
    //     });
    // }, []);

    return (
        <div className='py-5 md:py-10 bg-white'>
            <div className='container '>
                <div className='text-center mb-4 md:mb-8'>
                    <h3 className="text-[26px] md:text-[30px] lg:text-[40px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-1">
                        {data.title}
                    </h3>
                    <p className="text-[16px] lg:text-[18px] ">
                        {data.description}
                    </p>
                </div>


                <div className='flex flex-wrap justify-center mx-auto gap-y-8 '>
                    {data?.clientList?.map((item: any, index: any) => (
                        <div key={index} className="w-[33%] lg:w-[25%]">
                            <Image src={item?.image} alt={item?.alt} className='mx-auto' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
