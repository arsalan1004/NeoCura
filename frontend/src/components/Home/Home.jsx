import React, { useRef, useEffect } from "react";
import classes from './Home.module.css';
import { Link } from "react-router-dom";

import v2 from '../../assets/images/HomePage/bgv1.mp4';

const Home = () => {
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

export default Home;
