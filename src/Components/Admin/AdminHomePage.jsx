import React, { useEffect } from "react";
import "../Admin/Admin_css/AdminSidebar.css"
import "../Admin/Admin_css/AdminHomePage.css"
import { DashboardHeader } from "./Admin_reusable_jsx/DashboardHeader";
import { Outlet } from "react-router-dom";

export const AdminHomePage = () =>{

    return(
        <> 
                <div class="home-height main-content py-2 header-default-background" >
                    <h4>Home Components</h4>
                </div>
                <Outlet/>
      </>
    )
}