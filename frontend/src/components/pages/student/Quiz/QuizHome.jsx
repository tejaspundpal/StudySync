import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getSubjects } from "../../../../utils/useQuizService"
import StudentNavbar from "../StudentNavbar"
import Footer from "../../../Footer"

const QuizHome = () => {
    const [currentStep, setCurrentStep] = useState(1)
    const [selectedSubject, setSelectedSubject] = useState("")
    const [selectedNumQuestions, setSelectedNumQuestions] = useState("")
    const [subjects, setSubjects] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const fetchSubjectData = async () => {
            try {
                const subjectsData = await getSubjects()
                setSubjects(subjectsData)
            } catch (error) {
                console.error(error)
            }
        }
        fetchSubjectData()
    }, [])

    const handleNext = () => {
        if (currentStep === 3) {
            if (selectedSubject && selectedNumQuestions) {
                navigate("/student/quiz/take-quiz", { state: { selectedNumQuestions, selectedSubject } })
            } else {
                alert("Please select a subject and number of questions.")
            }
        } else {
            setCurrentStep(currentStep + 1)
        }
    }

    const handlePrevious = () => {
        setCurrentStep(currentStep - 1)
    }

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div>
                        <h3 className="text-gray-800 mb-2 font-medium">I want to take a quiz on:</h3>
                        <select
                            className="form-select mt-1 p-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                            value={selectedSubject}
                            onChange={(e) => setSelectedSubject(e.target.value)}
                        >
                            <option value="">Select a subject</option>
                            {subjects.map((subject) => (
                                <option key={subject} value={subject}>
                                    {subject}
                                </option>
                            ))}
                        </select>
                    </div>
                )
            case 2:
                return (
                    <div>
                        <h4 className="text-gray-800 mb-2 font-medium">How many questions would you like to attempt?</h4>
                        <input
                            type="number"
                            className="form-input mt-1 p-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                            value={selectedNumQuestions}
                            onChange={(e) => setSelectedNumQuestions(e.target.value)}
                            placeholder="Enter the number of questions"
                        />
                    </div>
                )
            case 3:
                return (
                    <div>
                        <h2 className="text-gray-800 mb-2 font-medium text-xl">Confirmation</h2>
                        <p className="font-medium text-gray-700">Subject : {selectedSubject}</p>
                        <p className="font-medium text-gray-700">Number of Questions : {selectedNumQuestions}</p>
                    </div>
                )
            default:
                return null
        }
    }

    const renderProgressBar = () => {
        const progress = (currentStep / 3) * 100
        return (
            <div className="w-full bg-gray-200 rounded-full h-1 mb-4">
                <div
                    className="bg-purple-600 h-1 rounded-full text-center text-white"
                    style={{ width: `${progress}%` }}
                >
                </div>
            </div>
        )
    }

    return (
        <>
            <StudentNavbar />
            <section className="mt-5 min-h-screen">
                <h3 className="mb-4 text-xl font-medium text-gray-600">Welcome to quiz online</h3>
                {renderProgressBar()}
                <div className="bg-white shadow-md rounded-lg">
                    <div className="p-4">
                        {renderStepContent()}
                        <div className="flex justify-between mt-4">
                            {currentStep > 1 && (
                                <button
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                    onClick={handlePrevious}
                                >
                                    Previous
                                </button>
                            )}
                            {currentStep < 3 && (
                                <button
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                    onClick={handleNext}
                                    disabled={
                                        (currentStep === 1 && !selectedSubject) ||
                                        (currentStep === 2 && !selectedNumQuestions)
                                    }
                                >
                                    Next
                                </button>
                            )}
                            {currentStep === 3 && (
                                <button
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                    onClick={handleNext}
                                >
                                    Start Quiz
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default QuizHome
