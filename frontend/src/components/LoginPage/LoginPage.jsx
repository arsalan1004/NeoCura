import React, { useState } from 'react'
import classes from './LoginPage.module.css'
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Box, IconButton, Typography } from '@mui/material';
import Button from '@mui/material/Button';

const LoginPage = () => {
  const[email,setEmail]=useState("")
  const[pass,setPass]=useState("")
  // const[validEmail,]={isUrlValid(validateUrl.url)}
  const[passVisible,setPassVisible]=useState(false)
  const handlePass=()=>{
    setPassVisible(!passVisible)
  }
  console.log(email,pass)
  const [validateUrl, setValid] = useState({ url: 'https://url.com', tempUrl: '' })

 const isUrlValid = (url) => url.length < 2 || !url.includes('.') || !url.startsWith('http')

 const handleSubmit = () => {

 setValid({ url: validateUrl.tempUrl, tempUrl: validateUrl.url })
    }
  return (
    <div className={classes.main}>
      <div className={classes.Box}>
      <div className={classes.userIconBox}>
        <AccountCircleIcon sx={{fontSize:"100px"}} color="primary" />
      </div>
        <div className={classes.loginBox}>
          <div className={classes.mainInputBox}>
            <TextField
            className={classes.inputField}
            required
            placeholder='abc@gmail.com'
            type="email"
            label="Email"
            onChange={(e)=>setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon   color="primary"/>
                </InputAdornment>
              ),
            }}
          />
            <TextField
            error={false}
            required
            className={classes.inputField}
            onChange={(e)=>setPass(e.target.value)}
            placeholder='xxxxxxx'
            type={passVisible?'string':'password'}
            label="Password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon  color="primary" />
                </InputAdornment>
              ),
              endAdornment:(
                <InputAdornment position="end">
                  <IconButton onClick={()=>handlePass()}>
                    {passVisible?<VisibilityOffIcon  color="primary"/>:<VisibilityIcon  color="primary"/>}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <Box sx={{width:"100%",fontSize:"14px"}}>
              <Typography variant="p"><a href="#">Forgot Password ?</a></Typography>
          </Box>
          <Button size='large' sx={{width:"100%",fontSize:"14px",marginTop:"4px",marginBottom:"16px"}} onClick={handleSubmit} variant="contained">Login</Button>
          <Box sx={{fontSize:"14px"}}>
              <Typography variant="p">Don't Have an Account ?  <a href="#"> Sign Up</a></Typography>
          </Box>
          </div>
        </div>
      </div>
      </div>
  )
}

export default LoginPage