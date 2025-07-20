"use client";

export default function RatingStar({ rating }) {
    return (
        <div className="flex items-center justify-center space-x-1 mt-2">
            {
                [...Array(5)].map((_,i)=>(
                    <span key={i}
                        className={` ${i < rating ? 'text-amber-300' : 'text-gray-300'}`}
                    >
                        ★
                    </span>
                ))
            }
        </div>
    )
}
