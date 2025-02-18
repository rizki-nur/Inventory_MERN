import jwt from "jsonwebtoken";
import User from "../models/authSchema.js";

const authMiddleware = async (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1];

    if (!token) return res.status(401).json({ message: "Akses ditolak, token tidak ada" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select("-password");
        next();
    } catch (error) {
        res.status(401).json({ message: "Token tidak valid" });
    }
};

export default authMiddleware;
