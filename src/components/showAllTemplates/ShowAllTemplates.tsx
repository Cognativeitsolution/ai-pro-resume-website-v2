"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
// =================
import { OldAPI } from "@/services/oldService";
import TemplatesCard from "./TemplatesCard";
import CustomLoader from "../loader/CustomLoader";
import SearchBar from "../custom/searchBar/SearchBar";

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
    const [searchTerm, setSearchTerm] = useState<string>(""); // State for the search term
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

    // Filter templates based on search term
    const filteredTemplates = templates.filter((template) =>
        template.name.toLowerCase().includes(searchTerm.toLowerCase()) // Ensure case-insensitive search
    );

    return (
        <>
            <SearchBar
                placeholder="Search with Creative, Modern, Professional etc"
                showDropdown={false}
                onSearchChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
            />
            <section className="py-5 md:py-10">
                {/* Loader */}
                {showLoader ? (
                    <CustomLoader size={50} color="#9885FF" text="Fetching Templates..." />
                ) : filteredTemplates.length ? (
                    <TemplatesCard
                        templates={filteredTemplates} // Pass filtered templates
                        userPurchasedTemplates={userPurchasedTemplates}
                    />
                ) : (
                    <p className="text-center text-xl font-semibold text-hamzaPrimary">
                        No Templates Found!
                    </p>
                )}
            </section>
        </>
    );
};

export default ShowAllTemplates;
