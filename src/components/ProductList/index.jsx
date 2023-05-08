import './ProductList.css';
import { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

function ProductList({ ProductList = [], onSelectedProduct, onDeleteProduct }) {
  const [updatedProducts, setUpdatedProducts] = useState(ProductList);

  const handleDelete = async (id) => {
    try {
      const options = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const url = `${import.meta.env.VITE_BASE_URL}/api/products/${id}`;

      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }

    ProductList.map((Product) => {
      if (Product.id === id) {
        const newProducts = ProductList.filter((Product) => Product.id !== id);
        onDeleteProduct(newProducts);
      }
    });
  };

  const handleEdit = (Product) => {
    const editProduct = Product;
    onSelectedProduct(editProduct);
  };

  return (
    <div className='list__container'>
      <div className='list__container__test'>
        <h2 className='list__container__title'>Product list</h2>
      </div>
      <table className='Product__list'>
        <thead>
          <tr className='Product__list__titles'>
            <th>Product</th>
            <th>Color</th>
            <th>Category</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {ProductList.map((Product) => (
            <tr key={Product.id} className='Product__list__item'>
              <td className='Product__list__item--name'>{Product.name}</td>
              <td className='Product__list__item--color'>{Product.color}</td>
              <td className='Product__list__item--category'>{Product.category}</td>
              <td className='Product__list__item--price'>{Product.price}</td>
              <td>
                <button className= 'Product__list__button--edit' onClick={() => handleEdit(Product)}>
                  <FaEdit />
                </button>
                <button className= 'Product__list__button--delete' onClick={() => handleDelete(Product.id)}>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
