import { Router } from "express";
import PostData, { getAllTweets } from "../controllers/tweets.controllers.js";

const tweetRoutes = Router();

tweetRoutes.get("/", getAllTweets);

tweetRoutes.post("/", PostData)

export default tweetRoutes;
