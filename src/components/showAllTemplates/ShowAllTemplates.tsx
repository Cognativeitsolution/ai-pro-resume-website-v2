"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
// =================
import { OldAPI } from "@/services/oldService";
import TemplatesCard from "./TemplatesCard";
import CustomLoader from "../loader/CustomLoader";

type TemplateType = {
    id: number;
    image: string;
    name: string;
    is_paid: number;
};

const ShowAllTemplates = () => {
    const [showLoader, setShowLoader] = useState(true);
    const [templates, setTemplates] = useState<TemplateType[]>([]);
    const [userPurchasedTemplates, setUserPurchasedTemplates] = useState<TemplateType[]>([]);
    const pathname = usePathname();

    useEffect(() => {
        const fetchTemplates = async () => {
            setShowLoader(true);
            try {
                let endpoint = "";
                if (pathname.includes("cover-letter-templates")) {
                    endpoint = "show-cover-templates";
                } else if (pathname.includes("resume-templates")) {
                    endpoint = "show-resume-templates";
                } else {
                    console.warn("No valid API endpoint for pathname:", pathname);
                    return;
                }

                const res = await OldAPI.get(endpoint);
                if (Array.isArray(res?.data)) {
                    setTemplates(res.data);
                } else {
                    console.warn("Unexpected template response:", res);
                }
            } catch (error) {
                console.error("Error fetching templates:", error);
            } finally {
                setShowLoader(false);
            }
        };

        fetchTemplates();
    }, [pathname]); 

    return (
        <section className="py-5 md:py-10">
            {/* Loader */}
            {showLoader ? (
                <CustomLoader size={50} color="#9885FF" text="Fetching Templates..." />
            ) : templates.length ? (
                <TemplatesCard
                    templates={templates}
                    userPurchasedTemplates={userPurchasedTemplates}
                />
            ) : (
                <p className="text-center text-xl font-semibold text-hamzaPrimary">
                    No Templates Found!
                </p>
            )}
        </section>
    );
};

export default ShowAllTemplates;
