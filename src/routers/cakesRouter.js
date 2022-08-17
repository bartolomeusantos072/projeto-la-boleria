import { Router } from "express";
import { cakeValidate } from "../middlewares/cakeValidate.js";
import {validateSchema} from '../middlewares/validateSchema.js';
import { cakeSchema } from "../schemas/cakeSchema.js";
import {createCake} from "../controller/createCake.js";


const cakesRouter =Router();

cakesRouter.post('/cakes', 
    validateSchema(cakeSchema), 
    cakeValidate,
    createCake
    );


export default cakesRouter;