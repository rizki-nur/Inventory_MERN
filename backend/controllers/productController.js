import Products from "../models/productSchema.js";

// Fungsi untuk generate kode produk
const generateProductCode = async (productName) => {
    // Ambil 2 huruf pertama dari nama produk (jika kurang dari 2 huruf, default "XX")
    const prefix = productName.substring(0, 2).toUpperCase() || "XX";

    // Generate 3 angka acak (100 - 999)
    const randomNumber = Math.floor(100 + Math.random() * 900);

    // Gabungkan kode
    return `${prefix}${randomNumber}`;
};

const getProducts = async (req, res) => {
    try {
        const getDataProd = await Products.find();
        res.json(getDataProd);
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getProductById = async (req, res) => {
    try {
        const getIDProd = await Products.findById(req.params.id);
        if (!getIDProd) {
            return res.status(404).json({message: "Product not found!!"});
        }
        res.json(getIDProd);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const postProducts = async (req, res) => {
    const { productName, category, unit, orderPrice, sellingPrice, stock } = req.body;

    if (!productName || !category || !unit || !orderPrice || !sellingPrice || !stock) {
        return res.status(400).json("Data tidak boleh kosong!!");
    }

    try {
        const sudahAddProduct = await Products.findOne ({ productName : productName });
        if (sudahAddProduct) {
            return res.status(400).json("Produk sudah ada!!")
        } else {
            
            // ✅ Generate kode produk otomatis
            const productCode = await generateProductCode(productName);

            const inputProduct = new Products({
                productName,
                productCode,
                // category: category.categoryName,  // ✅ Simpan nama kategori, bukan _id
                category,
                unit,
                orderPrice,
                sellingPrice,
                stock
            });
            await inputProduct.save();
            res.status(201).json(inputProduct);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const product = await Products.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product Not Found!!!" });
        }

        const updatedProduct = await Products.findByIdAndUpdate(req.params.id, req.body, {new: true});

        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const deleteDataProd = await Products.findByIdAndDelete(req.params.id);
        if (!deleteDataProd) {
            return res.status(404).json({ message: "Product not found!!" });
        }
        res.status(200).json(deleteDataProd);
    } catch (error) {
        res.status(400).json({ message: "Product failed to deleted" });
    }
}


export { 
    getProducts, 
    getProductById, 
    postProducts,
    deleteProduct,
    updateProduct
}; // ✅ ES Module export
