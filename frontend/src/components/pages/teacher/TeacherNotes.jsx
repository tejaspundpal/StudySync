import React from 'react'
import TeacherNavbar from './TeacherNavbar'
import Footer from '../../Footer'
import Notes from './Notes';
import { useParams } from 'react-router-dom';

const TeacherNotes = () => {
  const {id} = useParams();

  return (
    <>
      <TeacherNavbar id = {id}/>
      <Notes id = {id}/>
      <Footer />
    </>
  )
}

export default TeacherNotes