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
          <Route path="/student/notes" element={<Notes/>} />
          <Route path="/student/domain/competitive" element={<Competitive/>} />
          <Route path="/student/domain/datascience" element={<DataScience/>} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      {/* <Home/> */}
    </>
  );
}

export default App;