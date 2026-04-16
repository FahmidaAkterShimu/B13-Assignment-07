"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyLink = ({ href, children }) => {
    const pathname = usePathname(); // used to get the pathName of the current Link
    // console.log(pathname, 'pathname');
    // console.log(href, "href");

    return (
        <Link href={href} className={`py-2 px-2 md:py-3 md:px-4 font-semibold ${pathname === href ? "rounded-sm bg-[#244D3F] text-base font-semibold text-white" : ""}`}>
            <li>
                {children}
            </li>
        </Link>
    );
};

export default MyLink;