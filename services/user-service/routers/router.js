import { Router } from "express";
import { authController } from "../controllers/authControllers/authController.js";
import { userCreateController } from "../controllers/userTypeControllers/userCreateController.js";
import { userGetAllController } from "../controllers/userTypeControllers/userGetAllController.js";
import { userPatchController } from "../controllers/userTypeControllers/userPatchController.js";
import { userGetOneController } from "../controllers/userTypeControllers/userGetOneController.js";
import { userDeleteController } from "../controllers/userTypeControllers/userDeleteController.js";

export const router = Router();

router.post('/auth/login', authController)

router.get('/users/', userGetAllController)

router.post('/users/create', userCreateController)

router.get('/users/:id', userGetOneController)

router.patch('/users/:id', userPatchController)

router.delete('/users/:id', userDeleteController)