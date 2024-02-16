import React, { useEffect, useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RxMoon } from "react-icons/rx";
import { BsSun } from "react-icons/bs";
import "../../App.css"

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
        <header class="header header-default-background" id="header">
            <div class="header_toggle ps-4 col-2 col-md-1" id="header-toggle" onClick={handleMenuToogle}> 
                <CgMenuLeft className="fs-3"/>
            </div>
            <div class="col-6 col-sm-3 col-md-3 col-lg-2 d-flex flex-wrap justify-content-end align-items-center"> 
                <div className="col">
                    <span><IoMdNotificationsOutline className="fs-5 pointer"/></span>
                </div>
                <div className="col">
                    {
                        defaultTheme ? 
                            <RxMoon onClick={toggleTheme} className="theme-icon-color fs-5 pointer"/>
                        :
                            <BsSun onClick={toggleTheme} className="theme-icon-color fs-5 pointer"/>
                    }
                </div>
                <div className="header_img pointer">
                    <img src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_640.png" alt="user-image"/> 
                </div>
            </div>
        </header>
    )
}