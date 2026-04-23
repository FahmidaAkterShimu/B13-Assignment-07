import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo_xl from '@/assets/logo-xl.png';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-[#244D3F] text-white">

            <div className="max-w-6xl mx-auto px-4 py-12 text-center">

                {/* Brand */}
                <Link href={"/"} className="flex justify-center items-center mb-4">
                    <Image
                        src={logo_xl}
                        alt="KeenKeeper"
                        width={141}
                        height={31}
                        priority
                    />
                </Link>

                {/* Description */}
                <p className="text-base opacity-80 mx-auto mb-6">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                {/* Social Icons */}
                <h2 className='text-xl font-medium mb-4'>Social Links</h2>
                <div className="flex justify-center gap-3">
                    <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-[#276749] hover:bg-gray-200 transition">
                        <FaInstagram size={14} />
                    </a>
                    <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-[#276749] hover:bg-gray-200 transition">
                        <FaFacebookF size={14} />
                    </a>
                    <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-[#276749] hover:bg-gray-200 transition">
                        <FaXTwitter size={14} />
                    </a>
                    
                </div>

                {/* Divider */}
                <div className="border-t border-[#1a8861cb] mt-10 pt-7.5 text-base text-[#FAFAFA] opacity-50 flex flex-col md:flex-row justify-between items-center gap-2">

                    <p>© 2025 KeenKeeper. All rights reserved.</p>

                    <div className="flex gap-4">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Terms of Service</a>
                        <a href="#" className="hover:underline">Contact</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;