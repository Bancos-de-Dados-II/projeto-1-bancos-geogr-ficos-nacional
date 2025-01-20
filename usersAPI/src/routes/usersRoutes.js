import { Router } from "express";
import { findByEmail, save, findRoleByEmail } from "../controller/usersController.js";

const routes = Router();

//set routes

//espera receber o email
routes.get('/:email', findByEmail);

//espera receber um JSON com name, email e password
routes.post('/', save);

//espera receber um email
routes.get('/roles/:email', findRoleByEmail);

export default routes;