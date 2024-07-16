import React from 'react'
import TeacherNavbar from './TeacherNavbar'
import Footer from '../../Footer'
import { NavLink } from 'react-router-dom';

const TeacherQuiz = () => {
    return (
        <>
            <TeacherNavbar />
            <section className="container mx-auto p-4 min-h-screen">
                <h2 className="mt-5 text-2xl font-semibold">Welcome to Quiz</h2>
                <hr className="my-4" />
                <div className=''>
                    <p>
                        <NavLink to={"/teacher/quiz/create-quiz"} className="nav-link text-purple-600 hover:text-purple-800">
                            Create a New Quiz
                        </NavLink>
                    </p>
                    <p className='mt-2'>
                        <NavLink to={"/teacher/quiz/all-quizzes"} className="nav-link text-purple-600 hover:text-purple-800">
                            Manage existing Quizzes
                        </NavLink>
                    </p>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default TeacherQuiz