import { Router } from "express";
import { authRouter } from "./authRouter.js";
import { usersRouter } from "./userRouter.js";
import { userTypeRouter } from "./userTypeRouter.js";

export const routerIndex = Router();

routerIndex.use('/auth', authRouter)

routerIndex.use('/users', usersRouter)

routerIndex.use('/user-type', userTypeRouter)