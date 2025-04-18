"use client";

import { useEffect, useState, ReactNode } from "react";
import { Footer, Header } from "@/components";
import Loader from "@/components/loader/MainLoader";
import { OldAPI } from "@/services/oldService";

interface ConditionalLayoutProps {
    children: ReactNode;
}

const LOADER_DELAY = 2000; // milliseconds

const ConditionalLayout = ({ children }: ConditionalLayoutProps) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, LOADER_DELAY);

        return () => clearTimeout(timer);
    }, []);
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     setIsLoading(true);
    //     OldAPI.get("settings-for-website").then((res) => {
    //         console.log(res, "res");
    //         setIsLoading(false);
    //     });
    // }, []);

    return (
        <>
            <Header />
            {isLoading ? <Loader /> : children}
            <Footer />
        </>
    );
};

export default ConditionalLayout;
