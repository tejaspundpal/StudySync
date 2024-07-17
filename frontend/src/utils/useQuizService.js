import axios from "axios"

export const api = axios.create({
  baseURL: "http://localhost:8182/api/quiz"
})

export const createQuestion = async (quizQustion) => {
  try {
    const response = await api.post("/create-new-question", quizQustion)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const getAllQuestions = async () => {
  try {
    const response = await api.get("/all-questions")
    return response.data
  } catch (error) {
    console.error(error)
    return []
  }
}

export const getSubjects = async () => {
  try {
    const response = await api.get("/subjects")
    return response.data
  } catch (error) {
    console.error(error)

  }
}

export const fetchQuizForUser = async (number,subject) => {
  try {
    const response = await api.get(`/fetch-questions-for-user?noOfQuestions=${number}&subject=${subject}`)
    return response.data;
  } catch (error) {
    console.error(error);
    return []
  }
}

export const updateQuestion = async (id,question) => {
  try {
    const response = await api.put(`/question/${id}/update`,question);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const getQuestionById = async (id) => {
  try {
    const response = await api.get(`/question/${id}`)
    return response.data
  } catch (error) {
    console.error(error);
  }
}

export const deleteQuestion = async(id) => {
  try {
    const response = await api.delete(`/question/${id}/delete`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}