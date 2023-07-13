import React from 'react'
import classes from './BookAppointment.module.css'
import Wrapper from '../shared/Wrapper/Wrapper'
import { Box, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import pic from '../../assets/images/dr.jpg'
import InfoBox from './InfoBox';

const BookAppointment = () => {
  const places=["Dow meducal center","Video Consultation","KMDC Hospital"]
  return (
    <div className={classes.bg}>

      <Wrapper>
          <div className={classes.container}>
            <InfoBox name="Dr. Susan S. Park, DDS" spec="General Dentistry" loc="ColumbiaDoctors - 1244 Amsterdam Avenue" phone="709890809"/>
            <div className={classes.bookingBox}>
              <div className={classes.selectLoc}>
              <h3>Select Clinic/Hospital</h3>
              <div className={classes.SelectLocBox}>
                {places.map((e,i)=>{
                  return(
                    <div key={i} className={classes.SelectedLocBox}><p>{e}</p></div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
      </Wrapper>

    </div>
  )
}

export default BookAppointment