import React, { useState } from 'react';
import classes from './BlogsSection.module.css'
import Wrapper from '../../shared/Wrapper/Wrapper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import BlogBox from '../../shared/BlogBox/BlogBox';
import {BlogsData} from '../../../data/data'
import { Link } from 'react-router-dom';


const BlogsSection = () => {
  return (
    <section>
    <Wrapper>
        <div className={classes.mainContainer}>
            <div className={classes.Heading}>
                <h1>All Blogs</h1>
                <div className={classes.Line}></div>
            </div>
            <div className={classes.blogContainer}>
                {BlogsData.map((e,i)=>{
                    return(
                        <div key={i}>
                        <BlogBox key={i} linkTo={`/blogs/${e.title}`} title={e.title} date={e.date} author={e.author} read={e.read} img={e.img} slug={e.slug} />
                        </div>
                    )
                })}
            </div>
        </div>
    </Wrapper>
    </section>
  )
}

export default BlogsSection