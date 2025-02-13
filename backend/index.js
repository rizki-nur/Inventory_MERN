import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoute.js"; // ✅ Pastikan pakai '.js' di akhir
import categoryRoutes from "./routes/categoryRoute.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/products", productRoutes);
app.use("/categories", categoryRoutes)

// MongoDB Connection
mongoose
    .connect(process.env.Database, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Database MongoDB connected"))
    .catch((err) => console.error("Database MongoDB connection error:", err));

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
