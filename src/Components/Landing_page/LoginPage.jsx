import React from "react";
import "./LoginPage.css";


export const LoginPage = () =>{

    return(
        <div class="login-background">
            <div class="col-lg-7 col-xl-5 vh-100 login-parent-div">
                <div className="col-10 col-md-8 login-div-leftside">
                    <form className="login-text">
                        <h2 className="fw-bold mb-3 login-text">Login</h2>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label text-light login-mandatory">Username<span className="ps-2">*</span></label>
                            <input type="email" class="form-control login-input py-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username" autoFocus/>
                        </div>
                        <div class="mb-4">
                            <label for="exampleInputPassword1" class="form-label text-light login-mandatory">Password<span className="ps-2">*</span></label>
                            <input type="password" class="form-control login-input py-3" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <button class="btn col-12 py-3 submit-button">Submit</button>
                    </form>
                </div> 
            </div>
        </div>
    )
}