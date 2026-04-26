"use client"

import React, { useContext } from 'react';
import { CallContext } from '@/context/AllContext';
import { Phone, MessageSquare, Video, Users } from 'lucide-react';

const iconMap = {
  Call: <Phone className="text-[#244D3F]" />,
  Text: <MessageSquare className="text-[#244D3F]" />,
  Video: <Video className="text-[#244D3F]" />,
  Meetup: <Users />,
};

const Timeline = () => {
  const { timelineHistory } = useContext(CallContext);

  return (
    <div className='bg-[#F8FAFC] py-20'>
      <div className="max-w-277.5 mx-auto min-h-screen px-4 space-y-4">
        <h1 className="text-left text-5xl font-bold text-[#1F2937] mb-6">Timeline</h1>

        {/* History */}
        {!timelineHistory || timelineHistory.length === 0 ? (
          <p className="text-2xl font-bold text-center text-[#244D3F] py-10">No interactions yet. Start connecting!</p>
        ) : (
          timelineHistory.map((item) => (
            <div key={item.id} className="flex items-center p-4 bg-white rounded-lg  border border-[#E9E9E9]">

              <div className="w-12 h-12 flex items-center justify-center bg-[#d4e4df] rounded-full">
                {iconMap[item.type] || <Users />}
              </div>

              <div className="ml-4">
                <p className="text-slate-900">
                  <span className="text-xl font-medium text-[#244D3F]">{item.type}</span>
                  <span className="text-lg text-[#64748B] ml-2">with {item.with}</span>
                </p>
                <p className="text-base font-medium text-[#64748B]">{item.date}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Timeline;