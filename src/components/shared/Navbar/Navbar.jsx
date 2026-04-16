import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png';
import homeImg from '@/assets/home.png';
import clockImg from '@/assets/clock.png';
import statsImg from '@/assets/stats.png';
import MyLink from './MyLink';

const Navbar = () => {
    const navItems = [
        {
            path: "/",
            text: "Home",
            img: homeImg
        },
        {
            path: "/timeline",
            text: "Timeline",
            img: clockImg
        },
        {
            path: "/stats",
            text: "Stats",
            img: statsImg
        },
    ];

    // রেন্ডার করার সুবিধার্থে মেনু লিস্টটি আলাদা ভেরিয়েবলে রাখা হয়েছে
    const menuLinks = navItems.map((item, i) => (
        <MyLink key={i} href={item.path}>
            <div className='flex items-center gap-1'>
                <Image src={item.img} alt={item.text} width={20} height={20} />
                <span>{item.text}</span>
            </div>
        </MyLink>
    ));

    return (
        <div className='bg-white shadow-sm sticky top-0 z-50'>
            <div className="navbar max-w-360 mx-auto px-4 md:px-8">

                <div className="navbar-start">
                    {/* For Small Device */}
                    <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost p-0 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="flex flex-col hover dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52 border border-base-200">
                            {menuLinks}
                        </ul>
                    </div>

                    <Link href={"/"} className="flex justify-center items-center">
                        <Image
                            src={logo}
                            alt="KeenKeeper"
                            width={141}
                            height={31}
                            priority
                        />
                    </Link>
                </div>

                {/* For Large Device */}
                <div className="navbar-end hidden lg:flex">
                    <ul className="flex justify-center items-center text-base font-medium text-[#64748B]">
                        {menuLinks}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;