import { Router } from "express";
import getOneUses from "../controllers/user.controllers.js";


const usersRoute = Router();
usersRoute.get("/:username", getOneUses);

export default usersRoute;