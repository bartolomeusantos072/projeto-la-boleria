import { Router } from "express";
import { clientsValidate } from "../middlewares/clientsValidate.js";
import {validateSchema} from '../middlewares/validateSchema.js';
import { clientsSchema } from "../schemas/clientsSchema.js";
import {createClients, getClientsIdOrders} from "../controller/createClients.js";


const clientsRouter =Router();

clientsRouter.post('/clients', 
    validateSchema(clientsSchema), 
    clientsValidate,
    createClients
    );
clientsRouter.get('/clients/:id/orders',getClientsIdOrders)

export default clientsRouter;