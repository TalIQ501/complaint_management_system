import { Router } from "express";
import { authController } from "../controllers/authController.js";
import { userCreateController } from "../controllers/userCreateController.js";
import { userGetAllController } from "../controllers/userGetAllController.js";
import { userPatchController } from "../controllers/userPatchController.js";
import { userGetOneController } from "../controllers/userGetOneController.js";
import { userDeleteController } from "../controllers/userDeleteController.js";

export const router = Router();

router.post('/auth/login', authController)

router.get('/users/', userGetAllController)

router.post('/users/create', userCreateController)

router.get('/users/:id', userGetOneController)

router.patch('/users/:id', userPatchController)

router.delete('/users/:id', userDeleteController)