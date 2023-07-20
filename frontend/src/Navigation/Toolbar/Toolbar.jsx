import React, { useEffect } from "react";
import classes from './Toolbar.module.css';
import NavigationItems from "../NavigationItems/NavigationItems";
import { Link, useLocation } from "react-router-dom";
import logo from '../../assets/images/HomeImages/logo.png'
 
const Toolbar = () => {
  const location = useLocation()
    
    const currentRoute = location.pathname
  const getCurrentRoute = () => {
    if(currentRoute === '/'){
      return true
    }
    else return false
  }
    useEffect(() => {
        getCurrentRoute()
        changeColor()
      },[currentRoute])
    
      function changeColor() {
        if(window.scrollY <= 100 && getCurrentRoute()){
          document.getElementById("header").style.backgroundColor="rgba(0, 0, 0, 0.759)";
        }
        else if(window.scrollY <= 100){
          document.getElementById("header").style.backgroundColor="#042343ff";
        }
        else if (window.scrollY >= 100) {
          document.getElementById("header").style.backgroundColor="#042343ff";
        } else {
          document.getElementById("header").style.backgroundColor="rgba(0, 0, 0, 0.759)";
        }}
        window.addEventListener("scroll", changeColor);
      
    return (
        <header id="header" className={classes.Toolbar}>
            <Link to={'/'} ><img src={logo} className={classes.logo}/> </Link>
            <nav>
            {/* <svg width="40" height="15" viewBox="0 0 40 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 9L0 0l16.182 13.35a6 6 0 0 0 7.636 0L40 0 20 9z" fill="#fff"></path></svg>
                 */}
                <NavigationItems />
            </nav>
            <div className={classes.Login} >
                <Link to={'/login'} >
                    <button className={classes.Button}>
                      Login Now
                    </button>
                </Link>
                
            </div>
        </header>

        );
}


export default Toolbar;