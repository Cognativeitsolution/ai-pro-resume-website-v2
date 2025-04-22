"use client";
import React, { useEffect, useState } from "react";
// =================
import { OldAPI } from "@/services/oldService";
import TemplatesCard from "./TemplatesCard";
import CustomLoader from "../loader/CustomLoader";

type TemplateType = {
    id: number;
    image: string;
    name: string;
    price: string;
};

const ShowAllTemplates = () => {
    const [templates, setTemplates] = useState<TemplateType[]>([]);
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const fetchTemplates = async () => {
            try {
                const res = await OldAPI.get("show-resume-templates");
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
    }, []);

    return (
        <section className="py-5 md:py-10">
            {/* Loader */}
            {showLoader ? (
                <CustomLoader size={50} color="#9885FF" text="Fetching Templates..." />
            ) : templates.length ? (
                <TemplatesCard templates={templates} />
            ) : (
                <p className="text-center text-xl font-semibold text-hamzaPrimary">
                    No Templates Found!
                </p>
            )}
        </section>
    );
};

export default ShowAllTemplates;
