import React, { useEffect, useState } from 'react'
import axios from 'axios';

const useAllStudents = () => {
 
  const [students, setStudents] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:8182/api/student/allstudents');
        // console.log(response.data);
        // console.log("hi");
        setStudents(response.data);
      } catch (error) {
        console.error("Error Fetching Details : ", error);
      }
    }
    fetchStudents();
  }, []);

  return students;
}

export default useAllStudents