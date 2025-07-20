'use client';
import Image from 'next/image';
import React from 'react';
import RatingStar from './RatingStar';
import { useRouter } from 'next/navigation';
import { useBookmarks } from '@/context/BookmarkContext';
import { toast } from 'sonner';
export default function UserCard({user}){
    const [visible, setVisible] = React.useState(false);
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const divRef = React.useRef(null);

    const {addBookmark} = useBookmarks();

    const handleMouseMove = (e) => {
        const bounds = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
    };

    const router = useRouter();

    return (
        <div ref={divRef} onMouseMove={handleMouseMove} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}
            className="relative w-80 h-96 rounded-xl p-0.5 bg-white dark:bg-gray-800 backdrop-blur-md text-gray-800 dark:text-gray-200 overflow-hidden shadow-lg cursor-pointer transition-colors duration-200"
        >
            {visible && (
                <div className="pointer-events-none blur-xl bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 size-60 absolute z-0 transition-opacity duration-300"
                    style={{ top: position.y - 120, left: position.x - 120,}}
                />
            )}

            <div className="relative z-10 bg-white dark:bg-gray-800 p-6 h-full w-full rounded-[10px] flex flex-col items-center justify-center text-center transition-colors duration-200">
                <Image
                    src={user.image}
                    alt="Profile Avatar"
                    width={96}
                    height={96}
                    className="w-24 h-24 rounded-full shadow-md my-4"
                
                />
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-1">
                    {
                        user.firstName +" " + user.lastName
                    }
                </h2>
                <p className='text-gray-600 dark:text-gray-300 mb-2'>
                    {user.email}
                </p>
                <p className="text-sm text-indigo-500 dark:text-indigo-400 font-medium mb-4">
                    {
                        user.company.title
                    }
                </p>

                <RatingStar rating={user.performanceRating}/>

                <div className="mt-4 flex items-center gap-2">
                    <button className='bg-blue-500 text-white py-2 px-4 rounded-md hover:cursor-pointer' onClick={()=> router.push(`/employee/${user.id}`)}>
                        View Details
                    </button>
                    <button onClick={()=>{addBookmark(user); toast.success("User bookmarked successfully");}} className='bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:cursor-pointer'>
                        Bookmark
                    </button>
                </div>
            </div>
        </div>
    );
}