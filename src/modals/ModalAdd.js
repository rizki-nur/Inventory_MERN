import React from 'react';
import { Modal } from "react-bootstrap";
import { ModalBody } from 'react-bootstrap';

const ModalAdd = ({ show, handleClose, addProductsData, setData, inputValue, categories }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Input Data Product</Modal.Title>
      </Modal.Header>
      <ModalBody>
        <form className='needs-validation' noValidate>
          <div className='row g-3'>
            {/* Nama Produk */}
            <div className='col-12'>
              <label htmlFor='productName' className='form-label'>Nama Produk</label>
              <input type='text' className='form-control' id='productName' name='productName' value={inputValue.productName} onChange={setData} placeholder='Nama Produk' required />
            </div>

            {/* Dropdown Kategori */}
            <div className='col-12'>
              <label htmlFor='category' className='form-label'>Kategori</label>
              <select className='form-control' id='category' name='category' value={inputValue.category} onChange={setData} required>
                <option value=''>-- Pilih Kategori --</option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.categoryName}
                  </option>
                ))}
              </select>
            </div>

            {/* Unit */}
            <div className='col-12'>
              <label htmlFor='unit' className='form-label'>Unit</label>
              <input type='text' className='form-control' id='unit' name='unit' value={inputValue.unit} onChange={setData} required />
            </div>

            {/* Harga Beli */}
            <div className='col-12'>
              <label htmlFor='orderPrice' className='form-label'>Harga Beli</label>
              <input type='number' className='form-control' id='orderPrice' name='orderPrice' value={inputValue.orderPrice} onChange={setData} required />
            </div>

            {/* Harga Jual */}
            <div className='col-12'>
              <label htmlFor='sellingPrice' className='form-label'>Harga Jual</label>
              <input type='number' className='form-control' id='sellingPrice' name='sellingPrice' value={inputValue.sellingPrice} onChange={setData} required />
            </div>

            {/* Stock */}
            <div className='col-12'>
              <label htmlFor='stock' className='form-label'>Stock</label>
              <input type='number' className='form-control' id='stock' name='stock' value={inputValue.stock} onChange={setData} placeholder='0000' required />
            </div>
          </div>

          {/* Submit Button */}
          <button onClick={addProductsData} className='w-100 btn btn-primary btn-lg' type='submit'>
            Submit
          </button>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default ModalAdd;
