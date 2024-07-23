import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';
import TeacherNavbar from './TeacherNavbar';
import Footer from '../../Footer';
import 'react-calendar/dist/Calendar.css';
import { NavLink } from 'react-router-dom';

const AllEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
     try {
        const response = await axios.get('http://localhost:8182/api/event/all-events');
        setEvents(response.data);
     } catch (error) {
        console.error(error);
     }
    }
    fetchEvents();
  }, []);

  const tileContent = ({ date, view }) => {
    const dayEvents = events.filter(event => new Date(event.date).toDateString() === date.toDateString());
    return (
      <div className="flex flex-col items-center">
        {dayEvents.map(event => (
          <div key={event.id} className="text-sm p-1">
            <NavLink to={`/teacher/events/all-events/details/${event.id}`}><strong>{event.title}</strong></NavLink>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <TeacherNavbar />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
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
