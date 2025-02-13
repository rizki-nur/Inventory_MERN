import Categories from "../models/categorySchema.js";

// POST CATEGORY
const postCategories = async (req, res) => {
    const {categoryName} = req.body;

    try {
        const sudahAddCategory = await Categories.findOne ({ categoryName: categoryName });
        if (sudahAddCategory) {
            return res.status(400).json("Kategori sudah ada!!")
        } else {
            const inputCategory = new Categories({categoryName});
            await inputCategory.save();
            res.status(201).json(inputCategory);
        }
    } catch (err) {
        res.status(500).json({ message:err.message });
    }
};

// Fetch-all
const getCategories = async (req, res) => {
    try {
        const getDataCategory = await Categories.find();
        res.json(getDataCategory);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// Delete
const deleteCategory = async (req, res) => {
    try {
        const deleteDataCategory = await Categories.findByIdAndDelete(req.params.id);
        if (!deleteDataCategory) {
            return res.status(400).json({ message: "Category not found!!"});
        }
        res.status(200).json(deleteCategory);
    } catch (error) {
        res.status(400).json({ message: "Category failed to deleted" });
    }
}

export {
    postCategories,
    getCategories,
    deleteCategory
}