import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import classes from './RightPart.module.css'
import { Button } from '@mui/material';

const RightPart = () => {
    const[dataNo,setDataNo]=useState(0)
    const data=[
    {
    title:"Your personal information",
    para:"Enter your personal information to get register",
    fieldNames:["FirstName","LastName","Email","Phone Number","Address","Password"]
    },
    {
    title:"Education",
    para:"Enter your personal information to get register",
    fieldNames:["LastName","Email","Phone Number","Address","Password"]
    },
    {
    title:"Work Expiernce",
    para:"Enter your personal information to get register",
    fieldNames:["FirstName","Address","Password"]
    },
    {
    title:"Upload Photo",
    para:"Enter your personal information to get register",
    fieldNames:["Email","Phone Number","Address","Password"]
    },
]   
    const newSection=()=>{
        setDataNo(dataNo+1)
    }
    const prevSection=()=>{
        setDataNo(dataNo-1)
    }
    const submit=()=>{
        window.alert("suzzessfully submitted")
    }
    return (
    <div className={classes.main}>
        <div className={classes.ContentBox}>
            <h2>{data[dataNo].title}</h2>
            <p>{data[dataNo].para}</p>
            <div className={classes.inputMainBox}>
                {
                    data[dataNo].fieldNames.map((e,i)=><TextField required type="string" label={e} />
                    )}
            </div>
        </div>

        <div className={classes.btnBox}>
        {dataNo>0&&<div className={classes.btnLeft}>
        <Button variant="contained" sx={{width:"140px",fontSize:"16px"}} onClick={prevSection} startIcon={<WestIcon/>} >Previous</Button>
        </div>}
        { dataNo<3?<div className={classes.btnRight}>
        <Button variant="contained" sx={{width:"140px",fontSize:"16px"}} onClick={newSection} endIcon={<EastIcon/>} >Next</Button>
        </div>:
        <div className={classes.btnRight}>
        <Button variant="contained" sx={{ backgroundColor:"green",width:"140px",fontSize:"16px"}} onClick={submit} endIcon={<EastIcon/>} >SignUP</Button>
        </div>}
        </div>

    </div>
  )
}

export default RightPart