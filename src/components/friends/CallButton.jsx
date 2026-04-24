"use client"

import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { CallContext } from '@/context/AllContext';
import { Phone } from 'lucide-react';

const CallButton = ({ friend }) => {

    const { calledList, setCalledList } = useContext(CallContext);

    const handleCallNow = () => {
        setCalledList([...calledList, friend]);
        toast.success(`Call with ${friend.name} 📞`);
    };

    return (
        <button onClick={handleCallNow}
            className="group flex flex-col items-center justify-center gap-2 border border-slate-100 bg-slate-50/50 rounded-lg p-4 transition-all hover:border-indigo-200 hover:bg-indigo-50/30 cursor-pointer">
            <Phone size={32} className="group-hover:text-indigo-600" />
            <span className="text-lg group-hover:text-indigo-700">Call</span>
        </button>
    );
};

export default CallButton;