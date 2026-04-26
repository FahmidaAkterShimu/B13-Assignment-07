"use client"
import React, { createContext, useState, useEffect } from "react";

export const CallContext = createContext();
export const TextContext = createContext();
export const VideoContext = createContext();

export const AllProvider = ({ children }) => {
    const [calledList, setCalledList] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('calledList');
            return saved ? JSON.parse(saved) : [];
        }
        return [];
    });

    const [textList, setTextList] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('textList');
            return saved ? JSON.parse(saved) : [];
        }
        return [];
    });

    const [videoCallList, setVideoCallList] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('videoCallList');
            return saved ? JSON.parse(saved) : [];
        }
        return [];
    });

    const [timelineHistory, setTimelineHistory] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('keenKeeperHistory');
            return saved ? JSON.parse(saved) : [];
        }
        return [];
    });

    useEffect(() => {
        localStorage.setItem('keenKeeperHistory', JSON.stringify(timelineHistory));
    }, [timelineHistory]);

    useEffect(() => {
        localStorage.setItem('calledList', JSON.stringify(calledList));
    }, [calledList]);

    useEffect(() => {
        localStorage.setItem('textList', JSON.stringify(textList));
    }, [textList]);

    useEffect(() => {
        localStorage.setItem('videoCallList', JSON.stringify(videoCallList));
    }, [videoCallList]);


    const addInteraction = (friend, type) => {
        const newEntry = {
            id: Date.now(),
            type: type,
            with: friend.name,
            date: new Date().toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            }),
        };
        setTimelineHistory((prev) => [newEntry, ...prev]);
    };

    return (
        <CallContext.Provider value={{ calledList, setCalledList, timelineHistory, addInteraction }}>
            <TextContext.Provider value={{ textList, setTextList, timelineHistory, addInteraction }}>
                <VideoContext.Provider value={{ videoCallList, setVideoCallList, timelineHistory, addInteraction }}>
                    {children}
                </VideoContext.Provider>
            </TextContext.Provider>
        </CallContext.Provider>
    );
};