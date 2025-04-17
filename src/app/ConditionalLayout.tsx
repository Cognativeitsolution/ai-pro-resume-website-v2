"use client";

import { useEffect, useState, ReactNode } from "react";
import { Footer, Header } from "@/components";
import Loader from "@/components/loader/MainLoader";

interface ConditionalLayoutProps {
    children: ReactNode;
}

const LOADER_DELAY = 1500; // milliseconds

const ConditionalLayout = ({ children }: ConditionalLayoutProps) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, LOADER_DELAY);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Header />
            {isLoading ? <Loader /> : children}
            <Footer />
        </>
    );
};

export default ConditionalLayout;
