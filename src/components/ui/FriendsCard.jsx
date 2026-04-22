import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import { FaDownload, FaStar } from 'react-icons/fa6';

const friendsCard = ({ friend }) => {
    const { name, picture, days_since_contact, status, tags } = friend;

    // status color
    const statusStyles = {
        overdue: "bg-[#EF4444] text-white",
        on_track: "bg-[#244D3F] text-white",
        almost_due: "bg-[#EFAD44] text-white",
    };
    return (
        <Link href={`/friends/${friend.id}`} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
            <div className="flex justify-center mb-3">
                <Image
                    src={picture}
                    alt={name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover"
                />
            </div>

            <div className='space-y-2'>
                <h2 className="text-xl font-semibold">{name}</h2>

                <p className="text-[#64748B] text-xs">{days_since_contact}d ago</p>

                <div className="flex justify-center gap-2 mt-2 flex-wrap">
                    {tags.map((tag, i) => (
                        <span
                            key={i}
                            className="bg-[#CBFADB] text-[#244D3F] text-xs font-medium px-3 py-1.5 rounded-full uppercase"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div>
                    <span
                        className={`text-xs font-medium px-3 py-1.5 rounded-full capitalize ${statusStyles[status]
                            }`}
                    >
                        {status.replace("_", " ")}
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default friendsCard;