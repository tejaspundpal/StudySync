import React from 'react';
import StudentNavbar from './StudentNavbar';
import StudentExplore from './StudentExplore';
import StudentDomains from './StudentDomains';
import Footer from '../../Footer';

const StudentDashboard = () => {
  return (
    <>
      <StudentNavbar />
      <StudentExplore/>
      <StudentDomains/>
      <Footer/>
    </>
  );
};

export default StudentDashboard;
