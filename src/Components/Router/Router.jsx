import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminHomePage } from "../AdminDashboard/AdminHomePage";
import { AdminProjectPage } from "../AdminDashboard/AdminProjectPage";
import { AdminRoadMapPage } from "../AdminDashboard/AdminRoadMapPage";
import { AdminSecurityPracticesPage } from "../AdminDashboard/AdminSecurityPracticesPage";
import { AdminTraineePage } from "../AdminDashboard/AdminTraineePage";
import { AdminBlogsARticlesPage } from "../AdminDashboard/AdminBlogs&Articles";
import { DashboardSidebar } from "../Reusable-jsx/DashboardSidebar";
import { DashboardHeader } from "../Reusable-jsx/DashboardHeader";

export const ReactRouter = () =>{

    return(
        <BrowserRouter>
             <DashboardHeader/>
            <DashboardSidebar/>
            <Routes>
                <Route path="/" element={<AdminHomePage/>}/>
                <Route path="/admin/road-map" element={<AdminRoadMapPage/>}/>
                <Route path="/admin/security-practices" element={<AdminSecurityPracticesPage/>}/>
                <Route path="/admin/trainee" element={<AdminTraineePage/>}/>
                <Route path="/admin/projects" element={<AdminProjectPage/>}/>
                <Route path="/admin/blogs&articles" element={<AdminBlogsARticlesPage/>}/>
            </Routes> 
        </BrowserRouter>
    )
}