import { Router } from "express";
import { getDataSection, setDataSection, removeDataSection } from "../controller/redisController.js";

const redisRouter = Router();

redisRouter.get('/', getDataSection);
redisRouter.post('/', setDataSection);
redisRouter.delete('/', removeDataSection);

export default redisRouter;