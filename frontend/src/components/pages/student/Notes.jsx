import React from 'react'
import StudentNavbar from './StudentNavbar'
import AllNotes from './AllNotes'
import Footer from '../../Footer'
import { useParams } from 'react-router-dom'

const Notes = () => {
  const {id} = useParams();
  return (
    <>
        <StudentNavbar id={id}/>
        <AllNotes/>
        <Footer/>
    </>
  )
}

export default Notes