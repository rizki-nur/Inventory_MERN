import React, { useState } from 'react'
import ModalCategories from '../modals/ModalCategories';

const CategoryButton = () => {
const [showModalCategories, setShowModalCategories] = useState(false);
const [categoryValue, setCategoryValue] = useState({categoryName: ""});

const setCategory = (e) => {
  console.log(e.target.name, e.target.value); // Cek apakah event berjalan
  const { name, value } = e.target;
  setCategoryValue((prevValue) => ({
      ...prevValue,
      [name]: value,
  }));
};

const addCategoryData = async (e) => {
  e.preventDefault();
  console.log("Submitting:", categoryValue); // Debugging

  const { categoryName } = categoryValue;
  const res = await fetch('http://localhost:5000/categories/create', {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoryName }),
  });

  const data = await res.json();
  console.log("Response:", res.status, data); // Cek response API

  if (res.status === 400 || !data) {
      alert('error');
  } else {
      setCategoryValue({ categoryName: '' });
      alert('Jenis Kategori Berhasil Ditambah');
      setShowModalCategories(false);
  }
};


//navigasi modal
const handleNavigation = (path) => {
    setShowModalCategories(true);
};

const handleClose = () => setShowModalCategories(false);

  return (
    <div>
      <button
        type='button'
        className='btn btn-md text-white my-1'
        style={{ backgroundColor: 'black' }}
        onClick={() => handleNavigation('')}
      > Edit Category </button>

      <ModalCategories
        show={showModalCategories}
        handleClose={handleClose}
        addCategoryData={addCategoryData}
        setCategory={setCategory}
        categoryValue={categoryValue}
      />
    </div>
  )
}

export default CategoryButton;