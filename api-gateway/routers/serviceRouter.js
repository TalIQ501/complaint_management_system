import { Router } from "express";
import { authRouter } from "./authRouter.js";
import { usersRouter } from "./userRouter.js";
import { userTypeRouter } from "./userTypeRouter.js";

export const serviceRouter = Router();

serviceRouter.use('/auth', authRouter)
serviceRouter.use('/users', usersRouter)
serviceRouter.use('/usertype', userTypeRouter)

