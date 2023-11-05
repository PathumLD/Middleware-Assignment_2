import express from "express";
import { register } from "src/controllers/register";

const router = express.Router();

router.post("/", register);


export default router;