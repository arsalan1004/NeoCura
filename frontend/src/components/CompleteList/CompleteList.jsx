import React, {useState} from 'react';
import classes from './CompleteList.module.css';
import ListCard from './ListCard/ListCard';
import { cities } from '../../StateData/NavData/NavData';
import {Link, useLocation} from 'react-router-dom';

const CompleteList = () => {

    const [selectedName, setSelectedName] = useState('');
    const location = useLocation();
    

    const scrollToCities = (selectionName) => {
        const citiesSec = document.getElementById('cities');
        citiesSec.scrollIntoView({behavior: 'smooth'});
        setSelectedName(selectionName);
    }

    const [specialities, setSpecialities] = useState(
       [
            { name: 'Cardiologist', noOfDr: 30 },
            { name: 'Dermatologist', noOfDr: 25 },
            { name: 'Pediatrician', noOfDr: 40 },
            { name: 'Orthopedic Surgeon', noOfDr: 15 },
            { name: 'Gastroenterologist', noOfDr: 20 },
            { name: 'Ophthalmologist', noOfDr: 18 },
            { name: 'Psychiatrist', noOfDr: 35 },
            { name: 'Neurologist', noOfDr: 28 },
            { name: 'ENT Specialist', noOfDr: 22 },
            { name: 'Endocrinologist', noOfDr: 12 },
            { name: 'Urologist', noOfDr: 10 },
            { name: 'Pulmonologist', noOfDr: 19 },
            { name: 'Oncologist', noOfDr: 16 },
            { name: 'Radiologist', noOfDr: 24 },
            { name: 'General Surgeon', noOfDr: 32 },
            { name: 'Family Physician', noOfDr: 45 },
            { name: 'Nephrologist', noOfDr: 14 },
            { name: 'Rheumatologist', noOfDr: 11 },
            { name: 'Dentist', noOfDr: 50 },
            { name: 'Allergist', noOfDr: 9 },
       ]
    );


    return(
        <div className={classes.CompleteList}>
            
            <div className={classes.ListItems}>
                {
                    specialities.map((speciality, index) => {
                        return(
                            <ListCard 
                                    key={index} 
                                    heading={speciality.name} 
                                    para={speciality.noOfDr} 
                                    scroll = {scrollToCities}
                                    
                            />
                        )
                    })
                }
            </div>
          
            <div className={classes.Cities} id='cities' >

                <h1>Choose a city</h1>
                
                <div className={classes.Card}>
                   {
                        cities.map((city, index) => (
                        <Link to={(`${location.pathname.substring('/CompleteList'.length)}/${selectedName}/${city}`) }>
                            <p>
                                {city}
                            </p>
                        </Link>
                        
                    
                    ))
                    }    
                </div>

                    
                   


            </div>

        </div>
    );
};

export default CompleteList;  