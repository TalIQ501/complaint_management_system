import { Router } from "express";
import { authController } from "../controllers/authController.js";
import { userCreateController } from "../controllers/userCreateController.js";
import { userGetAllController } from "../controllers/userGetAllController.js";

export const router = Router();

router.post('/auth/login', authController)

router.get('/users/', userGetAllController)

router.post('/users/create', userCreateController)