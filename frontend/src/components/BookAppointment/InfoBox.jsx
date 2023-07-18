import { Box, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import ReviewsIcon from '@mui/icons-material/Reviews';
import pic from '../../assets/images/dr.jpg'
import classes from './BookAppointment.module.css'
import React from 'react'


const InfoBox = ({name,spec,loc,phone,fees}) => {
  return (
        <div className={classes.infoBox}>
              <img className={classes.Pic} src={pic} alt="Dr pic"/>
                <div className={classes.infoBg}>
                  <h1 >{name}</h1>
                  <Button sx={{color:"white",marginLeft:"10px"}} startIcon={<ReviewsIcon/>}>See Reviews</Button>
                </div>
                <div className={classes.info}>
                  <h6>{spec}</h6>
                  <div className={classes.IconBox}>
                    <LocationOnIcon sx={{color:"#325f8b"}}/> 
                    <p>{loc}</p>
                  </div>
                  <h4>Fee: Rs {fees}</h4>
                  <Button sx={{width:"300px",backgroundColor:"#325f8b"}} startIcon={<PhoneIcon sx={{color:"white",marginRight:"10px"}}/>} variant="contained" >{phone}</Button>
              </div>
            </div>
  )
}

export default InfoBox