import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName:{
        type: String,
        required: true
    },
    productCode:{
        type: String,
        required: true,
        unique: true
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories",
        required: true
    },
    unit:{
        type: String,
        required: true
    },
    orderPrice:{
        type: Number,
        required: true
    },
    sellingPrice:{
        type: Number,
        required: true
    },
    stock:{
        type: Number,
        required: true,
        min:0
    }
});

const Products = mongoose.model('products', productSchema); //nama collection
export default Products; // ✅ Pakai ES Module