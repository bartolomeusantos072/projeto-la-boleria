import { Router } from "express";
import { orderValidate } from "../middlewares/orderValidate.js";
import {validateSchema} from '../middlewares/validateSchema.js';
import {dateValidate} from '../middlewares/dateValidate.js';
import { orderSchema } from "../schemas/orderSchema.js";
import {createOrder, getOrders, getOrdersId} from "../controller/orderController.js";




const orderRouter = Router();

orderRouter.post('/order', validateSchema(orderSchema),  orderValidate,  createOrder);
orderRouter.get('/orders?', dateValidate, getOrders)
orderRouter.get('/orders/:id', getOrdersId)


export default orderRouter;