import express from "express";
import { config } from "../config";




const app = express();






const port = config.server.port;

app.listen(port,  () => {
  console.log(`server is running on port ${port}.`);
});
