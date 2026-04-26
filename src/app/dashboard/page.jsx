"use client";
import React, { useContext } from "react";
import { Legend, Pie, PieChart, ResponsiveContainer, Cell, Tooltip } from "recharts";

// context import
import { CallContext, TextContext, VideoContext } from "@/context/AllContext";

const FriendshipAnalytics = () => {
  // Context theke data access
  const { calledList } = useContext(CallContext);
  const { textList } = useContext(TextContext);
  const { videoCallList } = useContext(VideoContext);

  // Serial: Text (1st), Call (2nd), Video (3rd)
  const data = [
    {
      name: "Text",
      value: textList?.length || 0,
      color: "#7E35E1" // Purple
    },
    {
      name: "Call",
      value: calledList?.length || 0,
      color: "#244D3F" // Dark Green
    },
    {
      name: "Video",
      value: videoCallList?.length || 0,
      color: "#37A163" // Green
    },
  ];

  const hasData = data.some(item => item.value > 0);

  return (
    <div className="max-w-277.5 min-h-screen mx-auto my-20 px-4">
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
            <div className="text-2xl text-[#244D3F] font-medium italic">
              No interaction data available yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FriendshipAnalytics;