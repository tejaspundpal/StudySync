import React from 'react'
import TeacherNavbar from './TeacherNavbar'
import Footer from '../../Footer'
import { NavLink, useParams } from 'react-router-dom';

const TeacherEvent = () => {
    const {id} = useParams();
    return (
        <>
            <TeacherNavbar id = {id}/>
            <section className="container mx-auto p-4 min-h-screen">
                <h2 className="mt-5 text-2xl font-semibold">Welcome to Events</h2>
                <hr className="my-4" />
                <div className=''>
                    <p>
                        <NavLink to={`/teacher/events/add-event/${id}`} className="nav-link text-purple-600 hover:text-purple-800">
                            Add New Event
                        </NavLink>
                    </p>
                    <p className='mt-2'>
                        <NavLink to={`/teacher/events/all-events/${id}`} className="nav-link text-purple-600 hover:text-purple-800">
                            All Events
                        </NavLink>
                    </p>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default TeacherEvent