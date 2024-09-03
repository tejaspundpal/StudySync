import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MyThreadCard from './MyThreadCard';
import StudentNavbar from '../StudentNavbar';
import Footer from '../../../Footer';
import { useParams } from 'react-router-dom';
import { FaComments } from "react-icons/fa";
import useStudentDetails from '../../../../utils/UseStudentDetails';
import { toast } from 'react-toastify';


const MyThreads = () => {
    const { id } = useParams();
    const student = useStudentDetails(id);
    const [threads, setThreads] = useState([]);

    useEffect(() => {
        const fetchThreads = async () => {
            try {
                const response = await axios.get('http://localhost:8182/api/threads/all-threads');
                setThreads(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchThreads();
    }, []);

    const myThreads = threads && threads.filter(thread => thread.createdBy === `${student?.firstname} ${student?.lastname}`);
    // console.log(myThreads);
    
    const handleDeleteThread = async (threadId) => {
        try {
            await axios.delete(`http://localhost:8182/api/threads/delete/${threadId}`);
            setThreads(prevThreads => prevThreads.filter(thread => thread.id !== threadId));
            toast.success("Thread Deleted Successfully !");
        } catch (error) {
            console.error("Failed to delete the thread:", error);
        }
    };

    return (
        <>
            <StudentNavbar id={id} />
            <div className="container mx-auto p-4 min-h-screen">
                <div className='flex'>
                    <FaComments className='text-gray-600 size-6 mt-4' />
                    <p className='font-medium text-2xl mt-3 ml-1 text-gray-600'>
                        My Threads
                    </p>
                </div>
                <hr className="my-4" />
                {myThreads && myThreads.length === 0 ? (
                    <p className='font-medium text-gray-700'>No threads available! Create a thread first...</p>
                ) : (
                    myThreads.map(thread => (
                        <MyThreadCard key={thread.id} thread={thread} onDelete={handleDeleteThread} />
                    ))
                )}
            </div>
            <Footer />
        </>
    );
}

export default MyThreads;
