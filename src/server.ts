import express from "express";
import { router } from "./router";


export const app = express();
export const PORT = 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router)
