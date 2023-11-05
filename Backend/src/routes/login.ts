import express from "express";
import { login } from "src/controllers/login";

const router = express.Router();

router.post("/", login );


export default router;