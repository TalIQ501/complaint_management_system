import { Router } from "express";
import { createCompanyController } from '../controllers/createCompanyController.js';
import { getAllCompanyController } from '../controllers/getAllCompanyController.js';
import { getOneCompanyController } from '../controllers/getOneCompanyController.js';
import { deleteCompanyController } from '../controllers/deleteCompanyController.js';
import { patchCompanyController } from "../controllers/patchCompanyController.js";

export const router = Router()

router.post('/create', createCompanyController);

router.get('/', getAllCompanyController);

router.get('/:id', getOneCompanyController)

router.patch('/:id', patchCompanyController);

router.delete('/:id', deleteCompanyController);