import React from 'react';
import { FaPlus } from "react-icons/fa6";

const Banner = () => {
    return (
        <div className='text-center pt-10 md:pt-20 bg-[#f7fafc] px-4 pb-6'>
            <h2 className='text-4xl lg:text-5xl font-bold text-[#1F2937] mb-4'>
                Friends to keep close in your life
            </h2>
            <p className='text-base text-[#64748B] mb-8'>
                Your personal shelf of meaningful connections. Browse, tend, and nurture the
                <br />
                relationships that matter most.
            </p>

            <button className='btn rounded-sm hover:transform hover:scale-105 bg-[#244D3F] text-white border-none text-base font-semibold py-6 mb-10'>
                <FaPlus /> Add a Friend
            </button>

            <div className='max-w-277.5 mx-auto grid md:grid-cols-4 gap-6'>
                <div className='text-center bg-white rounded-lg border border-gray-100 shadow p-8'>
                    <h3 className='text-[32px] font-semibold text-[#244D3F] mb-2'>10</h3>
                    <p className='text-lg text-[#64748B]'>Total Friends</p>
                </div>
                <div className='text-center bg-white rounded-lg border border-gray-100 shadow p-8'>
                    <h3 className='text-[32px] font-semibold text-[#244D3F] mb-2'>3</h3>
                    <p className='text-lg text-[#64748B]'>On Track</p>
                </div>
                <div className='text-center bg-white rounded-lg border border-gray-100 shadow p-8'>
                    <h3 className='text-[32px] font-semibold text-[#244D3F] mb-2'>6</h3>
                    <p className='text-lg text-[#64748B]'>Need Attention</p>
                </div>
                <div className='text-center bg-white rounded-lg border border-gray-100 shadow p-8'>
                    <h3 className='text-[32px] font-semibold text-[#244D3F] mb-2'>12</h3>
                    <p className='text-lg text-[#64748B]'>Interactions This Month</p>
                </div>

            </div>
            <div className='divider max-w-277.5 mx-auto mt-8'></div>
        </div>
    );
};

export default Banner;