import React, { useEffect, useState } from 'react'
import TeacherNavbar from '../TeacherNavbar'
import Footer from '../../../Footer'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { getQuestionById, updateQuestion } from '../../../../utils/useQuizService'

const UpdateQuestion = () => {
    const { id } = useParams();
    const [question, setQuestion] = useState("");
    const [choices, setChoices] = useState([""]);
    const [correctAnswers, setCorrectAnswers] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    const fetchQuestionById = async (id) => {
        try {
            const questionToUpdate = await getQuestionById(id);
            console.log(questionToUpdate);
            if (questionToUpdate) {
                setQuestion(questionToUpdate.question);
                setChoices(questionToUpdate.choices);
                setCorrectAnswers(questionToUpdate.correctAnswers);
            }
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchQuestionById(id);
    }, [])

    const handleQuestionChange = (e) => {
        setQuestion(e.target.value)
    }

    const handleChoiceChange = (index, e) => {
        const updatedChoices = [...choices]
        updatedChoices[index] = e.target.value
        setChoices(updatedChoices)
    }

    const handleCorrectAnswerChange = (e) => {
        setCorrectAnswers(e.target.value)
    }

    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            const updatedQuestion = {
                question,
                choices,
                correctAnswers: correctAnswers
                    .toString()
                    .split(",")
                    .map((answer) => answer.trim())
            }
            await updateQuestion(id, updatedQuestion);
            alert("Question Updated Successfully !");
            navigate("/teacher/quiz/all-quizzes")
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <TeacherNavbar />
            <div className="container mx-auto px-4 min-h-screen">
                <h4 className="mt-5 text-xl font-medium text-gray-600">Update Quiz Question</h4>
                <hr className="my-4 border-gray-300" />
                <div className="w-full md:w-2/3">
                    <form onSubmit={handleUpdate}>
                        <div className="mb-4">
                            <label className="block text-info font-medium mb-2">Question:</label>
                            <textarea
                                className="form-textarea mt-1 border-2 block w-full rounded-md border-gray-200 shadow-sm focus:ring-purple-500 focus:border-purple-500"
                                rows={4}
                                value={question}
                                onChange={handleQuestionChange}></textarea>
                        </div>

                        <div className="mb-4">
                            <label className="block text-info font-medium mb-2">Choices:</label>
                            {choices.map((choice, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    className="form-input mt-1 p-1 border-2 block w-full rounded-md border-gray-200 shadow-sm mb-4 focus:ring-purple-500 focus:border-purple-500"
                                    value={choice}
                                    onChange={(e) => handleChoiceChange(index, e)}
                                />
                            ))}
                        </div>

                        <div className="mb-4">
                            <label className="block text-info font-medium mb-2">Correct Answer(s):</label>
                            <input
                                type="text"
                                className="form-input mt-1 p-1 border-2 block w-full rounded-md border-gray-200 shadow-sm mb-4 focus:ring-purple-500 focus:border-purple-500"
                                value={correctAnswers}
                                onChange={handleCorrectAnswerChange}
                            />
                        </div>

                        <div className="flex space-x-2">
                            <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                                Update question
                            </button>
                            <NavLink to={"/teacher/quiz/all-quizzes"} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                Back to all questions
                            </NavLink>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default UpdateQuestion