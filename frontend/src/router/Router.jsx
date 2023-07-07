import React from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AllBlogs from '../components/allBlogs/AllBlogs';
import SingleBlog from '../components/SingleBlog/SingleBlog';
import NotFound from '../components/NotFound/NotFound';
import Home from '../components/Home/Home';
import LoginPage from '../components/LoginPage/LoginPage';
import SignupPage from '../components/SignupPage/SignupPage';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/signup" element={<SignupPage/>}/>
            <Route path="/blogs" element={<AllBlogs/>}/>
            <Route path="/blogs/:id" element={<SingleBlog/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  )
}
export default Router;