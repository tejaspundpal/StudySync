import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const useAllEvents = () => {
    const [events, setEvents] = useState([]);
    const [loading,setLoading] = useState(true);
    
    useEffect(() => {
      const fetchEvents = async () => {
       try {
          const response = await axios.get('http://localhost:8182/api/event/all-events');
          setEvents(response.data);
    //   console.log(response.data);
       } catch (error) {
          console.error(error);
          toast.error('Something Went Wrong')
       }
      }
      fetchEvents();
    }, []);

    return {events, loading};
}

export default useAllEvents