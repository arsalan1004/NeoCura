import React from 'react'
import classes from './LeftPart.module.css'


const LeftPart = () => {
  return (
    <div className={classes.main}>
      <h2>Step 1</h2>
      <p>Enter your personal information to get register</p>
      <div className={classes.ListBox}>
        <div className={classes.ListItem}>
          <div className={classes.Number}>1</div>
          <p>Personal Information</p>
        </div>
        <div className={classes.ListItem}>
          <div className={classes.Number}>2</div>
          <p>Eduaction</p>
        </div>
        <div className={classes.ListItem}>
          <div className={classes.Number}>3</div>
          <p>Work Expierence</p>
        </div>
        <div className={classes.ListItem}>
          <div className={classes.Number}>4</div>
          <p>User Photo</p>
        </div>
      </div>
    </div>
  )
}

export default LeftPart