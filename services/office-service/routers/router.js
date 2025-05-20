import { Router } from "express";
import { officeRouter } from "./officeRouter.js";
import { officeAllocRouter } from "./officeAllocRouter.js";

export const routerIndex = Router();

routerIndex.use('/offices', officeRouter)
routerIndex.use('/officealloc', officeAllocRouter)