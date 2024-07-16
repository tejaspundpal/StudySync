import axios from "axios"

export const api = axios.create({
	baseURL: "http://localhost:8182/api/quiz"
})

export const createQuestion = async(quizQustion) =>{
  try {
    const response = await api.post("/create-new-question", quizQustion)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const getAllQuestions = async() =>{
  try {
    const response = await api.get("/all-questions")
    return response.data
  } catch (error) {
    console.error(error)
    return []
  }
}

export const getSubjects = async() =>{
    try {
      const response = await api.get("/subjects")
      return response.data
    } catch (error) {
      console.error(error)
      
    }
  }
