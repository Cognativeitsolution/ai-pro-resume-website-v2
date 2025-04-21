"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

// ======== Create the Context
const ReferHeaderContext = createContext<{
    showReferHeader: boolean;
    setShowReferHeader: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

// ======== Create the Provider Component
export const ReferHeaderProvider = ({ children }: { children: ReactNode }) => {
    const [showReferHeader, setShowReferHeader] = useState(true);

    return (
        <ReferHeaderContext.Provider value={{ showReferHeader, setShowReferHeader }}>
            {children}
        </ReferHeaderContext.Provider>
    );
};

// ======== Custom Hook to Use the Context
export const useReferHeader = () => {
    const context = useContext(ReferHeaderContext);
    if (!context) {
        throw new Error("useReferHeader must be used within a ReferHeaderProvider");
    }
    return context;
};
