import React, { useState } from 'react';
import classes from './Slider.module.css';
import Wrapper from '../../shared/Wrapper/Wrapper'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Parallax,EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/parallax';
import 'swiper/css/effect-coverflow';
import BlogBox from '../../shared/BlogBox/BlogBox';
import {BlogsData} from '../../../data/data'


const Slider = () => {
  return (
    <section>
    <Wrapper>
      <div className={classes.mainContainer}>

            <div className={classes.Heading}>
                <h1>Top Trendings </h1>
                <div className={classes.Line}></div>
            </div>
        <Swiper
        grabCursor={true}
        slidesPerView={1}
        centeredSlides={true}
        cssMode={true}
        modules={[Navigation,EffectCoverflow, Pagination, Scrollbar, A11y]}
        spaceBetween={60} 
        navigation
        loop={true}
        className="mySwiper"
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}  
        onSlideChange={() => console.log('slide change')}
    >
      {BlogsData.map((e,i)=>{
        console.log(e.tags)
                    return(
                      <>
                        {e.tags.includes("latest")&&<div key={i}>
                        <SwiperSlide><BlogBox linkTo={`/blogs/${e.title}`} key={i} latest={true} data={e.content} title={e.title} date={e.date} author={e.author} read={e.read} img={e.img} slug={e.slug} /></SwiperSlide>
                        </div>}
                      </>
                    )
                  })}
      
    </Swiper>
      </div>
    </Wrapper>
    </section>
  )
}

export default Slider