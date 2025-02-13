import express from "express";
import { postCategories, getCategories, deleteCategory } from "../controllers/categoryController.js";

const router = express.Router();

router.get("/fetch-all", getCategories);
router.post("/create", postCategories);
router.delete("/delete/:id", deleteCategory);

export default router;