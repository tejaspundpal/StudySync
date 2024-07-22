import React from "react"

const AnswerOptions = ({ question, isChecked, handleAnswerChange, handleCheckboxChange }) => {
	if (!question) {
		return (
			<div>
				No questions available, <br /> you may try again by reducing your requested number of
				questions on this topic
			</div>
		)
	}

	const { id, questionType, choices } = question

	if (questionType === "single") {
		return (
			<div>
				{choices.sort().map((choice) => (
					<div key={choice} className="mb-3">
						<input
							className="form-radio h-4 w-4 text-blue-600"
							type="radio"
							id={choice}
							name={question.id}
							value={choice}
							checked={isChecked(question.id, choice)}
							onChange={() => handleAnswerChange(id, choice)}
						/>
						<label htmlFor={choice} className="ml-2 text-gray-700">
							{choice}
						</label>
					</div>
				))}
			</div>
		)
	} else if (questionType === "multiple") {
		return (
			<div>
				{choices.sort().map((choice) => (
					<div key={choice} className="mb-3">
						<input
							className="form-checkbox h-4 w-4 text-blue-600"
							type="checkbox"
							id={choice}
							name={question.id}
							value={choice}
							checked={isChecked(question.id, choice)}
							onChange={() => handleCheckboxChange(id, choice)}
						/>
						<label htmlFor={choice} className="ml-2 text-gray-700">
							{choice}
						</label>
					</div>
				))}
			</div>
		)
	} else {
		return null
	}
}

export default AnswerOptions
