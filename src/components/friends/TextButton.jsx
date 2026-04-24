"use client"

import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { TextContext } from '@/context/AllContext';
import { MessageSquare } from 'lucide-react';

const TextButton = ({ friend }) => {

    const { textList, setTextList } = useContext(TextContext);

    const handleText = () => {
        setTextList([...textList, friend]);
        toast.success(`Texting ${friend.name} 📞`);
    };

    return (
        <button onClick={handleText}
            className="group flex flex-col items-center justify-center gap-2 border border-slate-100 bg-slate-50/50 rounded-lg p-4 transition-all hover:border-indigo-200 hover:bg-indigo-50/30 cursor-pointer">
            <MessageSquare size={32} className="group-hover:text-indigo-600" />
            <span className="text-lg group-hover:text-indigo-700">Text</span>
        </button>
    );
};

export default TextButton;