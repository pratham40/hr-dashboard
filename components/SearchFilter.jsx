import React from "react";

function SearchFilter() {
  return (
    <div>
      <div className="flex items-center border-b gap-2 border-gray-500/30 h-[46px] overflow-hidden max-w-md w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="#6B7280"
        >
          <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" />
        </svg>
        <input
          type="text"
          placeholder="Find employees by name"
          className="w-full h-full outline-none placeholder-gray-500 text-gray-500 bg-transparent text-sm"
        />
        <button
          type="submit"
          className="bg-indigo-500 w-32 h-9 rounded-full text-sm text-white"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchFilter;
