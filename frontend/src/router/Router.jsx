import React from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AllBlogs from '../components/allBlogs/AllBlogs';
import SingleBlog from '../components/SingleBlog/SingleBlog';
import NotFound from '../components/NotFound/NotFound';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/blogs" element={<AllBlogs/>}/>
            <Route path="/blogs/:id" element={<SingleBlog/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  )
}
export default Router;