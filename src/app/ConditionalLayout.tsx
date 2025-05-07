"use client";
// =============
import { useEffect, useState, ReactNode } from "react";
// =============
import { Footer, Header, Loader } from "@/components";
import { ReferHeaderProvider } from "@/context/ReferHeaderContext";
import { OldAPI } from "@/services/oldService";

interface ConditionalLayoutProps {
    children: ReactNode;
}

const LOADER_DELAY = 4000;

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
        <ReferHeaderProvider>
            <Header />
            {isLoading ? <Loader /> : children}
            <Footer />
        </ReferHeaderProvider>
    );
};

export default ConditionalLayout;
