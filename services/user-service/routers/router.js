import { Router } from "express";
import { authController } from "../controllers/authController.js";
import { userCreateController } from "../controllers/userCreateController.js";

export const router = Router();

router.post('/auth/login', authController)

router.post('/users/create', userCreateController)