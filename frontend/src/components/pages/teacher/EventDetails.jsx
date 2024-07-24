import React, { useEffect, useState } from 'react';
import TeacherNavbar from './TeacherNavbar';
import Footer from '../../Footer';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EventDetails = () => {
    const [eventDetails, setEventDetails] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchEventById = async () => {
            try {
                const response = await axios.get(`http://localhost:8182/api/event/details/${id}`);
                setEventDetails(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchEventById();
    }, [id]);

    return (
        <>
            <TeacherNavbar />
            <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
                {eventDetails ? (
                    <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
                        <h1 className="text-2xl font-bold mb-4">{eventDetails.title}</h1>
                        <p className="text-lg mb-2"><strong>Date:</strong> {new Date(eventDetails.date).toLocaleDateString()}</p>
                        <p className="text-lg mb-2"><strong>Description:</strong> {eventDetails.description}</p>
                        <p className="text-lg mb-2"><strong>Time:</strong> {eventDetails.time}</p>
                        <p className="text-lg mb-2"><strong>Location:</strong> {eventDetails.location}</p>
                        <p className="text-lg mb-2"><strong>Year:</strong> {getYearText(eventDetails.year)}</p>
                    </div>
                ) : (
                    <p>Loading event details...</p>
                )}
            </div>
            <Footer />
        </>
    );
};

export default EventDetails;
