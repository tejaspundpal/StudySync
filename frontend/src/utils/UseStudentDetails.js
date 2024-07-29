import React, { useEffect, useState } from 'react'
import axios from 'axios';

const useStudentDetails = (id) => {
 
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axios.get(`http://localhost:8182/api/student/details/${id}`);
        setStudent(response.data);
      } catch (error) {
        console.error("Error Fetching Details : ", error);
      }
    }
    fetchStudent();
  }, []);

  return student;
}

export default useStudentDetails