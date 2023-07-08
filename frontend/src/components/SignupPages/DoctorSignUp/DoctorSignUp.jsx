import React from 'react'
import classes from './DoctorSignUp.module.css'
import LeftPart from './LeftPart/LeftPart'
import RightPart from './RightPart/RightPart'


const DoctorSignUp = () => {
  return (
    <div className={classes.main}>
      <div className={classes.Box}>
      <LeftPart/>
      <RightPart/>
      </div>
    </div>
  )
}

export default DoctorSignUp