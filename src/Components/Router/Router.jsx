import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminProjectPage } from "../Admin/AdminProjectPage";
import { AdminRoadMapPage } from "../Admin/AdminRoadMapPage";
import { AdminSecurityPracticesPage } from "../Admin/AdminSecurityPracticesPage";
import { AdminTraineePage } from "../Admin/AdminTraineePage";
import { AdminBlogsARticlesPage } from "../Admin/AdminBlogs&Articles";

import "../Admin/Admin_css/AdminSidebar.css"
import { AdminHomePage } from "../Admin/AdminHomePage";
import { DashboardHeader } from "../Admin/Admin_reusable_jsx/DashboardHeader";
import { LoginPage } from "../Landing_page/LoginPage";

export const ReactRouter = () =>{

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
            </Routes>
             
            <Routes>             
                <Route path="/admin" element={<><DashboardHeader/><section className="main-content-default-height-width" id="adminDashboard"><AdminHomePage/></section></>}/>
                <Route path="/admin/road-map" element={<><DashboardHeader/><section className="main-content-default-height-width" id="adminDashboard"><AdminRoadMapPage/></section></>}/>
                <Route path="/admin/security-practices" element={<><DashboardHeader/><section className="main-content-default-height-width" id="adminDashboard"><AdminSecurityPracticesPage/></section></>}/>
                <Route path="/admin/trainee" element={<><DashboardHeader/><section className="main-content-default-height-width" id="adminDashboard"><AdminTraineePage/></section></>}/>
                <Route path="/admin/projects" element={<><DashboardHeader/><section className="main-content-default-height-width" id="adminDashboard"><AdminProjectPage/></section></>}/>
                <Route path="/admin/blogs&articles" element={<><DashboardHeader/><section className="main-content-default-height-width" id="adminDashboard"><AdminBlogsARticlesPage/></section></>}/>
            </Routes> 
 
        </BrowserRouter>
    )
}