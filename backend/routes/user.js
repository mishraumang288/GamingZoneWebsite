import express from "express";
import { login, logout, register } from "../controllers/user.js";

const Router = express.Router();

Router.route("/register").post(register);
Router.route("/login").post(login);
Router.route("/logout").post(logout);

export default Router;
