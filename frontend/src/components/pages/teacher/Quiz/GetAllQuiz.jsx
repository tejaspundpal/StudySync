import React, { useEffect, useState } from 'react'
import TeacherNavbar from '../TeacherNavbar'
import Footer from '../../../Footer'
import { deleteQuestion, getAllQuestions } from '../../../../utils/useQuizService'
import { NavLink } from 'react-router-dom'
import {FaPlus} from "react-icons/fa"


const GetAllQuiz = () => {
    const [questions, setQuestions] = useState([
        { id: "", question: "", correctAnswers: "", choices: [] }
    ])
    const [isLoading, setIsLoading] = useState(true)
    const [isQuestionDeleted, setIsQuestionDeleted] = useState(false);
    const [deleteSuccess, setDeleteSuccess] = useState("");

    const fetchQuestions = async () => {
        try {
            const response = await getAllQuestions();
            setQuestions(response);
            setIsLoading(false);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchQuestions();
    }, [])

    const handleDeleteQuestion = async (id) => {
        try {
            await deleteQuestion();
            setQuestions(questions.filter((question) => question.id !== id));
            setIsQuestionDeleted(true);
            setDeleteSuccess("Question Deleted Successfully !");
        } catch (error) {
            console.error(error);
        }

        setTimeout(() => {
            setDeleteSuccess("");
        }, 4000)
    }

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <>
            <TeacherNavbar />
            <section className="container mx-auto min-h-screen">
                <div className="flex flex-col md:flex-row mt-5">
                    <div className="w-full md:w-1/2 mb-2 md:mb-0 text-gray-600">
                        <h4>All Quiz Questions</h4>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-end">
                        <NavLink to={"/create-quiz"} className="flex items-center text-blue-500 hover:text-blue-700">
                            <FaPlus className="mr-2" /> Add Question
                        </NavLink>
                    </div>
                </div>
                <hr className="my-4 border-gray-300" />
                {isQuestionDeleted && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
                        {deleteSuccess}
                    </div>
                )}
                {questions.map((question, index) => (
                    <div key={question.id} className="mb-6">
                        <pre>
                            <h4 className="text-gray-600">{`${index + 1}. ${question.question}`}</h4>
                        </pre>
                        <ul className="list-disc list-inside">
                            {question.choices.map((choice, index) => (
                                <li key={index}>{choice}</li>
                            ))}
                        </ul>
                        <p className="text-green-600">Correct Answer: {question.correctAnswers}</p>
                        <div className="flex space-x-2">
                            <NavLink to={`/update-quiz/${question.id}`}>
                                <button className="btn btn-sm btn-outline-warning border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white transition duration-200">
                                    Edit Question
                                </button>
                            </NavLink>
                            <button
                                className="btn btn-sm btn-outline-danger border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition duration-200"
                                onClick={() => handleDeleteQuestion(question.id)}>
                                Delete Question
                            </button>
                        </div>
                    </div>
                ))}
            </section>

            <Footer />
        </>
    )
}

export default GetAllQuiz