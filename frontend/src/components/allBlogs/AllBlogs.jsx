import React from 'react'
import Wrapper from '../../shared/Wrapper/Wrapper'
import HeroSection from './HeroSection/HeroSection'
import Slider from './Slider/Slider'
import classes from './AllBlog.module.css'
import BlogsSection from './BlogsSection/BlogsSections'
const AllBlogs = () => {
  return (
    <main className={classes.main}>
      <HeroSection/>
      <Slider/>
      <BlogsSection/>
    </main>
  )
}

export default AllBlogs