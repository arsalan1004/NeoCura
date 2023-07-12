import React from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AllBlogs from '../components/BlogScreens/allBlogs/AllBlogs';
import SingleBlog from '../components/BlogScreens/SingleBlog/SingleBlog';
import NotFound from '../components/EntryScreens/NotFound/NotFound';
import Home from '../components/Home/Home';
import LoginPage from '../components/EntryScreens/LoginPage/LoginPage';
import SignupPage from '../components/EntryScreens/SignupPages/SignupPage';
import ResetPass from '../components/EntryScreens/ResetPassword/resetPass';
import DoctorSignUp from '../components/EntryScreens/SignupPages/DoctorSignUp/DoctorSignUp';
import PatientSignUp from '../components/EntryScreens/SignupPages/PatientSignUp/PatientSignUp';
import DoctorList from "../containers/DoctorList/DoctorList";


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
            <Route path="/indivDoc" element={<DoctorList/>}/>
            <Route path="/blogs" element={<AllBlogs/>}/>
            <Route path="/blogs/:id" element={<SingleBlog/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  )
}
export default Router;