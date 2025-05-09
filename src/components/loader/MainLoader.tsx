import React from "react";
import Image from "next/image"
//==========
import styles from "./Loader.module.css"
//==========
import logo from "@/app/favicon.ico";

const Loader = () => {
    return (
        <>
            <section className={`fixed left-0 top-0 w-[100%] h-[100vh] z-[9999999] bg-white flex flex-col items-center justify-center`}>
                <div className="flex flex-col items-center justify-center">
                    <Image src={logo} priority alt="AI Pro Resume"/>
                    <span className={`text-[40px] md:text-[48px] font-bold leading-[1.2] animate-animloader ${styles.loader}`}>AI Pro Resume</span>
                </div>
            </section>
        </>
    )
}

export default Loader