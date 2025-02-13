import React, { useState, useEffect } from "react";
import axios from "axios";
import InputButton from "../homePage/InputButton";
import CategoryButton from "../homePage/CategoryButton";
import { use } from "react";
import EditButton from "../homePage/EditButton";

const ListProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [editProducts, setEditProducts] = useState([]);
  const [editModal, showEditModal] = useState(false);


  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products/fetch-all");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const getCategories = async () => {
    try {
      const res = await fetch("http://localhost:5000/categories/fetch-all");
      const data = await res.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/products/delete/${id}`);
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.error("Produk gagal dihapus...", error);
    }
  };

  return (
    <div className="container">
      <h2>TABEL PRODUK</h2>
      <InputButton />
      <CategoryButton />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product Code</th>
            <th scope="col">Product Name</th>
            <th scope="col">Category</th>
            <th scope="col">Unit</th>
            <th scope="col">Order Price</th>
            <th scope="col">Selling Price</th>
            <th scope="col">Stock</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            const category = categories.find((cat) => cat._id === product.category);

            return (
              <tr key={product._id}>
                <td>{index + 1}</td>
                <td>{product.productCode}</td>
                <td>{product.productName}</td>
                <td>{category ? category.categoryName : "Kategori tidak ditemukan"}</td> {/* ✅ Tampilkan nama kategori */}
                <td>{product.unit}</td>
                <td>{product.orderPrice}</td>
                <td>{product.sellingPrice}</td>
                <td>{product.stock}</td>
                <td>
                  <EditButton product={product}/>
                  <button className="btn btn-danger" onClick={() => handleDelete(product._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListProducts;
