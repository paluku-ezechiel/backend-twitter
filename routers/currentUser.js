import { Router } from "express";
import { getcurrentUse } from "../controllers/current.user.controller.js";


const currentuserRoute = Router();
currentuserRoute.get("/", getcurrentUse);

export default currentuserRoute;