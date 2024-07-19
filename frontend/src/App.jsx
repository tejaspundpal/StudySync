import React, { Suspense, lazy } from "react";
import Home from "./components/Home";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Error from "./components/Error";
import MainComponet from "./components/MainComponent";
import StudentLogin from "./components/pages/student/StudentLogin";
import StudentRegister from "./components/pages/student/StudentRegister";
import TeacherLogin from "./components/pages/teacher/TeacherLogin";
import TeacherRegister from "./components/pages/teacher/TeacherRegister";
import Loader from "./components/Loader";
import StudentDashboard from "./components/pages/student/StudentDashboard";
import ExploreFriends from "./components/pages/student/ExploreFriends";
import TeacherDashboard from "./components/pages/teacher/TeacherDashboard";
import TeacherNotes from "./components/pages/teacher/TeacherNotes";
import StudentProfile from "./components/pages/student/StudentProfile";
import Competitive from "./components/pages/student/competitive";
import DataScience from "./components/pages/student/Datascience";
import Notes from "./components/pages/student/Notes";
import UploadNotes from "./components/pages/teacher/UploadNotes";
import TeacherQuiz from "./components/pages/teacher/TeacherQuiz";
import AddQuestion from "./components/pages/teacher/Quiz/AddQuestion";
import GetAllQuiz from "./components/pages/teacher/Quiz/GetAllQuiz";
import UpdateQuestion from "./components/pages/teacher/Quiz/UpdateQuestion";
import QuizHome from "./components/pages/student/Quiz/QuizHome";
import TakeQuiz from "./components/pages/student/Quiz/TakeQuiz";

function App() {

  // console.log("hi");
  return (
    <>
      <Routes>
        <Route path="/" exact element={<MainComponet />} >
          <Route index element={<Home />} />
          <Route path="/student-login" element={<Suspense fallback={<Loader/>}><StudentLogin/></Suspense>} />
          <Route path="/teacher-login" element={<TeacherLogin/>} />
          <Route path="/student-register" element={<StudentRegister/>} />
          <Route path="/teacher-register" element={<TeacherRegister/>} />
          <Route path="/student/dashboard" element={<StudentDashboard/>} />
          <Route path="/student/profile" element={<StudentProfile/>} />
          <Route path="/student/explore-friends" element={<ExploreFriends/>} />
          <Route path="/teacher/dashboard" element={<TeacherDashboard/>} />
          <Route path="/teacher/notes" element={<TeacherNotes/>} />
          <Route path="/teacher/notes/upload" element={<UploadNotes/>} />
          <Route path="/student/notes" element={<Notes/>} />
          <Route path="/student/domain/competitive" element={<Competitive/>} />
          <Route path="/student/domain/datascience" element={<DataScience/>} />
          <Route path="/teacher/quiz" element={<TeacherQuiz/>} />
          <Route path="/student/quiz" element={<QuizHome/>} />
          <Route path="/teacher/quiz/create-quiz" element={<AddQuestion/>} />
          <Route path="/teacher/quiz/all-quizzes" element={<GetAllQuiz/>} />
          <Route path="/teacher/quiz/update-quiz/:id" element={<UpdateQuestion/>} />
          <Route path="/student/quiz/take-quiz" element={<TakeQuiz/>} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      {/* <Home/> */}
    </>
  );
}

export default App;