import express from "express";
import dotenv from "dotenv";
import tweetRoutes from "./routers/tweets.js";
import usersRoute from "./routers/user.js";

dotenv.config();

const { PORT } = process.env;

const app = express();

app.use(express.json());

app.use("/tweets", tweetRoutes);

app.use("/users", usersRoute)

app.listen(PORT);
