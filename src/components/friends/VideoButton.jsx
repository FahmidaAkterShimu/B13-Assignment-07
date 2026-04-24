"use client"

import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { VideoContext } from '@/context/AllContext';
import { Video } from 'lucide-react';

const VideoButton = ({ friend }) => {

    const { videoCallList, setVideoCallList } = useContext(VideoContext);

    const handleVideoCall = () => {
        setVideoCallList([...videoCallList, friend]);
        toast.success(`Video with ${friend.name} 🎥`);
    };

    return (
        <button onClick={handleVideoCall}
            className="group flex flex-col items-center justify-center gap-2 border border-slate-100 bg-slate-50/50 rounded-lg p-4 transition-all hover:border-indigo-200 hover:bg-indigo-50/30 cursor-pointer">
            <Video size={32} className="group-hover:text-indigo-600" />
            <span className="text-lg group-hover:text-indigo-700">Video</span>
        </button>
    );
};

export default VideoButton;