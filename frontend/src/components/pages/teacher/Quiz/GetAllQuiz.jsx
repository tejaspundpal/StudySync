import React, { useEffect, useState } from 'react'
import TeacherNavbar from '../TeacherNavbar'
import Footer from '../../../Footer'
import { deleteQuestion, getAllQuestions } from '../../../../utils/useQuizService'
import { NavLink, useParams } from 'react-router-dom'
import { FaPlus } from "react-icons/fa"
import { toast } from 'react-toastify'


const GetAllQuiz = () => {

    const {id} = useParams();

    const [questions, setQuestions] = useState([
        { id: "", question: "", correctAnswers: "", choices: [] }
    ])
    const [isLoading, setIsLoading] = useState(true)
    // const [isQuestionDeleted, setIsQuestionDeleted] = useState(false);
    // const [deleteSuccess, setDeleteSuccess] = useState("");

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
            await deleteQuestion(id);
            setQuestions(questions.filter((question) => question.id !== id));
            // setIsQuestionDeleted(true);
            // setDeleteSuccess("Question Deleted Successfully !");
            toast.success('Question Deleted Successfully !')
        } catch (error) {
            console.error(error);
            toast.error('Something Went Wrong')
        }

        // setTimeout(() => {
        //     setDeleteSuccess("");
        // }, 4000)
    }

    if (isLoading) {
        return (
            <div className='flex items-center justify-center mt-56'>
            <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-400 fill-purple-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
            </div>
        )  
    }

    return (
        <>
            <TeacherNavbar id={id}/>
            <section className="container mx-auto min-h-screen">
                <div className="flex flex-col md:flex-row mt-5">
                    <div className="w-full md:w-1/2 mb-2 md:mb-0 text-gray-600">
                        <h3 className='text-xl font-medium'>All Quiz Questions</h3>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-end">
                        <NavLink to={`/teacher/quiz/create-quiz/${id}`} className="flex items-center text-blue-500 hover:text-blue-700">
                            <FaPlus className="mr-2" /> Add Question
                        </NavLink>
                    </div>
                </div>
                <hr className="my-4 border-gray-300" />
                {/* {isQuestionDeleted && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
                        {deleteSuccess}
                    </div>
                )} */}
                {questions && questions.map((question, index) => (
                    <div key={question.id} className="mb-5">
                        <pre>
                            <h4 className="text-gray-600">{`${index + 1}. ${question.question}`}</h4>
                        </pre>
                        <ul className="list-disc list-inside">
                            {question.choices.map((choice, index) => (
                                <li key={index}>{choice}</li>
                            ))}
                        </ul>
                        <p className="text-green-600 mb-1">Correct Answer: {question.correctAnswers}</p>
                        <div className="flex space-x-2">
                            <NavLink to={`/teacher/quiz/update-quiz/${question.id}`}>
                                <button className="px-1 rounded-md border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white transition duration-200">
                                    Edit Question
                                </button>
                            </NavLink>
                            <button
                                className="px-1 rounded-md border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition duration-200"
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