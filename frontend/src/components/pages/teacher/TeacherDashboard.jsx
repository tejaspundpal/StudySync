import React from 'react'
import TeacherNavbar from './TeacherNavbar'
import Footer from '../../Footer'
import TeacherHome from './TeacherHome'
import { useParams } from 'react-router-dom'

const TeacherDashboard = () => {
  const {id} = useParams();
  return (
    <>
    <TeacherNavbar id = {id}/>
    <TeacherHome id = {id}/>
    <Footer/>
    </>
  )
}

export default TeacherDashboard