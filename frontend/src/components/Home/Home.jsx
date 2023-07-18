<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import classes from "./Home.module.css";
import vid from "../../assets/images/HomeImages/homeVideo.mp4";
import SearchBar from "./SearchBar";
import LocationBar from "./LocationBar";
import HomeCard from "../shared/HomeCard/HomeCard";
import Wrapper from '../shared/Wrapper/Wrapper'
import Symtoms from "./Symtoms";
import Disease from "./Disease";
import Blog from "./Blog";
=======
import React, { useRef, useEffect } from "react";
import classes from './Home.module.css';
import { Link } from "react-router-dom";
>>>>>>> 4f098213e63799d12458cd1b31dc315632048890

import v2 from '../../assets/images/HomePage/bgv1.mp4';

const Home = () => {
<<<<<<< HEAD
 
const CardData=[
  {title:"Instant Video Consultation",desc:"Provinf you doctor at your home",img:"onlinedr"},
  {title:"Find Doctors Near You",desc:"Bringing You the Best in Healthcare: Uniting Informative Articles in One Comprehensive Hub",img:"doc"},
  {title:"Hospitals",desc:"Healing Lives, Building Hope: Your Path to Wellness",img:"hospital"},
  // {title:"Laboratories",desc:"Discover Lab Locations: Convenient Access to Comprehensive Diagnostics in One Place",img:"lab"},
  {title:"Health Blogs",desc:"Bringing You the Best in Healthcare: Uniting Informative Articles in One Comprehensive Hub",img:"blog"},
]
  return (
    <div className={classes.Home}>
      <video src={vid} className={classes.Video} autoPlay muted loop />
        <h1>Find The Best Doctor Near You</h1>
      <div className={classes.SerachBarContainer}>
        <LocationBar/>
        <SearchBar/>
      </div>
      <Wrapper>
        <div className={classes.Lowersection}>
        <h1>How can we help you Today?</h1>
        <div className={classes.CardBox}>
          {CardData.map((e,i)=>(
                <HomeCard key={i} title={e.title} desc={e.desc} img={e.img} />
          ))}
      </div>
      <div className={classes.IconMainContainer}>
        <Symtoms/>
        <Disease/>
      </div>
      <Blog/>
      </div>
      </Wrapper>
    </div>
  );
};
=======
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('ended', handleVideoEnd);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, []);

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <div className={classes.Home}>
      <video ref={videoRef} autoPlay muted className={classes.vid}>
        <source src={v2} type="video/mp4" />
      </video>
      {/* <section className={classes.Parallax}>
                <h1>NEOCURA HOMEPAGE</h1>
                <img src={item2} />
                <img src={item1} />
            </section> */}
    </div>
  );
}
>>>>>>> 4f098213e63799d12458cd1b31dc315632048890

export default Home;
