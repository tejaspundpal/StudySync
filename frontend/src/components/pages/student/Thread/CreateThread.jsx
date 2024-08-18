import React, { useState } from 'react';
import StudentNavbar from '../StudentNavbar';
import Footer from '../../../Footer';
import { useParams } from 'react-router-dom';
import useStudentDetails from '../../../../utils/UseStudentDetails';
import axios from 'axios';
import { toast } from 'react-toastify';

const CreateThread = () => {
    const { id } = useParams();
    const student = useStudentDetails(id);

    const [thread, setThread] = useState({
        title: '',
        content: '',
        createdBy: ''
    });

    const [loading, setLoading] = useState(false);

    const resetForm = () => {
        setThread({
            title: '',
            content: '',
            createdBy: ''
        });
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setThread({ ...thread, [name]: value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const createdBy = `${student?.firstname} ${student?.lastname}`;
            const formData = { ...thread, createdBy };
            const response = await axios.post('http://localhost:8182/api/threads/create-thread', formData);
            toast.success("Thread Added Successfully!");
            resetForm();
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <StudentNavbar id={id} />
            <div className="container mx-auto mt-10 shadow-md rounded-md mb-10 flex justify-center items-center">
                <div className="w-full max-w-3xl">
                    <h1 className="text-3xl font-semibold text-center mb-8 text-neutral-700">Add Thread</h1>
                    <form className="w-full" onSubmit={handleFormSubmit}>
                        <div className="mb-4">
                            <div className="w-full mb-3">
                                <label htmlFor="title" className="block text-gray-700">Thread Title</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={thread.title}
                                    onChange={handleChange}
                                    placeholder="Enter Title"
                                    className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
                                    required
                                />
                            </div>
                            <div className="w-full mb-3">
                                <label htmlFor="content" className="block text-gray-700">Thread Content</label>
                                <textarea
                                    id="content"
                                    name="content"
                                    value={thread.content}
                                    onChange={handleChange}
                                    placeholder="Enter Content"
                                    rows="3"
                                    className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
                                    required
                                ></textarea>
                            </div>
                        </div>
                        <div className="mb-4">
                            <button
                                type="submit"
                                className={`mb-5 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded focus:outline-none focus:bg-purple-600 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={loading}
                            >
                                {loading ? 'Adding...' : 'Add'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CreateThread;
