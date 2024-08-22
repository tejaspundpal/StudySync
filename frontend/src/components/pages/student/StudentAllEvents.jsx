import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';
import 'react-calendar/dist/Calendar.css';
import { NavLink, useParams } from 'react-router-dom';
import StudentNavbar from './StudentNavbar';
import Footer from '../../Footer';

const StudentAllEvents = () => {
  const [events, setEvents] = useState([]);
  const {id} = useParams();

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
            <NavLink to={`/student/events/details/${event.id}/${id}`}><strong>{event.title}</strong></NavLink>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <StudentNavbar id={id}/>
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

export default StudentAllEvents;
