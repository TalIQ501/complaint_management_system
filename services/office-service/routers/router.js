import { Router } from "express";
import { officeRouter } from "./officeRouter.js";
import { officeAllocRouter } from "./officeAllocRouter.js";
import { buildingRouter } from "./buildingRouter.js";

export const routerIndex = Router();

routerIndex.use('/offices', officeRouter)
routerIndex.use('/office-alloc', officeAllocRouter)
routerIndex.use('/buildings', buildingRouter)