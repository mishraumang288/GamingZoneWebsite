import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
import axios from "axios";

const BaseURL = "http://localhost:5000/api/v1/login";

function Login() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [data, setData] = useState("");
    const navigation=useNavigate();

    const handleLogin = () =>{
        try{
            axios.post(BaseURL,{"email":"umang@gmail.com","password":"12345678"}).then((response)=>{
                alert(response.data);
            }).catch((error)=>{
                alert(error);
            })

        }catch(err){
            alert(err);
        }
    }

    const handleChangeEmail=(event)=>{
        setemail(event.target.value);
    }
    const handleChangePassword=(event)=>{
        setpassword(event.target.value);
    }
  return (
    <div className="my-5">
      <h1 className="text-center" style={{fontWeight:"700"}}>Login</h1>
      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form action="">
              <div class="mb-3">
                

                <Form
                  label="Email:"
                  type="email"
                  name="Email"
                  placeholder="Enter Email"
                    onChange={handleChangeEmail}
                />

                <Form
                  label="Password :"
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  onChange={handleChangePassword}
                />

<h2 style={{fontSize:"16px",marginTop:"25px",cursor:"pointer"}}>{data} </h2>

                <h2 style={{fontSize:"16px",marginTop:"25px",cursor:"pointer", color:"#0bbcf3"}}onClick={()=>{navigation("/register")}}>Don't have account? Register here ! </h2>

                
              </div>

              <div class="mb-3">
          

              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit" onClick={handleLogin}>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;