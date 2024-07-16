import React, { useEffect, useState } from 'react'
import Footer from '../../../Footer'
import TeacherNavbar from '../TeacherNavbar'
import { createQuestion,getSubjects } from '../../../../utils/useQuizService'

const AddQuestion = () => {
    const [subjectOptions,setSubjectOptions] = useState([""]);

    useEffect(() => {
        const fetchSubjects = async() => {
            try {
                const responseData = await getSubjects();
                setSubjectOptions(responseData);
            } catch (error) {
                console.error(error);
            }
        }
        fetchSubjects();
    },[])

    console.log(subjectOptions);

    return (
        <>
            <TeacherNavbar />
            <div className='min-h-screen'>AddQuestion</div>
            <Footer />
        </>
    )
}

export default AddQuestion