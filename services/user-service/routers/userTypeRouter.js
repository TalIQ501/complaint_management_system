import { Router } from "express";
import { userTypeCreateController } from "../controllers/userTypeControllers/userTypeCreateController.js";
import { userTypeGetAllController } from "../controllers/userTypeControllers/userTypeGetAllController.js";
import { userTypePatchController } from "../controllers/userTypeControllers/userTypePatchController.js";
import { userTypeGetOneController } from "../controllers/userTypeControllers/userTypeGetOneController.js";
import { userTypeDeleteController } from "../controllers/userTypeControllers/userTypeDeleteController.js";

export const userTypeRouter = Router();

userTypeRouter.get('/', userTypeGetAllController)
userTypeRouter.post('/create', userTypeCreateController)
userTypeRouter.get('/:id', userTypeGetOneController)
userTypeRouter.patch('/:id', userTypePatchController)
userTypeRouter.delete('/:id', userTypeDeleteController)