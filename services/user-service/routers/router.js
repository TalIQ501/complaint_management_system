import { Router } from "express";
import { authController } from "../controllers/authControllers/authController.js";
import { userCreateController } from "../controllers/userControllers/userCreateController.js";
import { userGetAllController } from "../controllers/userControllers/userGetAllController.js";
import { userPatchController } from "../controllers/userControllers/userPatchController.js";
import { userGetOneController } from "../controllers/userControllers/userGetOneController.js";
import { userDeleteController } from "../controllers/userControllers/userDeleteController.js";

export const router = Router();

router.post('/auth/login', authController)

router.get('/users/', userGetAllController)

router.post('/users/create', userCreateController)

router.get('/users/:id', userGetOneController)

router.patch('/users/:id', userPatchController)

router.delete('/users/:id', userDeleteController)