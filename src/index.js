import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import categoriesRouter from "./routes/categoriesRouter.js";
import gamesRouter from "./routes/gamesRouter.js";
import customersRouter from "./routes/customersRouter.js";
import rentalsRouter from "./routes/rentalsRouter.js";

dotenv.config();

const server = express();

server.use(express.json());
server.use(cors());

server.use(categoriesRouter);
server.use(gamesRouter);
server.use(customersRouter);
server.use(rentalsRouter);

const PORT = process.env.PORT;

server.listen(PORT, () => console.log("Server is listening on port."));