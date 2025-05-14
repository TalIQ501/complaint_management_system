import { Router } from "express";
import { authRouter } from "./authRouter.js";
import { usersRouter } from "./userRouter.js";

export const serviceRouter = Router();

serviceRouter.use('/auth', authRouter)
serviceRouter.use('/users', usersRouter)

