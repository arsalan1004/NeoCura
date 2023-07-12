import React from 'react'
import {BlogsData} from '../../../data/data'
import { useLocation, useParams } from 'react-router-dom';
import Wrapper from '../../shared/Wrapper/Wrapper';
import classes from './singleBlog.module.css'

const SingleBlog = () => {
  const Location=useLocation()
  const blogData=Location.state && Location.state.slug?BlogsData.find((e)=>e.slug==Location.state.slug):""
  console.log(blogData)
  return (
    <Wrapper>
      <div className={classes.ParentContainer}>
        <h1>{blogData.title}</h1>
        <img src={blogData.img}/>
        <div className={classes.content} dangerouslySetInnerHTML={{ __html: blogData.content }} />
      </div>
    </Wrapper>
  )
}

export default SingleBlog