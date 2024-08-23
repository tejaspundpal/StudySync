import React, { useState,useEffect } from 'react';
import axios from 'axios';
import TeacherNavbar from './TeacherNavbar'
import Footer from '../../Footer'
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const EventReshedule = () => {
    const { eventid, id } = useParams();
    // console.log(eventid,id);
    const [loading,setLoading] = useState(false);

    const [event, setEvent] = useState({
        date: '',
        time: '',
        location: ''
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setEvent({ ...event, [name]: value });
    }

    useEffect(() => {
        const fetchEventById = async () => {
            try {
                const response = await axios.get(`http://localhost:8182/api/event/details/${eventid}`);
                setEvent(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchEventById();
    }, [eventid]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const formData = { ...event };
            const response = await axios.put(`http://localhost:8182/api/event/update/${eventid}`, formData);
            toast.success("Event Resheduled Successfully !")
            console.log("FormData : ", response.data);
        } catch (error) {
            console.error(error);
            toast.error('Something Went Wrong !')
        }finally{
            setLoading(false);
        }
    }
    return (
        <>
            <TeacherNavbar id={id} />
            <div>
                <div className="container mx-auto mt-10 shadow-md rounded-md mb-10">
                    <h1 className="text-3xl font-semibold text-center mb-8 text-neutral-700">Reshedule Event</h1>
                    <form className="max-w-4xl mx-auto" onSubmit={handleUpdate}>
                        <div className="mb-4 flex flex-wrap">
                            <div className="w-full md:w-1/2 md:pl-2 mb-3">
                                <label htmlFor="date" className="block text-gray-700">Date</label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={event.date}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
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
                        </div>
                        <div className="mb-4 ml-2">
                            <button
                                type="submit"
                                className="mb-5 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded focus:outline-none focus:bg-purple-600"
                                disabled = {loading}
                            >
                                {loading ? "Uploading..." : "Upload"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default EventReshedule

