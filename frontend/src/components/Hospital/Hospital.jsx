import React from "react";
import classes from './Hospital.module.css';
import HospitalPage from "./HospitalPage/HospitalPage";
import Context from "../../Context/Context";



const Hospital = () => {

    // const HospitalData = {
        
    //         "hospitalId": "3",
    //         "name": "Indus Hospital",
    //         "averageFees": "4000",
    //         "totalDoctors": "120",
    //         "branches": [
    //             {
    //                 "hosBranchId": "4",
    //                 "city": "Karachi",
    //                 "street": "Korangi",
    //                 "postalCode": "45678",
    //                 "email": "indus.korangi45678@gmail.com",
    //                 "contactNumber": "03001234567"
    //             }
    //         ]
        
    // }


    const HospitalData = {
        "hospitalId": "3",
        "name": "Indus Hospital",
        "averageFees": "4000",
        "totalDoctors": "120",

        "branches": [
            {
                "name": "Indus Hospital",
                "location": "Korangi, Karachi",
                "fees": "1141",
                "postalCode": "45678",
                "email": "indus.korangi45678@gmail.com",
                "timetable": [
                    {
                        "Monday": "12:00 pm - 04:00 pm",
                        "Tuesday": "12:00 pm - 04:00 pm",
                        "Wednesday": "12:00 pm - 04:00 pm",
                        "Thursday": "12:00 pm - 04:00 pm",
                        "Friday": "",
                        "Saturday": "11:00 am - 03:00 pm",
                        "Sunday": "11:00 am - 03:00 pm"
                    }
                ]
            }
        ]
    }


    return (
        <div className={classes.Hospital}>
            <Context.Provider value={{HospitalData}}>
                <HospitalPage />
            </Context.Provider>
        </div>
    )
}

export default Hospital;