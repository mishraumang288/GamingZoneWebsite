import express from "express";
import Router from "./routes/user.js";
import ContactRouter from "./routes/contact.js";
import cors from "cors";
export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", Router);
app.use("/api/v1/contact", ContactRouter);
