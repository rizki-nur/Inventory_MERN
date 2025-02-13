import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    categoryName:{
        type: String,
        require: true
    }
});

const Categories = mongoose.model('categories', categorySchema);
export default Categories;