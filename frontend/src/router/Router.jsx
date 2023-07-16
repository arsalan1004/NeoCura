import React from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AllBlogs from '../components/BlogScreens/allBlogs/AllBlogs';
import SingleBlog from '../components/BlogScreens/SingleBlog/SingleBlog';
import NotFound from '../components/EntryScreens/NotFound/NotFound';
import Home from '../components/Home/Home';
import BookAppointment from '../components/BookAppointment/BookAppointment';
import LoginPage from '../components/EntryScreens/LoginPage/LoginPage';
import SignupPage from '../components/EntryScreens/SignupPages/SignupPage';
import ResetPass from '../components/EntryScreens/ResetPassword/resetPass';
import DoctorSignUp from '../components/EntryScreens/SignupPages/DoctorSignUp/DoctorSignUp';
import PatientSignUp from '../components/EntryScreens/SignupPages/PatientSignUp/PatientSignUp';
import DoctorList from "../containers/DoctorList/DoctorList";
import VideoConsultation from '../components/VideoConsultaion/VideoConsultation';
import PatientDashboard from '../components/Dashboards/Patient/Patient';
import DoctorDashboard from '../components/Dashboards/Doctor/Doctor';


const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/resetPassword" element={<ResetPass/>}/>
            <Route path="/signup" element={<SignupPage/>}/>
            <Route path="/signup/doctor" element={<DoctorSignUp/>}/>
            <Route path="/signup/patient" element={<PatientSignUp/>}/>
            <Route path="patientId/dashboard/*" element={<PatientDashboard/>}/>
            <Route path="doctorId/dashboard/*" element={<DoctorDashboard/>}/>
            <Route path="/indivDoc" element={<DoctorList/>}/>
            <Route path="/booking" element={<BookAppointment/>}/>
            <Route path="/videoConsultation" element={<VideoConsultation/>}/>
            <Route path="/blogs" element={<AllBlogs/>}/>
            <Route path="/blogs/:id" element={<SingleBlog/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  )
}
export default Router;