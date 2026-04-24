"use client"

import { useState } from "react";
import { CallContext } from "./AllContext";

const CallProvider = ({ children }) => {
    const [calledList, setCalledList] = useState([]);

    return (
        <CallContext.Provider value={{ calledList, setCalledList }}>
            {children}
        </CallContext.Provider>
    );
};

export default CallProvider;