import express from "express";

import Controller from "./controller";

const router = express.Router();
const controller = new Controller();

router.get("/", controller.getAll);
router.get("/:noteId", controller.getById);
router.post("/", controller.create);
router.delete("/:noteId", controller.delete);

export default router;
