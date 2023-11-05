import express from "express";
import { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { config } from "../config";

import leavesRoutes from "./routes/leaves";

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//leave
app.use("/leaves", leavesRoutes);



const port = config.server.port;

app.listen(port,  () => {
  console.log(`server is running on port ${port}.`);
});
