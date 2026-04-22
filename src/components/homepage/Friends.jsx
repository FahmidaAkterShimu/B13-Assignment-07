'use client'

import React from 'react';
import FriendsCard from '../ui/FriendsCard.jsx'
import useFriendsData from '@/hooks/useFriendsData';


const friendsDataPromise = fetch('/friends.json').then(res => res.json());

const Friends = () => {
    const { friends, loading } = useFriendsData();

    return (
        <div className='bg-[#f7fafc]'>
            <div className='max-w-277.5 mx-auto text-[#1F2937] px-4 pb-20'>
                <h2 className='text-2xl font-semibold mb-4'>Your Friends</h2>

                {
                    loading
                        ? <div className='flex justify-center items-center lg:min-h-135'>
                            <span className="loading loading-spinner loading-xl text-[#244D3F]"></span>
                        </div>
                        :
                        <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-6'>
                            {
                                friends.map((friend) => (
                                    <FriendsCard key={friend.id} friend={friend} />
                                ))
                            }
                        </div>
                }

            </div>
        </div>
    );
};

export default Friends;