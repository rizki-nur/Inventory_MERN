import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap';
import { ModalBody } from 'react-bootstrap';

const ModalCategories = ({
    show, 
    handleClose, 
    addCategoryData, 
    setCategory, 
    categoryValue
}) => {

const [categories, setCategories] = useState([]);

useEffect(() => {
    getCategories();
}, []);
    
const getCategories = async () => {
    try{
    const response = await axios.get("http://localhost:5000/categories/fetch-all");
        setCategories(response.data);
    } catch (error) {
    console.error("Error fetching categories", error);
    }
}

const handleDelete = async (id) => {
    try {
        await axios.delete(`http://localhost:5000/categories/delete/${id}`);
        setCategories(categories.filter((category) => category._id !== id));
    } catch (error) {
        console.error("Kategori gagal dihapus...", error);
    }
}


  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Tambah Kategori</Modal.Title>
        </Modal.Header>
        <ModalBody>
            <div className=''>
            <form className='needs-validation' noValidate>
                <div className='row g-3'>
                    <div className='col-12'>

                        {/* Kolom Input Kategori */}
                        {/* <label htmlFor='categoryName' className='form-label'>
                            Nama Kategori
                        </label> */}

                        <input 
                            type='text'
                            className='form-control'
                            id='categoryName'
                            name='categoryName'
                            value={categoryValue.categoryName}
                            onChange={setCategory}
                            placeholder='Kategori...'
                            required
                        />
                        

                    </div>
                        {/* Button */}
                        <button
                            onClick={addCategoryData}
                            className='w-100 btn btn-primary btn-lg'
                            type='button'
                        > Tambah </button>

                    {/* Tabel categori */}
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col">Category List</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody class="table-group-divider">
                            {categories.map((category, index) => (
                                <tr key={category._id}>
                                    <td>{ index + 1 }</td>
                                    <td>{ category.categoryName }</td>
                                    <td>
                                        <button
                                        className='btn btn-danger'
                                        onClick={() => handleDelete(category._id)}
                                        style={{ marginLeft: "10px" }}
                                        > Delete </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        </table>        
                </div>
            </form>
            </div>
        </ModalBody>
    </Modal>
  )
}

export default ModalCategories;