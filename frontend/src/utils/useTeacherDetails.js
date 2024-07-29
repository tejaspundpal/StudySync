import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const useTeacherDetails = (id) => {
  const [teacher,setTeacher] = useState(null);

  useEffect(() => {
    const fetchTeacherDetails = async() => {
        try {
            const response = await axios.get(`http://localhost:8182/api/teacher/details/${id}`)
            setTeacher(response.data);
        } catch (error) {
            console.error(error);
            toast.error("Something Went Wrong !")
        }
    }
    fetchTeacherDetails();
  },[]);

  return teacher;
}

export default useTeacherDetails