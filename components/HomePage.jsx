import React from 'react'
import UserCard from './UserCard'
import SearchFilter from './SearchFilter'

function HomePage({ users, page, onNext, onPrev }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen transition-colors duration-200">
        <div className='w-full max-w-4xl px-4 py-8'>
            <h1 className="text-3xl font-bold mb-6 text-white">Employee Directory</h1>
            <SearchFilter/>
        </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => <UserCard key={user.id} user={user} />)}
      </div>

      <div className='mx-auto space-x-2.5 my-2'>
        <button className='bg-blue-500 text-white py-2 px-4 rounded-md' onClick={onPrev}
            disabled = {page <= 1}
        >
            Prev
        </button>
        <button className='bg-blue-500 text-white py-2 px-4 rounded-md' onClick={onNext}>
            Next
        </button>
        
      </div>
    </div>
  )
}

export default HomePage