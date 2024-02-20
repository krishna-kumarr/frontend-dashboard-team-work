import React, { useEffect } from "react";
import { TbSitemap } from "react-icons/tb";
import { SiSecurityscorecard } from "react-icons/si";
import { PiUserPlusLight } from "react-icons/pi";
import { IoFolderOutline } from "react-icons/io5";
import { GrArticle } from "react-icons/gr";
import { CiLogout } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";
import "../../App.css"

export const DashboardSidebar = () =>{
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

    return (
        <div class="l-navbar navbar-default-background" id="nav-bar">
            <nav class="nav">
                <div> 
                    <Link to="/" class="nav_logo adra-logo-original col-12" id="adra-logo-responsive"> 
                        <img src={require("../image/adraimage.png")} className="adra-img-logo"/>
                    </Link>

                    <div class="nav_list">
                        <Link to="/" class="nav_link active"> 
                            <span><RxDashboard className="fs-4"/></span>
                            <span class="nav_name">Dashboard</span> 
                        </Link> 
                        
                        <Link to="/admin/road-map" class="nav_link" > 
                            <span><TbSitemap className="fs-4"/></span>
                            <span class="nav_name">Road map</span> 
                        </Link> 

                        <Link to="/admin/security-practices" class="nav_link"> 
                            <span><SiSecurityscorecard className="fs-4"/></span>
                            <span class="nav_name">Security practices</span> 
                        </Link> 

                        <Link to="/admin/trainee" class="nav_link" > 
                            <span><PiUserPlusLight className="fs-4"/></span>
                            <span class="nav_name">Trainee</span> 
                        </Link> 
                        
                        <Link to="/admin/projects" class="nav_link" > 
                            <span><IoFolderOutline className="fs-4"/></span>
                            <span class="nav_name">Projects</span> 
                        </Link> 

                        <Link to="/admin/blogs&articles" class="nav_link"> 
                            <span><GrArticle className="fs-4"/></span>
                            <span class="nav_name">Blogs & Articles</span> 
                        </Link> 
                    </div>
                </div> 

                <Link to="/admin/signout" class="nav_link"> 
                    <span><CiLogout className="fs-4"/></span>
                    <span class="nav_name">SignOut</span>
                </Link>
            </nav>
        </div>
    )
}