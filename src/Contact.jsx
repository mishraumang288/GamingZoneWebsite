import React, { useState } from "react";

import Form from "./Form";
import axios from "axios";
const BaseURL = "http://localhost:5000/api/v1/contact/contactus";

function Contact() {

  const [email, setemail] = useState("");
    const [phone, setPhone] = useState("");
    const [data, setData] = useState("");

  const handleContact = () =>{
    try{
        axios.post(BaseURL,{"email":"umang@gmail.com","phonenumber":"12345678"}).then((response)=>{
            alert(response.data);
            // alert(response.data);
        }).catch((error)=>{
            alert(error);
            // alert(error);

        })

    }catch(err){
        alert(err);

      }
}

// const handleChangeEmail=(event)=>{
//     setemail(event.target.value);
// }
// const handleChangePhone=(event)=>{
//   setPhone(event.target.value);
// }

  return (
    <div className="my-5">
      <h1 className="text-center">Contact Us</h1>
      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form action="">
              <div class="mb-3">
              
                <Form
                  label="Contact No.:"
                  type="text"
                  name="contactNo"
                  placeholder="Enter Contact No."
                  onChange={event => setemail(event.target.value)}
                />

                <Form
                  label="Email:"
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  onChange={event => setPhone(event.target.value)}

                />
                <h2 style={{fontSize:"16px",marginTop:"25px",cursor:"pointer"}}>{data} </h2>

              </div>


              <div class="mb-3">
          

              </div>
              <div class="col-12">
                <button className="btn btn-outline-primary" onClick={handleContact} >
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;