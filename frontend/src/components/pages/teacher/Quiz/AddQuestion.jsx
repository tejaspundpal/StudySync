import React, { useEffect, useState } from 'react'
import Footer from '../../../Footer'
import TeacherNavbar from '../TeacherNavbar'
import { createQuestion, getSubjects } from '../../../../utils/useQuizService'
import { NavLink } from 'react-router-dom'

const AddQuestion = () => {
    const [question, setQuestion] = useState("");
    const [questionType, setQuestionType] = useState("single");
    const [choices, setChoices] = useState([""]);
    const [correctAnswers, setCorrectAnswers] = useState([""]);
    const [subject, setSubject] = useState("")
    const [newSubject, setNewSubject] = useState("")
    const [subjectOptions, setSubjectOptions] = useState([""]);

    const fetchSubjects = async () => {
        try {
            const responseData = await getSubjects();
            setSubjectOptions(responseData);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchSubjects();
    }, [])

    console.log(subjectOptions);

    const handleAddChoice = async () => {
        const lastChoice = choices[choices.length - 1]
        const lastChoiceLetter = lastChoice ? lastChoice.charAt(0) : "A"
        const newChoiceLetter = String.fromCharCode(lastChoiceLetter.charCodeAt(0) + 1)
        const newChoice = `${newChoiceLetter}.`
        setChoices([...choices, newChoice])
    }

    const handleRemoveChoice = (index) => {
        setChoices(choices.filter((choice, i) => i !== index))
    }

    const handleChoiceChange = (index, value) => {
        setChoices(choices.map((choice, i) => (i === index ? value : choice)))
    }

    const handleCorrectAnswerChange = (index, value) => {
        setCorrectAnswers(correctAnswers.map((answer, i) => (i === index ? value : answer)))
    }

    const handleAddCorrectAnswer = () => {
        setCorrectAnswers([...correctAnswers, ""])
    }

    const handleRemoveCorrectAnswer = (index) => {
        setCorrectAnswers(correctAnswers.filter((answer, i) => i !== index))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const result = {
                question,
                questionType,
                choices,
                correctAnswers: correctAnswers.map((answer) => {
                    const choiceLetter = answer.charAt(0).toUpperCase()
                    const choiceIndex = choiceLetter.charCodeAt(0) - 65
                    return choiceIndex >= 0 && choiceIndex < choices.length ? choiceLetter : null
                }),

                subject
            }

            await createQuestion(result)
           
            console.log("Question : ",result);
            
            setQuestion("")
            setQuestionType("single")
            setChoices([""])
            setCorrectAnswers([""])
            setSubject("")
        } catch (error) {
            console.error(error)
        }
    }

    const handleAddSubject = () => {
        if (newSubject.trim() !== "") {
            setSubject(newSubject.trim())
            setSubjectOptions([...subjectOptions, newSubject.trim()])
            setNewSubject("")
            fetchSubjects()
        }
    }


    return (
        <>
            <TeacherNavbar />
            <div className="container mx-auto px-20 min-h-screen mb-10">
                <div className="flex justify-center">
                    <div className="w-full md:w-1/2 mt-10">
                        <div className="bg-white shadow-md rounded-lg">
                            <div className="bg-gray-200 px-4 py-2 rounded-t-lg">
                                <h5 className="text-lg font-semibold">Add New Questions</h5>
                            </div>
                            <div className="p-4">
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="subject" className="block text-info font-medium mb-1">
                                            Select a Subject
                                        </label>
                                        <select
                                            id="subject"
                                            value={subject}
                                            onChange={(e) => setSubject(e.target.value)}
                                            className="form-select mt-1 p-2 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500">
                                            <option value="">Select subject</option>
                                            <option value="New">Add New</option>
                                            {subjectOptions &&
                                                subjectOptions.map((option) => (
                                                    <option key={option} value={option}>
                                                        {option}
                                                    </option>
                                                ))}
                                        </select>
                                    </div>

                                    {subject === "New" && (
                                        <div>
                                            <label htmlFor="new-subject" className="block text-info font-medium mb-1">
                                                Add New Subject
                                            </label>
                                            <input
                                                type="text"
                                                id="new-subject"
                                                value={newSubject}
                                                onChange={(event) => setNewSubject(event.target.value)}
                                                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                                            />
                                            <button
                                                type="button"
                                                onClick={handleAddSubject}
                                                className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                                Add Subject
                                            </button>
                                        </div>
                                    )}

                                    <div>
                                        <label htmlFor="question-text" className="block text-info font-medium mb-1">
                                            Question
                                        </label>
                                        <textarea
                                            className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                                            rows={4}
                                            value={question}
                                            onChange={(e) => setQuestion(e.target.value)}></textarea>
                                    </div>

                                    <div>
                                        <label htmlFor="question-type" className="block text-info font-medium mb-1">
                                            Question type
                                        </label>
                                        <select
                                            id="question-type"
                                            value={questionType}
                                            onChange={(event) => setQuestionType(event.target.value)}
                                            className="form-select mt-1 p-2 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500">
                                            <option value="single">Single Answer</option>
                                            <option value="multiple">Multiple Answer</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="choices" className="block text-primary font-medium mb-1">
                                            Choices
                                        </label>
                                        {choices &&
                                            choices.map((choice, index) => (
                                                <div key={index} className="flex items-center mb-2">
                                                    <input
                                                        type="text"
                                                        value={choice}
                                                        onChange={(e) => handleChoiceChange(index, e.target.value)}
                                                        className="form-input mt-1 p-2 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => handleRemoveChoice(index)}
                                                        className="ml-2 inline-flex items-center px-2 py-1 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                                        Remove
                                                    </button>
                                                </div>
                                            ))}
                                        <button
                                            type="button"
                                            onClick={handleAddChoice}
                                            className="inline-flex items-center mt-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                            Add Choice
                                        </button>
                                    </div>

                                    {questionType === "single" && (
                                        <div>
                                            <label htmlFor="answer" className="block text-success font-medium mb-1">
                                                Correct Answer
                                            </label>
                                            <input
                                                type="text"
                                                className="mt-1 p-2 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                                                id="answer"
                                                value={correctAnswers[0]}
                                                onChange={(e) => handleCorrectAnswerChange(0, e.target.value)}
                                            />
                                        </div>
                                    )}

                                    {questionType === "multiple" && (
                                        <div>
                                            <label htmlFor="answer" className="block text-success font-medium mb-1">
                                                Correct Answer(s)
                                            </label>
                                            {correctAnswers &&
                                                correctAnswers.map((answer, index) => (
                                                    <div key={index} className="flex items-center mb-2">
                                                        <input
                                                            type="text"
                                                            className="form-input mt-1 p-2 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                                                            value={answer}
                                                            onChange={(e) => handleCorrectAnswerChange(index, e.target.value)}
                                                        />
                                                        {index > 0 && (
                                                            <button
                                                                type="button"
                                                                className="ml-2 inline-flex items-center px-2 py-1 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                                                onClick={() => handleRemoveCorrectAnswer(index)}>
                                                                Remove
                                                            </button>
                                                        )}
                                                    </div>
                                                ))}
                                            <button
                                                type="button"
                                                className="inline-flex items-center mt-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                                onClick={handleAddCorrectAnswer}>
                                                Add Correct Answer
                                            </button>
                                        </div>
                                    )}

                                    {!correctAnswers.length && (
                                        <p className="text-red-600">Please enter at least one correct answer.</p>
                                    )}

                                    <div className="flex space-x-4">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                            Save Question
                                        </button>
                                        <NavLink
                                            to="/teacher/quiz/all-quizzes"
                                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                            Back to existing questions
                                        </NavLink>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default AddQuestion