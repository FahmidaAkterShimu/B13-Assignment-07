'use client';
import { AllProvider } from '@/context/AllContext';
import CallProvider from '@/context/call.context';
import TextProvider from '@/context/text.context';
import VideoProvider from '@/context/video.context';
import React from 'react';

const Providers = ({ children }) => {
    return <AllProvider>
        {children}
    </AllProvider>
};

export default Providers;