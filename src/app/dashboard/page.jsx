"use client";

import React, { useContext, useEffect, useState } from "react";
import { Legend, Pie, PieChart, ResponsiveContainer, Cell, Tooltip } from "recharts";
import { CallContext, TextContext, VideoContext } from "@/context/AllContext";

const FriendshipAnalytics = () => {
  const { calledList } = useContext(CallContext);
  const { textList } = useContext(TextContext);
  const { videoCallList } = useContext(VideoContext);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const data = [
    {
      name: "Text",
      value: textList?.length || 0,
      color: "#7E35E1"
    },
    {
      name: "Call",
      value: calledList?.length || 0,
      color: "#244D3F"
    },
    {
      name: "Video",
      value: videoCallList?.length || 0,
      color: "#37A163"
    },
  ];

  const hasData = data.some(item => item.value > 0);

  if (!isMounted) {
    return null; 
  }

  return (
    <div className="max-w-277.5 mx-auto py-20 px-4">
      <h2 className="text-5xl font-bold text-[#1F2937] mb-6 font-sans">Friendship Analytics</h2>

      <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
        <p className="mb-6 text-left text-xl font-medium text-[#244D3F]">By Interaction Type</p>

        <div className="flex justify-center items-center h-80 w-full">
          {hasData ? (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={85}
                  outerRadius={112}
                  paddingAngle={6}
                  cornerRadius={6}
                  dataKey="value"
                  animationBegin={0}
                  animationDuration={1000}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Legend
                  verticalAlign="bottom"
                  align="center"
                  iconType="circle"
                  iconSize={8}
                  wrapperStyle={{ paddingTop: "25px" }}
                  formatter={(value) => <span className="text-[#64748B] text-sm ml-1 mr-6">{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="text-2xl text-[#244D3F] font-medium italic opacity-60">
              No interaction data available yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FriendshipAnalytics;