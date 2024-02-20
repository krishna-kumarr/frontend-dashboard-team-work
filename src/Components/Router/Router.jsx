import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminHomePage } from "../AdminDashboard/AdminHomePage";
import { AdminProjectPage } from "../AdminDashboard/AdminProjectPage";
import { AdminRoadMapPage } from "../AdminDashboard/AdminRoadMapPage";
import { AdminSecurityPracticesPage } from "../AdminDashboard/AdminSecurityPracticesPage";
import { AdminTraineePage } from "../AdminDashboard/AdminTraineePage";
import { AdminBlogsARticlesPage } from "../AdminDashboard/AdminBlogs&Articles";
import { DashboardHeader } from "../Reusable-jsx/DashboardHeader";
import { LoginPage } from "../Reusable-jsx/LoginPage";
import "../Reusable-css/AdminSidebar.css"

export const ReactRouter = () =>{

    return(
        <BrowserRouter>
            {/* <Routes>
                <Route index element={<LoginPage/>}/>
            </Routes> */}
            <DashboardHeader/>
            <section className="main-content-default-height-width" id="adminDashboard">
                <Routes>
                    <Route path="/" element={<AdminHomePage/>}/>
                    <Route path="/admin/road-map" element={<AdminRoadMapPage/>}/>
                    <Route path="/admin/security-practices" element={<AdminSecurityPracticesPage/>}/>
                    <Route path="/admin/trainee" element={<AdminTraineePage/>}/>
                    <Route path="/admin/projects" element={<AdminProjectPage/>}/>
                    <Route path="/admin/blogs&articles" element={<AdminBlogsARticlesPage/>}/>
                </Routes> 
            </section> 
        </BrowserRouter>
    )
}