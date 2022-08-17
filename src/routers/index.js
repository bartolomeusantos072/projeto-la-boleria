import { Router } from "express";
import cakesRouter from "./cakesRouter.js";
import clientsRouter from "./clientsRouter.js";
import orderRouter from "./orderRouter.js";

const router=Router();

router.use(cakesRouter);
router.use(clientsRouter);
router.use(orderRouter);
export default router;