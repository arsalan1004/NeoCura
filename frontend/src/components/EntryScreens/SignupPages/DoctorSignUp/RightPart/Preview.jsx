import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import EastIcon from "@mui/icons-material/East";
import WestIcon from '@mui/icons-material/West';
import axios from 'axios';
import classes from "./RightPart.module.css";
import { Button, MenuItem } from "@mui/material";
import { personalInfoData } from "../../../../../data/SignUpData/data";

const Preview = ({ setModal, modal, prevSection }) => {
  const Submit=()=>{
    axios.post("https://localhost:300",modal).then((res)=>{
      console.log("succes")
    }).catch((err)=>{
      console.log("failed")
    })
    console.log({message:"submitted",data:modal})
  }
  
  return (
    <div className={classes.main}>
      <div className={classes.ContentBox}>
        <h2>Preview</h2>
        <p>Enter your personal information to get register</p>
        {/* <div className={classes.inputMainBox}>
          {personalInfoData.map((e, i) => (
            <TextField
              error={!!formErrors[e.name]}
              helperText={formErrors[e.name]}
              key={i}
              onChange={(e) => {
                HandleChange(e);
              }}
              select={e.select}
              value={PersonalInfo[e.name]}
              required={e.required}
              label={e.label}
              name={e.name}
              type={e.type}
            >
              {e.select &&
                e.selectList.map((j, l) => <MenuItem value={j}>{j}</MenuItem>)}
            </TextField>
          ))}
        </div> */}
      </div>

      <div className={classes.btnBox}>
            <div className={classes.btnLeft}>
                <Button variant="contained" sx={{width:"140px",fontSize:"16px"}} onClick={prevSection} startIcon={<WestIcon/>} >Previous</Button>
            </div>
            {/* <div className={classes.btnRight}>
                <Button variant="contained" sx={{width:"140px",fontSize:"16px"}} onClick={handleSubmit} endIcon={<EastIcon/>} >Next</Button>
            </div> */}
            <div className={classes.btnRight}>
                <Button variant="contained" sx={{ backgroundColor:"green",width:"140px",fontSize:"16px"}} onClick={Submit} endIcon={<EastIcon/>} >SignUP</Button>
            </div>
      </div>
    </div>
  );
};

export default Preview;
