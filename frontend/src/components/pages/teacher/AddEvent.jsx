import React, { useState } from 'react';
import axios from 'axios';
import TeacherNavbar from './TeacherNavbar'
import Footer from '../../Footer'
import { stringify } from 'flatted';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const AddEvent = () => {
    const { id } = useParams();

    const [event, setEvent] = useState({
        title: '',
        description: '',
        date: '',
        time: '',
        location: '',
        year: ''
    });

    const resetForm = () => {
        setEvent({
            title: '',
            description: '',
            date: '',
            time: '',
            location: '',
            year: ''
        });
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // console.log(name,value);
        setEvent({ ...event, [name]: value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = { ...event };
            const response = await axios.post('http://localhost:8182/api/event/create-event', formData);
            toast.success("Event Added Successfully !")
            // console.log("FormData : ", response.data);
            resetForm();
        } catch (error) {
            console.error(error);
            toast.error('Something Went Wrong')
        }
    }
    return (
        <>
            <TeacherNavbar id={id} />
            <div>
                <div className="container mx-auto mt-10 shadow-md rounded-md mb-10">
                    <h1 className="text-3xl font-semibold text-center mb-8 text-neutral-700">Add Event</h1>
                    <form className="max-w-4xl mx-auto" onSubmit={handleFormSubmit}>
                        <div className="mb-4 flex flex-wrap">
                            <div className="w-full md:w-1/2 md:pl-2 mb-3">
                                <label htmlFor="title" className="block text-gray-700">Event Title</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={event.title}
                                    onChange={handleChange}
                                    placeholder='Enter Title'
                                    className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
                                    required
                                />
                            </div>
                            <div className="w-full md:w-1/2 md:pl-2 mb-3">
                                <label htmlFor="date" className="block text-gray-700">Date</label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={event.date}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
                                    required
                                />
                            </div>
                            <div className="w-full md:w-1/2 md:pl-2 mb-3">
                                <label htmlFor="time" className="block text-gray-700">Time</label>
                                <input
                                    type="time"
                                    id="time"
                                    name="time"
                                    value={event.time}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
                                    required
                                />
                            </div>
                            <div className="w-full md:w-1/2 md:pl-2 mb-3">
                                <label htmlFor="location" className="block text-gray-700">Location (optional)</label>
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    value={event.location}
                                    onChange={handleChange}
                                    placeholder='Enter Location'
                                    className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
                                />
                            </div>
                            <div className="w-full md:w-1/2 md:pl-2 mb-3">
                                <label htmlFor="year" className="block text-gray-700">Year</label>
                                <input
                                    type="text"
                                    id="year"
                                    name="year"
                                    value={event.year}
                                    onChange={handleChange}
                                    placeholder='Enter Class Year'
                                    className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
                                    required
                                />
                            </div>
                            <div className="w-full md:w-1/2 md:pl-2 mb-3">
                                <label htmlFor="description" className="block text-gray-700">Event Description</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={event.description}
                                    onChange={handleChange}
                                    placeholder='Enter Description'
                                    rows="4"
                                    className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
                                    required
                                ></textarea>
                            </div>
                        </div>
                        <div className="mb-4 ml-2">
                            <button
                                type="submit"
                                className="mb-5 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded focus:outline-none focus:bg-purple-600"
                            >
                                Add
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AddEvent