import React from 'react'
import RatingStars from './RatingStar'

function UserInfo({user}) {
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6 flex flex-col items-center">
            <div className="w-32 h-32 mb-4">
                <img
                    src={user.image}
                    alt={`${user.firstName} ${user.lastName}`}
                    className="w-full h-full object-cover rounded-full border-4 border-blue-200 shadow"
                />
            </div>
            <div className="w-full text-center">
                <h1 className="text-2xl font-bold mb-1 text-gray-800">{user.firstName} {user.lastName}</h1>
                <p className="mb-2 text-gray-500 italic">{user.bio}</p>
                <p className="mb-1 text-sm text-gray-600">Department: <span className="font-medium">{user.company.title}</span></p>
                <p className="mb-1 text-sm text-gray-600">Email: <span className="font-medium">{user.email}</span></p>
                <div className="flex justify-center my-2">
                    <RatingStars rating={user.performanceRating} />
                </div>
                <div className="mt-4 bg-gray-50 rounded-lg p-4 shadow-inner">
                    <h2 className="text-lg font-semibold mb-2 text-blue-700">Contact Information</h2>
                    <p className="text-sm text-gray-700">Phone: <span className="font-medium">{user.phone}</span></p>
                    <p className="text-sm text-gray-700">Address: <span className="font-medium">{user.address.address}, {user.address.city}, {user.address.state}</span></p>
                    <p className="text-sm text-gray-700">Zip Code: <span className="font-medium">{user.address.postalCode}</span></p>
                    <p className="text-sm text-gray-700">Country: <span className="font-medium">{user.address.country}</span></p>
                    <p className="text-sm text-gray-700">University: <span className="font-medium">{user.university}</span></p>
                </div>
            </div>
        </div>
    )
}

export default UserInfo