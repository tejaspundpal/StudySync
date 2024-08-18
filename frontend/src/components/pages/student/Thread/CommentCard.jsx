import React from 'react';

const CommentCard = ({ comment }) => {
  return (
    <div className="border rounded-lg shadow p-4 mb-2">
      <p>{comment.content}</p>
      <div className="text-right text-sm text-gray-600">
        {comment.createdBy}
      </div>
    </div>
  );
};

export default CommentCard;
