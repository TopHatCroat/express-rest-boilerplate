import express from "express";

import noteRouter from "./note";

const router = express.Router();

router.use((req, res, next) => {
    res.header("Content-Type", "application/json");
    next();
});

router.use("/note", noteRouter);

export default router;
