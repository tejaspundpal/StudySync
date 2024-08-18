import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ThreadCard from './ThreadCard';
import ThreadDetail from './ThreadDetail';
import StudentNavbar from '../StudentNavbar'
import Footer from '../../../Footer'
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FaPlus } from "react-icons/fa6";
import { FaComments } from "react-icons/fa";

const ThreadList = () => {
    const { id } = useParams();
    const [threads, setThreads] = useState([]);
    const [selectedThread, setSelectedThread] = useState(null);

    useEffect(() => {
        const fetchThreads = async () => {
            try {
                const response = await axios.get('http://localhost:8182/api/threads/all-threads');
                setThreads(response.data);
                console.log(response.data)
            } catch (error) {
                console.error(error);
            }
        }
        fetchThreads();
    }, []);

    const handleThreadClick = (threadId) => {
        const thread = threads.find(t => t.id === threadId);
        setSelectedThread(thread);
    };
    return (
        <>
            <StudentNavbar id={id} />
            <div className="container mx-auto p-4 min-h-screen">
                <div className='flex justify-between mt-3'>
                    <NavLink className="flex" to={`/student/discussion/create-thread/${id}`}>
                        <FaPlus className='mt-1 mr-1 text-purple-700'/>
                        <p className="text-purple-700 font-medium underline hover:text-purple-500">
                            Create Thread
                        </p>
                    </NavLink>
                    <NavLink className="flex" to={`/student/discussion/my-threads/${id}`}>
                        <FaComments className='mt-1 mr-1 text-purple-700'/>
                        <p className="text-purple-700 font-medium underline hover:text-purple-500">
                            My Threads
                        </p>
                    </NavLink>
                </div>
                <hr className="my-4" />
                {!selectedThread ? (
                    threads.map(thread => (
                        <ThreadCard key={thread.id} thread={thread} onClick={handleThreadClick} />
                    ))
                ) : (
                    <ThreadDetail thread={selectedThread} />
                )}
            </div>
            <Footer />
        </>
    )
}

export default ThreadList