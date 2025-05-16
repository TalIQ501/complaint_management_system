import { Router } from "express";
import { userCreateController } from "../controllers/userControllers/userCreateController.js";
import { userGetAllController } from "../controllers/userControllers/userGetAllController.js";
import { userPatchController } from "../controllers/userControllers/userPatchController.js";
import { userGetOneController } from "../controllers/userControllers/userGetOneController.js";
import { userDeleteController } from "../controllers/userControllers/userDeleteController.js";

export const usersRouter = Router();

usersRouter.get('/', userGetAllController)
usersRouter.post('/create', userCreateController)
usersRouter.get('/:id', userGetOneController)
usersRouter.patch('/:id', userPatchController)
usersRouter.delete('/:id', userDeleteController)