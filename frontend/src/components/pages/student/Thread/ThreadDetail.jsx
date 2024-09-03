import React, { useState } from 'react';
import axios from 'axios';
import CommentCard from './CommentCard';
import { useParams } from 'react-router-dom';
import useStudentDetails from '../../../../utils/UseStudentDetails';
import { toast } from 'react-toastify';

const ThreadDetail = ({ thread }) => {
  const { id } = useParams();
  const student = useStudentDetails(id);

  const [commentContent, setCommentContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState(thread.comments); 

  const handleAddComment = async (e) => {
    e.preventDefault();
    // console.log("okayy");
    setLoading(true);
    try {
      const newComment = {
        content: commentContent,
        createdBy: `${student?.firstname} ${student?.lastname}` 
      };
      const response = await axios.post(`http://localhost:8182/api/comments/thread/${thread.id}`, newComment);
      toast.success("Comment Added Successfully !");
      setComments([...comments, response.data]);
      setCommentContent('');
    } catch (error) {
      console.error("Failed to add comment:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteComment = async(commentId) => {
    try {
      await axios.delete(`http://localhost:8182/api/comments/delete/${commentId}`);
      setComments(prevComments => prevComments.filter(comment => comment.id !== commentId));
      toast.success("Comment Deleted Successfully !");
    } catch (error) {
      console.error("Failed to delete the thread:", error);
    }
  }

  return (
    <div className="border rounded-lg shadow-lg p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-700">{thread.title}</h1>
      <p className="mb-6">{thread.content}</p>
      <div className="text-right text-sm text-gray-600 mb-4">
        Created by: {thread.createdBy}
      </div>

      <h3 className="text-xl font-semibold mb-3">Comments:</h3>
      {comments.map(comment => (
        <CommentCard key={comment.id} comment={comment} student={student} onDelete={handleDeleteComment}/>
      ))}

      <form onSubmit={handleAddComment} className="mt-6">
        <textarea
          className="w-full border rounded-lg p-2 mb-2"
          placeholder="Add a comment..."
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-purple-500 text-white rounded-lg px-4 py-2"
          disabled={loading}
        >
          {loading ? 'Adding...' : 'Add Comment'}
        </button>
      </form>
    </div>
  );
};

export default ThreadDetail;
