import React, { useState } from "react";
import Form from "./Form";
import axios from "axios";

const BaseURL = "http://localhost:5000/api/v1/register";

function Register() {

    const [email, setemail] = useState("");
    const [name, setName] = useState("");
    const [password, setpassword] = useState("");
    const [data, setData] = useState("");

    const handleRegister = () =>{
        try{

            axios.post(BaseURL,{"name":"umang","email":"umang@gmail","password":"12345678"}).then((response)=>{
               alert(response.data);
                // setData(response.data);
            }).catch((error)=>{
               alert(error);
                // setData(error);
            })
        }catch(err){
            alert(err);
            // setData(err);
        }
    }

    const handleChangeName=(event)=>{
        setName(event.target.value);
    }
    const handleChangeEmail=(event)=>{
        setemail(event.target.value);
    }
    const handleChangePassword=(event)=>{
        setpassword(event.target.value);
    }

  return (
    <div className="my-5">
      <h1 className="text-center" style={{fontWeight:"700"}}>Create New Account</h1>
      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form action="">
              <div class="mb-3">
                
              <Form
                  label="Name:"
                  type="text"
                  name="Name"
                  placeholder="Enter Full Name"
                  onChange={handleChangeName}
                />

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

                
              </div>

              <div class="mb-3">
          

              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit" onClick={handleRegister}>
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;