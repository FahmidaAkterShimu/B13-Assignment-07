"use client"

import { useState } from "react";
import { TextContext } from "./AllContext";

const TextProvider = ({ children }) => {
    const [textList, setTextList] = useState([]);

    return (
        <TextContext.Provider value={{ textList, setTextList, timelineHistory, addInteraction }}>
            {children}
        </TextContext.Provider>
    );
};

export default TextProvider;