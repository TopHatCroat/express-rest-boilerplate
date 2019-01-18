import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import path from "path";

import rootRouter from "./rootRouter";

dotenv.config();
const app = express();

const corsOptions = {
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 204,
    origin: "*",
    preflightContinue: false,
};
const port = process.env.PORT || 3000;

app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", rootRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
