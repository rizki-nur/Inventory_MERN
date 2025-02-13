import React, { useState, useEffect } from "react";
import ModalEdit from "../modals/ModalEdit";

const EditButton = ({ product }) => {
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [editValue, setEditValue] = useState({
    productName: product.productName,
    productCode: product.productCode,
    category: product.category,
    unit: product.unit,
    orderPrice: product.orderPrice,
    sellingPrice: product.sellingPrice,
    stock: product.stock
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("http://localhost:5000/categories/fetch-all");
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const setData = (e) => {
    const { name, value } = e.target;
    setEditValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const updateProductData = async (e) => {
    e.preventDefault();

    const { productName, category, unit, orderPrice, sellingPrice, stock } = editValue;

    try {
      const res = await fetch(`http://localhost:5000/products/update/${product._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productName, category, unit, orderPrice, sellingPrice, stock }),
      });

      if (res.ok) {
        alert("Produk berhasil diperbarui!");
        setShowModalEdit(false);
      } else {
        alert("Gagal memperbarui produk.");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div>
      <button className="btn btn-warning" onClick={() => setShowModalEdit(true)}>
        Edit
      </button>

      <ModalEdit
        show={showModalEdit}
        handleClose={() => setShowModalEdit(false)}
        updateProductData={updateProductData}
        setData={setData}
        editValue={editValue}
        categories={categories}
      />
    </div>
  );
};

export default EditButton;
