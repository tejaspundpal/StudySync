import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';
import TeacherNavbar from './TeacherNavbar';
import Footer from '../../Footer';
import 'react-calendar/dist/Calendar.css';
import { NavLink, useParams } from 'react-router-dom';
import useAllEvents from '../../../utils/useAllEvents';

const AllEvents = () => {
  const {id} = useParams();
  const {events,loading} = useAllEvents();

  const tileContent = ({ date, view }) => {
    const dayEvents = events && events.filter(event => new Date(event.date).toDateString() === date.toDateString());
    return (
      <div className="flex flex-col items-center">
        {dayEvents && dayEvents.map(event => (
          <div key={event.id} className="text-sm p-1">
            <NavLink to={`/teacher/events/all-events/details/${event.id}/${id}`}><strong>{event.title}</strong></NavLink>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <TeacherNavbar id = {id}/>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className='text-3xl font-medium text-gray-600 mb-5 mt-1'>All Events</h1>
        <div className="w-full max-w-5xl bg-white shadow-md rounded-lg p-6">
          <Calendar
            tileContent={tileContent}
            className="w-full"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AllEvents;
