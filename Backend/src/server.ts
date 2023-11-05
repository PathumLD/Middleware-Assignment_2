import express from "express";
import { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { config } from "../config";

import homeRoutes from "./routes/home";



const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", homeRoutes);


app.use("/memberDashboard", memberDashboardRoutes);
app.use("/memberDietPlan", memberDietPlanRoutes);
app.use("/memberAppointment", memberAppointmentRoutes);
app.use("/payments", paymentRoutes);

const port = config.server.port;

app.listen(port,  () => {
  console.log(`server is running on port ${port}.`);
});
