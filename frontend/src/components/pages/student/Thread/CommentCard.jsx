import axios from 'axios';
import React from 'react';

const CommentCard = ({ comment, student, onDelete }) => {
  const isNameSame = () => {
    if (`${student?.firstname} ${student?.lastname}` === comment.createdBy) {
      return true;
    } else {
      return false;
    }
  }
  const handleDelete = async(e) => {
    // console.log("hi");
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete this thread?")) {
      try {
          await onDelete(comment.id);  
      } catch (error) {
          console.error("Failed to delete the thread:", error);
      }
   }
  }

  return (
    <div className="border rounded-lg shadow p-4 mb-2">
      <div className='flex justify-between mb-3'>
        <p>{comment.content}</p>
        {isNameSame() ? (<button className='rounded-md px-2 border-2 border-red-500 cursor-pointer text-red-500 hover:bg-red-500 hover:text-white' onClick={handleDelete}>
          Delete
        </button>) : (<span></span>)
        }
      </div>
      <div className="text-right text-sm text-gray-600">
        {comment.createdBy}
      </div>
    </div>
  );
};

export default CommentCard;
