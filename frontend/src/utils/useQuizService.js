import axios from "axios";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: "http://localhost:8182/api/quiz",
  headers: {
    'Content-Type': 'application/json'
  }
});

export const createQuestion = async (quizQuestion) => {
  try {
    const response = await api.post("/create-question", quizQuestion);
    toast.success("Question Added Successfully !");
    return response.data;
  } catch (error) {
    console.error("Error creating question:", error);
    throw error; 
  }
};

export const getAllQuestions = async () => {
  try {
    const response = await api.get("/all-questions");
    return response.data;
  } catch (error) {
    console.error("Error fetching all questions:", error);
    return [];
  }
};

export const getSubjects = async () => {
  try {
    const response = await api.get("/subjects");
    return response.data;
  } catch (error) {
    console.error("Error fetching subjects:", error);
    return [];
  }
};

export const fetchQuizForUser = async (number, subject) => {
  try {
    const response = await api.get(`/fetch-questions-for-user?noOfQuestions=${number}&subject=${subject}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching quiz for user:", error);
    return [];
  }
};

export const updateQuestion = async (id, question) => {
  try {
    const response = await api.put(`/question/${id}/update`, question);
    return response.data;
  } catch (error) {
    console.error("Error updating question:", error);
    throw error;
  }
};

export const getQuestionById = async (id) => {
  try {
    const response = await api.get(`/question/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching question by ID:", error);
    throw error;
  }
};

export const deleteQuestion = async (id) => {
  try {
    const response = await api.delete(`/question/${id}/delete`);
    return response.data;
  } catch (error) {
    console.error("Error deleting question:", error);
    throw error;
  }
};
