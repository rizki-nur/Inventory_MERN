import express from "express";
import { getProducts, getProductById, postProducts, deleteProduct, updateProduct } from "../controllers/productController.js";

const router = express.Router();

router.get("/fetch-all", getProducts);
router.get("/fetch/:id", getProductById);
router.post("/create", postProducts);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct)
export default router; // ✅ Gunakan 'export default' untuk ES Module
