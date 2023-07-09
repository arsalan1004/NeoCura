import React from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AllBlogs from '../components/allBlogs/AllBlogs';
import SingleBlog from '../components/SingleBlog/SingleBlog';
import NotFound from '../components/NotFound/NotFound';
import Home from '../components/Home/Home';
import LoginPage from '../components/LoginPage/LoginPage';
import SignupPage from '../components/SignupPages/SignupPage';
import ResetPass from '../components/ResetPassword/resetPass';
import DoctorSignUp from '../components/SignupPages/DoctorSignUp/DoctorSignUp';
import PatientSignUp from '../components/SignupPages/PatientSignUp/PatientSignUp';
import IndivDoc from '../components/IndivDoc/IndivDoc';

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
            <Route path="/indivDoc" element={<IndivDoc/>}/>
            <Route path="/blogs" element={<AllBlogs/>}/>
            <Route path="/blogs/:id" element={<SingleBlog/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  )
}
export default Router;