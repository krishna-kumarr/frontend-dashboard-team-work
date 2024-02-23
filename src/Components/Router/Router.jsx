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
import { DeveloperDashboardHeader } from "../Developer/Developer_reusable_jsx/DeveloperDashboardHeader";
import { DeveloperHomePage } from "../Developer/DeveloperHomePage";
import { DeveloperRoadMapPage } from "../Developer/DeveloperRoadMapPage";
import { DeveloperSecurityPracticesPage } from "../Developer/DeveloperSecurityPracticesPage";
import { DeveloperProjectPage } from "../Developer/DeveloperProjectPage";
import { DeveloperBlogsARticlesPage } from "../Developer/DeveloperBlogs&Articles";
import { TraineeDashboardHeader } from "../Trainee/Trainee_reusable_jsx/TraineeDashboardHeader";
import { TraineeHomePage } from "../Trainee/TraineeHomePage";
import { TraineeRoadMapPage } from "../Trainee/TraineeRoadMapPage";
import { TraineeSecurityPracticesPage } from "../Trainee/TraineeSecurityPracticesPage";
import { TraineeBlogsARticlesPage } from "../Trainee/TraineeBlogs&Articles";
import { SuperAdminHeader } from "../Super_Admin/Superadmin_reusable_jsx/SuperAdminHeader";
import { SuperAdminHomePage } from "../Super_Admin/SuperAdminHomePage";
import { SuperAdminRoadMapPage } from "../Super_Admin/SuperAdminRoadMapPage";
import { SuperAdminSecurityPracticesPage } from "../Super_Admin/SuperAdminSecurityPracticesPage";
import { SuperAdminProjectPage } from "../Super_Admin/SuperAdminProjectPage";
import { SuperAdminBlogsARticlesPage } from "../Super_Admin/SuperAdminBlogs&Articles";

export const ReactRouter = () =>{

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
            </Routes>
            <Routes>             
                <Route path="/super_admin" element={<><SuperAdminHeader/><section className="main-content-default-height-width" id="adminDashboard"><SuperAdminHomePage/></section></>}/>
                <Route path="/super_admin/road-map" element={<><SuperAdminHeader/><section className="main-content-default-height-width" id="adminDashboard"><SuperAdminRoadMapPage/></section></>}/>
                <Route path="/super_admin/security-practices" element={<><SuperAdminHeader/><section className="main-content-default-height-width" id="adminDashboard"><SuperAdminSecurityPracticesPage/></section></>}/> 
                <Route path="/super_admin/projects" element={<><SuperAdminHeader/><section className="main-content-default-height-width" id="adminDashboard"><SuperAdminProjectPage/></section></>}/>
                <Route path="/super_admin/blogs&articles" element={<><SuperAdminHeader/><section className="main-content-default-height-width" id="adminDashboard"><SuperAdminBlogsARticlesPage/></section></>}/>
            </Routes> 
            <Routes>             
                <Route path="/admin" element={<><DashboardHeader/><section className="main-content-default-height-width" id="adminDashboard"><AdminHomePage/></section></>}/>
                <Route path="/admin/road-map" element={<><DashboardHeader/><section className="main-content-default-height-width" id="adminDashboard"><AdminRoadMapPage/></section></>}/>
                <Route path="/admin/security-practices" element={<><DashboardHeader/><section className="main-content-default-height-width" id="adminDashboard"><AdminSecurityPracticesPage/></section></>}/>
                <Route path="/admin/trainee" element={<><DashboardHeader/><section className="main-content-default-height-width" id="adminDashboard"><AdminTraineePage/></section></>}/>
                <Route path="/admin/projects" element={<><DashboardHeader/><section className="main-content-default-height-width" id="adminDashboard"><AdminProjectPage/></section></>}/>
                <Route path="/admin/blogs&articles" element={<><DashboardHeader/><section className="main-content-default-height-width" id="adminDashboard"><AdminBlogsARticlesPage/></section></>}/>
            </Routes> 
            <Routes>             
                <Route path="/developer" element={<><DeveloperDashboardHeader/><section className="main-content-default-height-width" id="adminDashboard"><DeveloperHomePage/></section></>}/>
                <Route path="/developer/road-map" element={<><DeveloperDashboardHeader/><section className="main-content-default-height-width" id="adminDashboard"><DeveloperRoadMapPage/></section></>}/>
                <Route path="/developer/security-practices" element={<><DeveloperDashboardHeader/><section className="main-content-default-height-width" id="adminDashboard"><DeveloperSecurityPracticesPage/></section></>}/>
                <Route path="/developer/projects" element={<><DeveloperDashboardHeader/><section className="main-content-default-height-width" id="adminDashboard"><DeveloperProjectPage/></section></>}/>
                <Route path="/developer/blogs&articles" element={<><DeveloperDashboardHeader/><section className="main-content-default-height-width" id="adminDashboard"><DeveloperBlogsARticlesPage/></section></>}/>
            </Routes> 
            <Routes>             
                <Route path="/trainee" element={<><TraineeDashboardHeader/><section className="main-content-default-height-width" id="adminDashboard"><TraineeHomePage/></section></>}/>
                <Route path="/trainee/road-map" element={<><TraineeDashboardHeader/><section className="main-content-default-height-width" id="adminDashboard"><TraineeRoadMapPage/></section></>}/>
                <Route path="/trainee/security-practices" element={<><TraineeDashboardHeader/><section className="main-content-default-height-width" id="adminDashboard"><TraineeSecurityPracticesPage/></section></>}/>
                <Route path="/trainee/blogs&articles" element={<><TraineeDashboardHeader/><section className="main-content-default-height-width" id="adminDashboard"><TraineeBlogsARticlesPage/></section></>}/>
            </Routes>  
        </BrowserRouter>
    )
}