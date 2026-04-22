'use client'

import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f7fafc] px-4">

            <div className="text-center max-w-xl">

                {/* 404 */}
                <h1 className="text-7xl md:text-8xl font-bold text-[#244D3F]">
                    404
                </h1>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mt-4">
                    Oops! Page not found
                </h2>

                {/* Description */}
                <p className="text-gray-500 mt-3">
                    The page you’re looking for doesn’t exist or has been moved.
                </p>

                {/* Button */}
                <Link href="/">
                    <button className="mt-6 px-6 py-3 rounded-lg bg-[#244D3F] text-white font-medium hover:bg-[#276749] transition duration-300 shadow-sm cursor-pointer">
                        Go Back Home
                    </button>
                </Link>

                {/* Card style suggestion */}
                <div className="mt-10 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <p className="text-gray-600 text-sm">
                        Try going back to the homepage or check your URL.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default NotFoundPage;