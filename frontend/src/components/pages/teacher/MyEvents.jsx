import React, { useEffect } from 'react'
import TeacherNavbar from './TeacherNavbar'
import Footer from '../../Footer'
import { NavLink, useParams } from 'react-router-dom'
import useAllEvents from '../../../utils/useAllEvents'
import useTeacherDetails from '../../../utils/useTeacherDetails'
import axios from 'axios'
import { toast } from 'react-toastify'
import { MdOutlineEditNotifications } from "react-icons/md";

const MyEvents = () => {
    const { id } = useParams();
    const {events, loading, setEvents} = useAllEvents();
    const teacher = useTeacherDetails(id);

    const myEvents = events && events.filter(event => event.teacherName === `${teacher && teacher.firstname} ${teacher && teacher.lastname}`)
    // console.log(myEvents);

    const handleDelete = async(id) => {
        try {
            await axios.delete(`http://localhost:8182/api/event/delete/${id}`)
            toast.success("Event deleted Successfully! Refresh the page");
            const response = await axios.get('http://localhost:8182/api/event/all-events')
            setEvents(response.data);
        } catch (error) {
            console.error("There was an error deleting the event!", error);
        }
    }

    return (
        <>
            <TeacherNavbar id={id} />
            <div className='overflow-x-auto min-h-screen mt-12 ml-32'>
            <h1 className="text-3xl font-semibold text-neutral-700 ml-2">My Events</h1>
                {
                        myEvents && myEvents.length === 0 ? (<h1 className='mt-5 font-bold text-gray-700 ml-2'>No Events to Show ! Add Event first.</h1>) : (
                            <table className="min-w-4xl bg-white shadow-lg rounded mt-10">
                                <thead className='border'>
                                    <tr className="text-left text-neutral-700">
                                        <th className="py-3 px-4">Title</th>
                                        <th className="py-3 px-4">Date</th>
                                        <th className="py-3 px-4">Time</th>
                                        <th className="py-3 px-4">Location</th>
                                        <th className="py-3 px-4">Year</th>
                                        <th className="py-3 px-4">Delete</th>
                                        <th className="py-3 px-4">Reshedule</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                    {myEvents && myEvents.map(event => (
                                        <tr key={event.id}>
                                            <td className="border-b py-3 px-4">{event.title}</td>
                                            <td className="border-b py-3 px-4">{event.date}</td>
                                            <td className="border-b py-3 px-4">{event.time}</td>
                                            <td className="border-b py-3 px-4">{event.location}</td>
                                            <td className="border-b py-3 px-4">{event.year}</td>
                                            <td className="border-b py-3 px-4">
                                                <button onClick={() => handleDelete(event.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded">
                                                    Delete
                                                </button>
                                            </td>
                                            <td className="border-b py-3 px-4"><NavLink to={`/teacher/events/reshedule/${event.id}/${id}`}>
                                            <MdOutlineEditNotifications className='size-7 ml-5' />
                                            </NavLink></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )
                }
            </div>
            <Footer />
        </>
    )
}

export default MyEvents