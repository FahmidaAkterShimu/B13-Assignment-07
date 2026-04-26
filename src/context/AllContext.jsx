"use client"
import React, { createContext, useState } from "react";

export const CallContext = createContext();
export const TextContext = createContext();
export const VideoContext = createContext();

export const AllProvider = ({ children }) => {
    const [calledList, setCalledList] = useState([]);
    const [textList, setTextList] = useState([]);
    const [videoCallList, setVideoCallList] = useState([]);

    const [timelineHistory, setTimelineHistory] = useState([]);

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
            <TextContext.Provider value={{ textList, setTextList, addInteraction }}>
                <VideoContext.Provider value={{ videoCallList, setVideoCallList, addInteraction }}>
                    {children}
                </VideoContext.Provider>
            </TextContext.Provider>
        </CallContext.Provider>
    );
};