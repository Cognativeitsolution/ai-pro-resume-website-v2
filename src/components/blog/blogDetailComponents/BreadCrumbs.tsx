import React from 'react';
import { FaAngleRight, FaHome } from 'react-icons/fa';

const BreadCrumbs = ({ items }: any) => {
    return (
        <nav className="flex my-5 md:mt-2" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                {items.map((item: any, index: any) => (
                    <li key={index} className="inline-flex  text-indigo-700 items-center">
                        {index > 0 && (
                            <FaAngleRight />
                        )}
                        {index === items.length - 1 ? (
                            <span className="ms-1 text-md font-medium text-indigo-700 md:ms-2">
                                {item.label}
                            </span>
                        ) : (
                            <a
                                href={item.href || '#'}
                                className={`gap-2 inline-flex items-center text-md font-medium text-indigo-700 hover:text-hamzaPrimary ${index === 0 ? '' : 'ms-1 md:ms-2'
                                    }`}
                            >
                                {index === 0 && (
                                    <FaHome />
                                )}
                                {item.label}
                            </a>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default BreadCrumbs;