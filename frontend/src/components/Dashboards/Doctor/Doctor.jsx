import React from 'react'
import classes from './Doctor.module.css'
import pic from '../../../assets/images/patient.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventIcon from '@mui/icons-material/Event';
import DuoIcon from '@mui/icons-material/Duo';
import { Button } from '@mui/material'
import ReviewsIcon from '@mui/icons-material/Reviews';
import SettingsIcon from '@mui/icons-material/Settings';
import { Routes,Route, useNavigate } from 'react-router-dom';
import Setting from './Screens/Setting';
import Reviews from './Screens/Reviews';
import OnlineAppointments from './Screens/OnlineAppointments';
import AllAppointments from './Screens/AllAppointments';
import Profile from './Screens/Profile';
import TodaysAppointment from './Screens/TodaysAppointment';
import Welcome from './Screens/Welcome';
const Doctor = () => {
    const Navigate=useNavigate()
    const NavItems=[
    {name:"Profile",icon:<AccountCircleIcon/>,path:"profile"},
    {name:"Todays Appointment",icon:<EventIcon/>,path:"todayAppointments"},
    {name:"All Appointment",icon:<CalendarMonthIcon/>,path:"allAppointments"},
    {name:"Online Appointments",icon:<DuoIcon/>,path:"onlineAppointments"},
    {name:"Reviews",icon:<ReviewsIcon/>,path:"reviews"},
    {name:"Settings",icon:<SettingsIcon/>,path:"settings"},]
    
    return (
        <>
            <div className={classes.Container}>
        <div className={classes.leftMain}>
        <div>
        <div className={classes.InfoBox}>
            <img src={pic} className={classes.img}/>
            <p>Dr Talal Zafar</p>
        </div>
        <div className={classes.NavBox}>
            {
                NavItems.map((e,i)=>(
                    <Button size="small" startIcon={e.icon} onClick={()=>Navigate(`${e.path}`)} sx={{color:"white",display:"flex",justifyContent:"left",marginTop:"4px",width:"100%",fontFamily:"Helvetica"}}>{e.name}</Button>
                    ))
                }
                </div>
            </div>
        
        <Button size="small" sx={{color:"white",width:"100%",fontFamily:"Helvetica"}} startIcon={<LogoutIcon/>}>Logout</Button>

        </div>

        <div className={classes.RightMain}>
        <Routes>
            <Route path="/" element={<Welcome/>}/>
            <Route path="profile" element={<Profile/>}/>
            <Route path="todayAppointments" element={<TodaysAppointment/>}/>
            <Route path="allAppointments" element={<AllAppointments/>}/>
            <Route path="onlineAppointments" element={<OnlineAppointments/>}/>
            <Route path="reviews" element={<Reviews/>}/>
            <Route path="settings" element={<Setting/>}/>
        </Routes>
        </div>

    </div>
    </>
  )
}

export default Doctor