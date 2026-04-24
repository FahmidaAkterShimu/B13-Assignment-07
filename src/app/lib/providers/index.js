'use client';
import CallProvider from '@/context/call.context';
import TextProvider from '@/context/text.context';
import VideoProvider from '@/context/video.context';
import React from 'react';

const Providers = ({ children }) => {
    return <CallProvider>
        <TextProvider>
            <VideoProvider>
                {children}
            </VideoProvider>
        </TextProvider>
    </CallProvider>

};

export default Providers;