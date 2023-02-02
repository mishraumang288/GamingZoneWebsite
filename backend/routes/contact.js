import express from "express";

import ContactUs from "../models/contact.model.js";
const Router = express.Router();

Router.route("/contactus").post((req, res) => {
  const email = req.body.email;
  const phonenumber = req.body.phonenumber;

  // if (checkUserExist(email)) {
  //   return res.status(400).json("User Already Exist");
  // }

  const newUser = new ContactUs({ email, phonenumber });

  newUser
    .save()
    .then(() => res.json("Request Sent!"))
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

export default Router;
