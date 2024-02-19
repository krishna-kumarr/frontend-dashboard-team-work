import React, { useEffect, useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RxMoon } from "react-icons/rx";
import { BsSun } from "react-icons/bs";
// import "../../App.css"

export const DashboardHeader = () =>{
    const handleMenuToogle = () =>{
        document.getElementById('header-toggle').classList.toggle('bx-x')
        document.getElementById('nav-bar').classList.toggle('extend-sidebar')
        document.getElementById('body-pd').classList.toggle('body-pd')
        document.getElementById('header').classList.toggle('body-pd')
        document.getElementById("adra-logo-responsive").classList.toggle("adra-logo-shrink")    
    }   

    const [defaultTheme,setDefaultTheme] = useState(true)
    const toggleTheme = () =>{
        setDefaultTheme(!defaultTheme)
    }

    useEffect(()=>{
        const selectedTheme = localStorage.getItem("selectedTheme");
        if(defaultTheme && selectedTheme==="light"){
            setDarkMode();
            setDefaultTheme(true)
        }
        else{
            setLightMode();
            setDefaultTheme(false)
        }
    },[defaultTheme])


    const setDarkMode = () =>{
        document.querySelector('body').setAttribute("data-theme","dark");
        localStorage.setItem("selectedTheme","dark");
    }

    const setLightMode = () =>{
        document.querySelector('body').setAttribute("data-theme","light");
        localStorage.setItem("selectedTheme","light");
    }

    return(
        <nav class="header header-default-background" id="header">
            <div class="header_toggle ps-4" id="header-toggle" onClick={handleMenuToogle}> 
                <CgMenuLeft className="fs-3"/>
            </div>
            <ul className="d-inline-flex col-10 col-sm-7 col-md-5 col-lg-3 col-xl-2 m-0 align-items-center header-ul">
                <li className="notification m-0 col">
                    <span className="fs-5 pointer"><IoMdNotificationsOutline/></span>
                    <div className="notification-content shadow col-8 col-md-5 col-lg-4">

                    </div>
                </li>
                <li className="col">
                    {
                        defaultTheme ? 
                            <BsSun onClick={toggleTheme} className="theme-icon-color fs-5 pointer"/>
                        :
                            <RxMoon onClick={toggleTheme} className="theme-icon-color fs-5 pointer"/>
                    }
                </li>
                <li className="header_img pointer profile">
                    <img src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_640.png" alt="user-image"/> 
                    <div className="ps-3">
                            <h6 className="m-0">Adra product</h6>
                            <p className="m-0 important-heading">Admin</p>
                        </div>
                    <div className="profile-content shadow col-8 col-md-5 col-lg-2">

                    </div>
                </li>
            </ul>
        </nav> 
    )
}