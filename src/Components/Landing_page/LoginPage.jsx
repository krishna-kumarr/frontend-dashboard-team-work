import React, { useState } from "react";
import "./LoginPage.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


export const LoginPage = () =>{
    const users=[
        {
            username:'Vedha',
            password:'App@123',
            rank:'superadmin'
        },
        {
            username:'Shreya',
            password:'App@123',
            rank:'superadmin'
        },
        {
            username:'Sanjana',
            password:'App@123',
            rank:'superadmin'
        },
        {
            username:'Siva kumar',
            password:'App@123',
            rank:'superadmin'
        },
        {
            username:'Angu siva',
            password:'App@123',
            rank:'admin'
        },
        {
            username:'sakthi',
            password:'App@123',
            rank:'admin'
        },
        {
            username:'Krishna kumar',
            password:'App@123',
            rank:'developer'
        },
        {
            username:'Suresh krishna',
            password:'App@123',
            rank:'developer'
        },
        {
            username:'Pradeep',
            password:'App@123',
            rank:'developer'
        },
        {
            username:'Trainee1',
            password:'App@123',
            rank:'trainee'
        }
    ]

    const pageRender=useNavigate()
    const [loginInput,setLoginInput]=useState({
        username:'',
        password:''
    })

    const handleLoginInput=(e)=>{
        setLoginInput({...loginInput,[e.target.name]:e.target.value})
    }

    const handleLoginAuthentication=()=>{
        if(loginInput.username!=='' && loginInput.password!==''){
            var username=loginInput.username.charAt(0).toUpperCase()+loginInput.username.slice(1)

            var getUserLevel=users.filter((v,i)=>{
                return v.username===username
            })

            if(getUserLevel.length>0){
                if(getUserLevel[0].username===username){
                    if(getUserLevel[0].password===loginInput.password){
                        if(getUserLevel[0].rank==="superadmin"){
                            toast.success("Login success")
                            setTimeout(()=>{
                                pageRender("/super_admin")
                            },6000)
                        }
                        else if(getUserLevel[0].rank==="admin"){
                            toast.success("Login success")
                            setTimeout(()=>{
                                pageRender("/admin")
                            },6000)
                        }
                        else if(getUserLevel[0].rank==="developer"){
                            toast.success("Login success")
                            setTimeout(()=>{
                                pageRender("/developer")
                            },6000)
                        }
                        else{
                            toast.success("Login success")
                            setTimeout(()=>{
                                pageRender("/trainee")
                            },6000)
                        }
                    }
                    else{
                        toast.error("Invalid password")
                    }
                }
                else{
                    toast.error("Login id incorrect")
                }
            }
            else{
                toast.error("No user found")
            }
        }
        else{
            toast.error("Some fields are missing")
        }
    }

    return(
        <div class="login-background">

            <ToastContainer />

            <div class="col-lg-7 col-xl-5 vh-100 login-parent-div">
                <div className="col-10 col-md-8 login-div-leftside">
                    <form className="login-text">
                        <h2 className="fw-bold mb-3 login-text">Login</h2>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label text-light login-mandatory">Username<span className="ps-2">*</span></label>
                            <input type="text" class="form-control login-input py-3" id="exampleInputEmail1" placeholder="Username" name="username" onChange={handleLoginInput} autoFocus/>
                        </div>
                        <div class="mb-4">
                            <label for="exampleInputPassword1" class="form-label text-light login-mandatory">Password<span className="ps-2">*</span></label>
                            <input type="password" class="form-control login-input py-3" id="exampleInputPassword1" placeholder="Password" name="password" onChange={handleLoginInput}/>
                        </div>
                        <button type="button" class="btn col-12 py-3 submit-button" onClick={handleLoginAuthentication}>Submit</button>
                    </form>
                </div> 
            </div>
        </div>
    )
}