"use client"

import { useState } from "react";
import { VideoContext } from "./AllContext";

const VideoProvider = ({ children }) => {
    const [videoCallList, setVideoCallList] = useState([]);

    return (
        <VideoContext.Provider value={{ videoCallList, setVideoCallList, timelineHistory, addInteraction }}>
            {children}
        </VideoContext.Provider>
    );
};

export default VideoProvider;