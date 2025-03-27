import express from "express";
import notesController from "../controllers/notesController.js"
const router = express.Router();

router.get("/", notesController.getAll);
router.get("/:id", notesController.getById);
router.post("/", notesController.create);
router.put("/:id", notesController.update);
router.delete("/:id", notesController.delete);

export default router;
