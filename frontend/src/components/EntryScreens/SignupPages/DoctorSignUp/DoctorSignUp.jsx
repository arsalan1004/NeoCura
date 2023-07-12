import React, { useState } from 'react'
import classes from './DoctorSignUp.module.css'
import LeftPart from './LeftPart/LeftPart'
import PersonalInfo from './RightPart/PersonalInfo'
import Education from './RightPart/Education'
import Clinic from './RightPart/Clinic'
import Hospital from './RightPart/Hospital'
import UploadPic from './RightPart/UploadPic'
import Preview from './RightPart/Preview'


const DoctorSignUp = () => {
  const [allowInfo,setAllowInfo]=useState(false);
  const[Modal,setModal]=useState({
    personalInfo:{},
    educationInfo:{
      pmcNo:'',
      allEducationsList:[{
        educationNo:0,
        degreeName:'',
        universityName:'',
        yearsOfQualification:''
    }]
    },
    clinicInfo:[
      {clinicId:0,
      clinicName:'',
      clinicCity:'',
      clinicWebsite:'',
      clinincEmail:'',
      clinicContact:'',
      clinicAddress:'',
      clinicTimings:{
          monday: { openingTime: '', closingTime: '' },
          tuesday: { openingTime: '', closingTime: '' },
          wednesday: { openingTime: '', closingTime: '' },
          thursday: { openingTime: '', closingTime: '' },
          friday: { openingTime: '', closingTime: '' },
          saturday: { openingTime: '', closingTime: '' },
          sunday: { openingTime: '', closingTime: '' },
      }
  }],
    hospitalInfo:[
      {hospitalId:0,
      hospitalName:'',
      hospitalCity:'',
      hospitalWebsite:'',
      clinincEmail:'',
      hospitalContact:'',
      hospitalAddress:'',
      hospitalTimings:{
          monday: { openingTime: '', closingTime: '' },
          tuesday: { openingTime: '', closingTime: '' },
          wednesday: { openingTime: '', closingTime: '' },
          thursday: { openingTime: '', closingTime: '' },
          friday: { openingTime: '', closingTime: '' },
          saturday: { openingTime: '', closingTime: '' },
          sunday: { openingTime: '', closingTime: '' },
      }
  }],
    otherInfo:{},
    profilePic:{},
  })
  
  
  console.log(Modal)
  const[dataNo,setDataNo]=useState(0)
  const newSection=()=>{
    setDataNo(dataNo+1)
    }
  const prevSection=()=>{
      setDataNo(dataNo-1)
  }
  return (
    <div className={classes.main}>
      <div className={classes.Box}>
      <LeftPart dataNo={dataNo}/>
      {dataNo==0&&<PersonalInfo modal={Modal} setModal={setModal} newSection={newSection} />}
      {dataNo==1&&<Education modal={Modal} setModal={setModal} newSection={newSection} prevSection={prevSection}/>}
      {dataNo==2&&<Clinic allowInfo={allowInfo} setAllowInfo={setAllowInfo} modal={Modal} setModal={setModal} newSection={newSection} prevSection={prevSection}/>}
      {dataNo==3&&<Hospital allowInfo={allowInfo} setAllowInfo={setAllowInfo} modal={Modal} setModal={setModal} newSection={newSection} prevSection={prevSection}/>}
      {dataNo==4&&<UploadPic modal={Modal} setModal={setModal} prevSection={prevSection} newSection={newSection}/>}
      {dataNo==5&&<Preview modal={Modal} prevSection={prevSection}  />}
      </div>
    </div>
  )
}

export default DoctorSignUp