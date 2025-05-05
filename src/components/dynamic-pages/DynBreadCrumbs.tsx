'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaAngleRight, FaHome } from 'react-icons/fa';

const DynBreadCrumbs = ({ color }: any) => {
    const pathname = usePathname();
    const pathSegments = pathname.split('/').filter(Boolean);

    const crumbs = pathSegments.map((segment, idx) => {
        const href = '/' + pathSegments.slice(0, idx + 1).join('/');
        const label = segment.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

        return { label, href };
    });

    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className={`inline-flex items-center ${color ? color : "text-indigo-700"}`}>
                    <Link href="/" className={`inline-flex items-center text-md font-medium ${color ? color : ""} hover:text-hamzaPrimary`}>
                        <FaHome />
                    </Link>
                </li>
                {crumbs.map((item, index) => (
                    <li key={index} className={`inline-flex items-center ${color ? color : "text-indigo-700"}`}>
                        <FaAngleRight />
                        {index === crumbs.length - 1 ? (
                            <span className="ms-1 text-md font-medium md:ms-2">{item.label}</span>
                        ) : (
                            <Link
                                href={item.href}
                                className={`ms-1 md:ms-2 text-md font-medium  ${color ? color : "text-indigo-700 "} hover:text-hamzaPrimary`}
                            >
                                {item.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default DynBreadCrumbs;