"use client"

import React, { useContext, useState } from 'react';
import { CallContext } from '@/context/AllContext';
import { Phone, MessageSquare, Video, Users, ChevronDown } from 'lucide-react';

const iconMap = {
  Call: <Phone className="text-[#244D3F]" />,
  Text: <MessageSquare className="text-[#244D3F]" />,
  Video: <Video className="text-[#244D3F]" />,
  Meetup: <Users className="text-[#244D3F]" />,
};

const Timeline = () => {
  const { timelineHistory } = useContext(CallContext);

  const [filterType, setFilterType] = useState('All');

  const filteredTimeline = (timelineHistory || []).filter((item) => {
    if (filterType === 'All') return true;
    return item.type === filterType;
  });

  return (
    <div className='bg-[#F8FAFC] py-20'>
      <div className="max-w-277.5 mx-auto min-h-screen px-4 space-y-4">
        <h1 className="text-left text-5xl font-bold text-[#1F2937] mb-6">Timeline</h1>

        <div className="relative inline-block mb-6">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="bg-[#F8FAFC] border border-[#E9E9E9] rounded-lg px-6 py-4 pr-20 text-[#64748B] text-lg font-medium focus:outline-none focus:ring-2 focus:ring-[#244D3F]/50 cursor-pointer shadow-sm"
          >
            <option value="All" className='text-lg text-[#64748B]'>Filter Timeline</option>
            <option value="Call">Calls</option>
            <option value="Text">Texts</option>
            <option value="Video">Videos</option>
          </select>
        </div>

        {/* History List */}
        {filteredTimeline.length === 0 ? (
          <p className="text-2xl font-bold text-center text-[#244D3F] py-10 bg-white rounded-lg border border-[#E9E9E9]">
            {filterType === 'All' ? "No interactions yet. Start connecting!" : `No ${filterType} history found.`}
          </p>
        ) : (
          filteredTimeline.map((item) => (
            <div key={item.id} className="flex items-center p-4 bg-white rounded-lg border border-[#E9E9E9] hover:shadow-sm transition-shadow">

              <div className="w-12 h-12 flex items-center justify-center bg-[#d4e4df] rounded-full">
                {iconMap[item.type] || <Users className="text-[#244D3F]" />}
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