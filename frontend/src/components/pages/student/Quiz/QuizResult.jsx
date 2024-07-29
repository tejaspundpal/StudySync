import React from "react"
import { useLocation, useParams} from "react-router-dom"
import StudentNavbar from "../StudentNavbar"
import Footer from "../../../Footer"

 const QuizResult = () => {
		const location = useLocation()
		const { quizQuestions, totalScores } = location.state
		const numQuestions = quizQuestions.length
		const percentage = Math.round((totalScores / numQuestions) * 100)
		const {id} = useParams();

		return (
            <>
            <StudentNavbar id={id}/>
			<section className="mt-5 min-h-screen ml-5 mr-5">
				<h3 className="mt-5 text-xl font-medium text-gray-600">Your Quiz Result Summary</h3>
				<hr className="my-4 border-gray-300" />
				<h5 className="mt-4">
					You answered {totalScores} out of {numQuestions} questions correctly.
				</h5>
				<p className="mt-2 font-medium">Your total score is {percentage}%.</p>
			</section>
            <Footer/>
            </>
		)
 }

 export default QuizResult