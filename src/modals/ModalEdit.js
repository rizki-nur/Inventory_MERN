import React from "react";
import { Modal } from "react-bootstrap";
import { ModalBody } from "react-bootstrap";

const ModalEditProduct = ({ show, handleClose, updateProductData, setData, editValue, categories }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Data Product</Modal.Title>
      </Modal.Header>
      <ModalBody>
        <form className="needs-validation" noValidate>
          <div className="row g-3">
            <div className="col-12">
              <label htmlFor="productName" className="form-label">Nama Produk</label>
              <input type="text" className="form-control" id="productName" name="productName" value={editValue.productName} onChange={setData} required />
            </div>

            <div className="col-12">
              <label htmlFor="category" className="form-label">Kategori</label>
              <select className="form-control" id="category" name="category" value={editValue.category} onChange={setData} required>
                <option value="">-- Pilih Kategori --</option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.categoryName}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-12">
              <label htmlFor="unit" className="form-label">Unit</label>
              <input type="text" className="form-control" id="unit" name="unit" value={editValue.unit} onChange={setData} required />
            </div>

            <div className="col-12">
              <label htmlFor="orderPrice" className="form-label">Harga Beli</label>
              <input type="number" className="form-control" id="orderPrice" name="orderPrice" value={editValue.orderPrice} onChange={setData} required />
            </div>

            <div className="col-12">
              <label htmlFor="sellingPrice" className="form-label">Harga Jual</label>
              <input type="number" className="form-control" id="sellingPrice" name="sellingPrice" value={editValue.sellingPrice} onChange={setData} required />
            </div>

            <div className="col-12">
              <label htmlFor="stock" className="form-label">Stock</label>
              <input type="number" className="form-control" id="stock" name="stock" value={editValue.stock} onChange={setData} required />
            </div>
          </div>

          <button onClick={updateProductData} className="w-100 btn btn-primary btn-lg" type="submit">
            Update
          </button>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default ModalEditProduct;
