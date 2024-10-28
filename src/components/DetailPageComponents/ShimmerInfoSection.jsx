import React from 'react'

const ShimmerInfoSection = () => {
    return (
      <div>
        <h1 className="font-bold text-2xl bg-gray-300 rounded-md w-1/2 h-6 animate-pulse mb-5"></h1>
        <div className="w-full rounded-2xl border-[1px] border-black shadow-xl my-5 p-5">
          <p className="font-bold text-lg bg-gray-300 rounded-md w-3/4 h-5 animate-pulse mb-2"></p>
          <p className="text-sm bg-gray-300 rounded-md w-1/2 h-4 animate-pulse my-2"></p>
          <p className="bg-gray-300 rounded-md w-1/3 h-4 animate-pulse mb-2"></p>
          <p className="bg-gray-300 rounded-md w-1/4 h-4 animate-pulse"></p>
        </div>
      </div>
    );
  };
  
  export default ShimmerInfoSection;
