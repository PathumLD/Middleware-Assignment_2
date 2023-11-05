import express from "express";
import cors from "cors";
import { config } from "../config";

import LoginRoutes from "./routes/login";
import RegisterRoutes from "./routes/register";

const app = express();
app.use(cors());
app.use(express.json());

// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "stl"
// })

app.use("/login", LoginRoutes);
app.use("/register", RegisterRoutes);

app.listen(8081, ()=> {
    console.log("listening. Server is running on port 8081");
})