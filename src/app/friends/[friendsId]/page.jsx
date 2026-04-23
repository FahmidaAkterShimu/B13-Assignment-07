import Image from 'next/image';
import React from 'react';
import { Phone, MessageSquare, Video, BellOff, Archive, Trash2 } from 'lucide-react';

// Status styles mapping
const statusStyles = {
    overdue: "bg-[#EF4444] text-white",
    on_track: "bg-[#244D3F] text-white",
    almost_due: "bg-[#EFAD44] text-white",
};

// Data fetching logic
const friendsPromise = async () => {
    const res = await fetch("http://localhost:3001/friends.json", { cache: 'no-store' });
    if (!res.ok) return [];
    return res.json();
};

const FriendsDetailPage = async ({ params }) => {
    const { friendsId } = await params;
    const friends = await friendsPromise();

    // Find friend by ID from JSON
    const friend = friends.find((f) => String(f.id) === friendsId);

    if (!friend) {
        return (
            <div className="min-h-screen flex items-center justify-center text-2xl font-bold text-gray-500">
                Friend not found
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f8fafc] p-4 md:p-12 font-sans text-[#1F2937]">
            <div className="max-w-277.5 mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">

                {/* Left sidebar */}
                <div className="md:col-span-4 flex flex-col gap-4">

                    {/* Profile card */}
                    <div className="bg-white rounded-lg p-6 border border-slate-100 shadow-sm flex flex-col items-center text-center space-y-3">
                        <div className="relative w-20 h-20">
                            <Image
                                src={friend.picture}
                                fill
                                alt={friend.name}
                                className="rounded-full object-cover"
                            />
                        </div>


                        <h2 className="text-xl font-semibold">{friend.name}</h2>

                        <div>
                            {/* Dynamic status badge */}
                            <span className={`text-xs font-medium capitalize tracking-wider px-2.5 py-1.5 rounded-full ${statusStyles[friend.status]}`}>
                                {friend.status}
                            </span>
                        </div>

                        <div className='space-x-2'>
                            {/* Dynamic tags */}
                            {friend.tags.map((tag, index) => (
                                <span key={index} className="text-xs font-medium uppercase tracking-wider px-2.5 py-1.5 rounded-full bg-[#CBFADB] text-[#244D3F]">
                                    {tag}
                                </span>
                            ))}
                        </div>


                        <p className="text-base font-medium text-[#64748B] italic">
                            {`"${friend.bio}"`}
                        </p>

                        <p className="text-sm text-[#64748B]">
                            Preferred: <span className="text-slate-500">{friend.email}</span>
                        </p>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col gap-3">
                        <button className="flex items-center justify-center gap-2 w-full bg-white border border-slate-200 rounded-sm py-4 text-base font-medium hover:bg-slate-50 transition-colors cursor-pointer">
                            <BellOff size={20} /> Snooze 2 Weeks
                        </button>
                        <button className="flex items-center justify-center gap-2 w-full bg-white border border-slate-200 rounded-sm py-4 text-base font-medium hover:bg-slate-50 transition-colors cursor-pointer">
                            <Archive size={20} /> Archive
                        </button>
                        <button className="flex items-center justify-center gap-2 w-full bg-white border border-slate-200 rounded-sm py-4 text-base font-medium text-[#EF4444] hover:bg-red-50 transition-colors cursor-pointer">
                            <Trash2 size={18} className='text-[#EF4444]' /> Delete
                        </button>
                    </div>
                </div>

                {/* Right Content */}
                <div className="md:col-span-8 flex flex-col gap-6">

                    {/* Top stats */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white rounded-lg py-8 px-4 border border-slate-100 shadow-sm text-center">
                            <h3 className="text-3xl font-semibold text-[#244D3F] mb-2">{friend.days_since_contact}</h3>
                            <p className="text-lg text-[#64748B] tracking-tight">Days Since Contact</p>
                        </div>

                        <div className="bg-white rounded-lg py-8 px-4 border border-slate-100 shadow-sm text-center">
                            <h3 className="text-3xl font-semibold text-[#244D3F] mb-2">{friend.goal}</h3>
                            <p className="text-lg text-[#64748B] tracking-tight">Goal (Days)</p>
                        </div>

                        <div className="bg-white rounded-lg py-8 px-4 border border-slate-100 shadow-sm text-center">
                            <h3 className="text-3xl font-semibold text-[#244D3F] mb-2">
                                {new Date(friend.next_due_date).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: '2-digit',
                                    year: 'numeric'
                                })}
                            </h3>
                            <p className="text-lg text-[#64748B] tracking-tight">Next Due</p>
                        </div>
                    </div>

                    {/* Relationship Goal */}
                    <div className="bg-white rounded-lg p-6 border border-slate-100 shadow-sm">
                        <div className='flex justify-between items-center'>
                            <h3 className="text-xl font-medium text-[#244D3F]">Relationship Goal</h3>
                            <button className="border border-slate-200 px-4.5 py-2 rounded-sm text-sm font-medium text-[#1F2937] hover:bg-slate-50 cursor-pointer">
                                Edit
                            </button>
                        </div>

                        <p className="text-[#64748B] text-lg mt-5">
                            Connect every <span className="font-bold text-[#1F2937]">{friend.goal} days</span>
                        </p>
                    </div>

                    {/* Quick Check-in */}
                    <div className="bg-white rounded-lg p-6 border border-slate-100 shadow-sm">
                        <h3 className="text-xl font-medium text-[#244D3F] mb-4">Quick Check-In</h3>
                        <div className="grid grid-cols-3 gap-4">
                            <button className="group flex flex-col items-center justify-center gap-2 border border-slate-100 bg-slate-50/50 rounded-lg p-4 transition-all hover:border-indigo-200 hover:bg-indigo-50/30 cursor-pointer">
                                <Phone size={32} className="group-hover:text-indigo-600" />
                                <span className="text-lg group-hover:text-indigo-700">Call</span>
                            </button>

                            <button className="group flex flex-col items-center justify-center gap-2 border border-slate-100 bg-slate-50/50 rounded-lg p-4 transition-all hover:border-indigo-200 hover:bg-indigo-50/30 cursor-pointer">
                                <MessageSquare size={32} className="group-hover:text-indigo-600" />
                                <span className="text-lg group-hover:text-indigo-700">Text</span>
                            </button>

                            <button className="group flex flex-col items-center justify-center gap-2 border border-slate-100 bg-slate-50/50 rounded-lg p-4 transition-all hover:border-indigo-200 hover:bg-indigo-50/30 cursor-pointer">
                                <Video size={32} className="group-hover:text-indigo-600" />
                                <span className="text-lg group-hover:text-indigo-700">Video</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FriendsDetailPage;