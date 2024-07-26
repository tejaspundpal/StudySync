import React from 'react';

export const ShimmerTable = () => {
  return (
    <div className="min-w-4xl bg-gray-200 shadow-lg rounded mt-10 p-4 animate-pulse">
    {[...Array(10)].map((_, index)=>(
        <div key={index}>
        <div className="border-b-2 border-gray-300 py-3 px-4 animate-pulse"></div>
        </div>
    ))}
  </div>
  );
};