import React, { useEffect, useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RxMoon } from "react-icons/rx";
import { BsSun } from "react-icons/bs";
import { TbSitemap } from "react-icons/tb";
import { SiSecurityscorecard } from "react-icons/si";
import { PiUserPlusLight } from "react-icons/pi";
import { IoFolderOutline } from "react-icons/io5";
import { GrArticle } from "react-icons/gr";
import { CiLogout } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";

export const SuperAdminHeader = () =>{
    const handleMenuToogle = () =>{
        document.getElementById('nav-bar').classList.toggle('extend-sidebar')
        document.getElementById('header').classList.toggle('body-pd')
        document.getElementById('adminDashboard').classList.toggle('body-pd')
        document.getElementById("adra-logo-responsive").classList.toggle("adra-logo-shrink")    
        // 'blogsAndarticles'
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



    //nav link
    useEffect(()=>{
        const linkColor = document.querySelectorAll('.nav_link')
        
        function colorLink(){
        if(linkColor){
        linkColor.forEach(l=> l.classList.remove('active'))
        this.classList.add('active')
        }
        }
        linkColor.forEach(l=> l.addEventListener('click', colorLink))
    })


    return(
        <>
            <div class="l-navbar navbar-default-background" id="nav-bar">
                <nav class="nav">
                    <div> 
                        <Link to="/super_admin" class="nav_logo adra-logo-original col-12" id="adra-logo-responsive"> 
                            <img src={require("../../image/adraimage.png")} className="adra-img-logo"/>
                        </Link>

                        <div class="nav_list">
                            <Link to="/super_admin" class="nav_link active"> 
                                <span><RxDashboard className="fs-4"/></span>
                                <span class="nav_name">Dashboard</span> 
                            </Link> 
                            
                            <Link to="/super_admin/road-map" class="nav_link" > 
                                <span><TbSitemap className="fs-4"/></span>
                                <span class="nav_name">Road map</span> 
                            </Link> 

                            <Link to="/super_admin/security-practices" class="nav_link"> 
                                <span><SiSecurityscorecard className="fs-4"/></span>
                                <span class="nav_name">Security practices</span> 
                            </Link> 
                            
                            <Link to="/super_admin/projects" class="nav_link" > 
                                <span><IoFolderOutline className="fs-4"/></span>
                                <span class="nav_name">Projects</span> 
                            </Link> 

                            <Link to="/super_admin/blogs&articles" class="nav_link"> 
                                <span><GrArticle className="fs-4"/></span>
                                <span class="nav_name">Blogs & Articles</span> 
                            </Link> 
                        </div>
                    </div> 

                    <Link to="/" class="nav_link"> 
                        <span><CiLogout className="fs-4"/></span>
                        <span class="nav_name">SignOut</span>
                    </Link>
                </nav>
            </div>

            <nav class="header header-default-background" id="header">
                <div class="ps-4" onClick={handleMenuToogle}> 
                    <CgMenuLeft className="fs-3 pointer"/>
                </div>
                <ul className="d-inline-flex col-10 col-sm-7 col-md-5 col-lg-3 m-0 align-items-center header-ul">
                    <li className="col">
                        {
                            defaultTheme ? 
                                <BsSun onClick={toggleTheme} className="theme-icon-color fs-5 pointer"/>
                            :
                                <RxMoon onClick={toggleTheme} className="theme-icon-color fs-5 pointer"/>
                        }
                    </li>
                    <li className="notification m-0 col">
                        <span className="fs-5 pointer"><IoMdNotificationsOutline/></span>
                        <div className="notification-content shadow col-8 col-md-5 col-lg-4">

                        </div>
                    </li>
                    <li className="header_img pointer profile">
                        <img src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_640.png" alt="user-image"/> 
                        <div className="ps-3">
                                <h6 className="m-0">Adra product</h6>
                                <p className="m-0 important-heading">Super admin view</p>
                            </div>
                        <div className="profile-content shadow col-8 col-md-5 col-lg-2">

                        </div>
                    </li>
                </ul>
            </nav>
        </>
    )
}