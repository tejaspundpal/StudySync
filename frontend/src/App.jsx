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
import QuizResult from "./components/pages/student/Quiz/QuizResult";
import TeacherEvent from "./components/pages/teacher/TeacherEvent";
import AddEvent from "./components/pages/teacher/AddEvent";
import AllEvents from "./components/pages/teacher/AllEvents";
import EventDetails from "./components/pages/teacher/EventDetails";
import StudentAllEvents from "./components/pages/student/StudentAllEvents";
import StudentEventDetails from "./components/pages/student/StudentEventDetails";
import TeacherProfile from "./components/pages/teacher/TeacherProfile";
import Webd from "./components/pages/student/Webd";
import MyEvents from "./components/pages/teacher/MyEvents";
import ThreadList from "./components/pages/student/Thread/ThreadList";
import CreateThread from "./components/pages/student/Thread/CreateThread";
import MyThreads from "./components/pages/student/Thread/MyThreads";

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
          <Route path="/student/dashboard/:id" element={<StudentDashboard/>} />
          <Route path="/student/profile/:id" element={<StudentProfile/>} />
          <Route path="/teacher/profile/:id" element={<TeacherProfile/>} />
          <Route path="/student/explore-friends/:id" element={<ExploreFriends/>} />
          <Route path="/teacher/dashboard/:id" element={<TeacherDashboard/>} />
          <Route path="/teacher/notes/:id" element={<TeacherNotes/>} />
          <Route path="/teacher/notes/upload/:id" element={<UploadNotes/>} />
          <Route path="/student/notes/:id" element={<Notes/>} />
          <Route path="/student/domain/competitive/:id" element={<Competitive/>} />
          <Route path="/student/domain/datascience/:id" element={<DataScience/>} />
          <Route path="/student/domain/webd/:id" element={<Webd/>} />
          <Route path="/teacher/quiz/:id" element={<TeacherQuiz/>} />
          <Route path="/student/quiz/:id" element={<QuizHome/>} />
          <Route path="/teacher/quiz/create-quiz/:id" element={<AddQuestion/>} />
          <Route path="/teacher/quiz/all-quizzes/:id" element={<GetAllQuiz/>} />
          <Route path="/teacher/quiz/update-quiz/:id" element={<UpdateQuestion/>} />
          <Route path="/student/quiz/take-quiz/:id" element={<TakeQuiz/>} />
          <Route path="/student/quiz/quiz-result/:id" element={<QuizResult/>} />
          <Route path="/teacher/events/:id" element={<TeacherEvent/>} />
          <Route path="/teacher/events/add-event/:id" element={<AddEvent/>} />
          <Route path="/teacher/events/all-events/:id" element={<AllEvents/>} />
          <Route path="/teacher/events/my-events/:id" element={<MyEvents/>} />
          <Route path="/teacher/events/all-events/details/:eventid/:id" element={<EventDetails/>} />
          <Route path="/student/events/:id" element={<StudentAllEvents/>} />
          <Route path="/student/events/details/:eventid/:id" element={<StudentEventDetails/>} />
          <Route path="/student/discussion/:id" element={<ThreadList/>} />
          <Route path="/student/discussion/create-thread/:id" element={<CreateThread/>} />
          <Route path="/student/discussion/my-threads/:id" element={<MyThreads/>} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      {/* <Home/> */}
    </>
  );
}

export default App;