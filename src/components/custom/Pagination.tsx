"use client";
import React from "react";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
    const pageNumbers = [];
    const maxVisible = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let endPage = startPage + maxVisible - 1;

    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - maxVisible + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="flex items-center justify-center gap-2 flex-wrap mt-5">
            {/* First Button « */}
            <button onClick={() => onPageChange(1)} disabled={currentPage === 1}
                className={`flex items-center justify-center text-[30px] -mt-[6px] mr-2 ${currentPage === 1
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-hamzaPrimary"
                    }`}
            >
                «
            </button>

            {/* Page Numbers */}
            {pageNumbers.map((page) => (
                <button key={page} onClick={() => onPageChange(page)}
                    className={`w-[35px] h-[35px] flex items-center justify-center border ${currentPage === page
                        ? "bg-hamzaPrimary text-white"
                        : "bg-white text-hamzaPrimary border-hamzaPrimary"
                        }`}
                >
                    {page}
                </button>
            ))}

            {/* Last Button » */}
            <button onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages}
                className={`flex items-center justify-center text-[30px] -mt-[6px] ml-2 ${currentPage === totalPages
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-hamzaPrimary"
                    }`}
            >
                »
            </button>
        </div>
    );
};

export default Pagination;
