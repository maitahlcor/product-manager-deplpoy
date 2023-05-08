import { useState } from 'react';
import './EditProduct.css';

function AddProduct({ onEditProduct, selectedProduct, Products, setIsEditing }) {
  const [editedProduct, setEditedProduct] = useState(selectedProduct);

  const handleUpdate = async (event) => {
    event.preventDefault();

    try {
      const options = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedProduct),
      };

      const url = `${import.meta.env.VITE_BASE_URL}/api/products/:id`;

      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }

    //AQUI DEBO HACER QUE SE EDITE Y UPDATEE EL SELECCIONADO
    Products.map((Product) => {
      if (Product.id === selectedProduct.id) {
        setEditedProduct(Object.assign(Product, editedProduct));
      }
    });
     console.log(editedProduct)
    onEditProduct(editedProduct);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setEditedProduct({
      ...editedProduct,
      [name]: value,
    });
  };

  return (
    <div className='container'>
      <div className='container__title'>
        <h2 className='container__title__text'>Edit Product</h2>
      </div>
      <form className='add-form' onSubmit={handleUpdate}>
        <div>
          <div className='add-form__column'>
            <label className='add-form__label'>Product</label>
            <input
              type='text'
              name='name'
              placeholder='Product name'
              className='add-form__input'
              required
              onChange={handleChange}
              value={editedProduct.name}
            />
          </div>
          <div className='add-form__column'>
          <label className='add-form__label'>Color</label>
            <input
              type='text'
              name='color'
              className='add-form__input'
              placeholder='Add Product Color'
              onChange={handleChange}
              value={editedProduct.color}
              min='1895'
              max='2023'
            />
          </div>
          <div className='add-form__column'>
          <label className='add-form__label'>Category</label>
            <input
              type='text'
              name='category'
              className='add-form__input'
              placeholder='Add Category'
              onChange={handleChange}
              value={editedProduct.category}
            />
          </div>
          <div className='add-form__column'>
            <label className='add-form__label'>Price</label>
              <input
              type='text'
              name='price'
              placeholder='Enter price value'
              className='add-form__input'
              value={editedProduct.price}
              onChange={handleChange}
            />
             
          
          </div>
        </div>
        <div className='buttons'>
          <button type='submit' className='update__button'>
            Update
          </button>
          <button onClick={() => setIsEditing(false)} className='exit__button'>
            Exit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
