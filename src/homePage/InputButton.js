import React, { useState, useEffect } from 'react';
import ModalAdd from '../modals/ModalAdd';

const InputButton = () => {
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [inputValue, setInputValue] = useState({
    productName: "",
    productCode: "",
    category: "",  // Akan diisi dengan ID kategori yang dipilih
    unit: "",
    orderPrice: "",
    sellingPrice: "",
    stock: ""
  });

  const [categories, setCategories] = useState([]); // ✅ Simpan data kategori

  useEffect(() => { 
    const fetchCategories = async () => {
      try {
        const res = await fetch('http://localhost:5000/categories/fetch-all'); // ✅ Fetch dari backend
        const data = await res.json();
        setCategories(data); // ✅ Simpan kategori ke state
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const setData = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addProductData = async (e) => {
    e.preventDefault();
    const { productName, category, unit, orderPrice, sellingPrice, stock } = inputValue;

    const res = await fetch('http://localhost:5000/products/create', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productName, category, unit, orderPrice, sellingPrice, stock }),
    });

    const data = await res.json();
    if (res.status === 400 || !data) {
      alert('Error menambahkan produk');
    } else {
      setInputValue({ productName: '', category: '', unit: '', orderPrice: '', sellingPrice: '', stock: '' });
      alert("Produk berhasil ditambahkan");
      setShowModalAdd(false);
    }
  };

  return (
    <div>
      <button type='button' className='btn btn-md text-white my-1' style={{ backgroundColor: 'black' }} onClick={() => setShowModalAdd(true)}>
        Add
      </button>

      <ModalAdd
        show={showModalAdd}
        handleClose={() => setShowModalAdd(false)}
        addProductsData={addProductData}
        setData={setData}
        inputValue={inputValue}
        categories={categories} // ✅ Kirim data kategori ke modal
      />
    </div>
  );
};

export default InputButton;
