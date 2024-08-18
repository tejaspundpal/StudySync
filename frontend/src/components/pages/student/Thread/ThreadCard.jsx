import React from 'react';

const ThreadCard = ({ thread, onClick }) => {
  return (
    <div
      onClick={() => onClick(thread.id)}
      className="border rounded-lg shadow-lg p-4 mb-4 cursor-pointer hover:bg-gray-100 transition"
    >
      <h2 className="text-xl font-bold mb-2 text-gray-700">{thread.title}</h2>
      <p className='text-ellipsis overflow-hidden whitespace-nowrap'>{thread.content}</p>
      <div className="text-right text-sm text-gray-600">
         {thread.createdBy}
      </div>
    </div>
  );
};

export default ThreadCard;
