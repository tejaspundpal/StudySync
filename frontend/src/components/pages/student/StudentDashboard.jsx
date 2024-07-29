import React from 'react';
import StudentNavbar from './StudentNavbar';
import StudentExplore from './StudentExplore';
import StudentDomains from './StudentDomains';
import Footer from '../../Footer';

import { useState,useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const StudentDashboard = () => {
  // const [profile, setProfile] = useState(null);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:8182/api/student/profile', { withCredentials: true });
  //       setProfile(response.data);
  //       console.log(response.data);
  //     } catch (error) {
  //       setError(error);
  //       console.error("Error fetching profile: ", error);
  //     }
  //   }
  //   fetchProfile();
  // }, []);
 
  const {id} = useParams();
  // console.log(id);

  return (
    <>
      <StudentNavbar id={id} />
      <StudentExplore id={id}/>
      <StudentDomains id={id}/>
      <Footer/>
    </>
  );
};

export default StudentDashboard;
