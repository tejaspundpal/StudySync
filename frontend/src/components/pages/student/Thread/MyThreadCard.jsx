import React from 'react';

const MyThreadCard = ({ thread, onDelete }) => {

    const handleDelete = async (e) => {
        e.preventDefault();
        if (window.confirm("Are you sure you want to delete this thread?")) {
            try {
                await onDelete(thread.id);  
            } catch (error) {
                console.error("Failed to delete the thread:", error);
            }
        }
    }

    return (
        <div
            className="border rounded-lg shadow-lg p-4 mb-4 hover:bg-gray-100 transition"
        >
            <div className='flex justify-between'>
                <h2 className="text-xl font-bold mb-2 text-gray-700">{thread.title}</h2>
                <button className='rounded-md px-2 border-2 border-red-500 cursor-pointer text-red-500 hover:bg-red-500 hover:text-white' onClick={handleDelete}>
                    Delete
                </button>
            </div>
            <p className='text-ellipsis overflow-hidden whitespace-nowrap'>{thread.content}</p>
            <div className="text-right text-sm text-gray-600">
                {thread.createdBy}
            </div>
        </div>
    );
};

export default MyThreadCard;
