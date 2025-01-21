import { Router } from "express";
import { getDataSection } from "../controller/redisController.js";

const redisRouter = Router();

redisRouter.get('/', getDataSection);

export default redisRouter;