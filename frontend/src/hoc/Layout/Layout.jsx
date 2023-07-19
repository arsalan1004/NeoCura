import React from "react";
import Toolbar from "../../Navigation/Toolbar/Toolbar";
import classes from './Layout.module.css';
import {Outlet} from 'react-router-dom';
import Footer from "../../components/Layout/Footer/Footer";

const Layout = () => {
    return (
            <>
                <div className={classes.Toolbar}>
                    <Toolbar />
                </div>
               
                <div className={classes.Outlet}>
                    <Outlet /> 
                </div>
                <Footer/>

            </>
        );
}

export default Layout;