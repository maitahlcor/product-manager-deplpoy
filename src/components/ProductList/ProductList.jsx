import "./ProductList.css";
import { useState } from "react";

function ProductList({ ProductList = [], onSelectedProduct, onDeleteProduct }) {
  const [updatedProducts, setUpdatedProducts] = useState(ProductList);

  const handleDelete = async (id) => {
    try {
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      };

      const url = `${import.meta.env.VITE_BASE_URL}/api/Products/${id}`;

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
    <div className="list__container">
      <div className="list__container__test">
        <h2 className="list__container__title">Product list</h2>
      </div>
      <table className="Product__list">
        <thead>
          <tr className="Product__list__titles">
            <th>Product</th>
            <th>Color</th>
            <th>Category</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {ProductList.map((Product) => (
            <tr key={Product.id} className="Product__list__item">
              <td className="Product__list__item--name">{Product.name}</td>
              <td className="Product__list__item--year">{Product.year}</td>
              <td className="Product__list__item--genre">{Product.genre}</td>
              <td className="Product__list__item--rating">{Product.rating}</td>

              <td>
                <button onClick={() => handleEdit(Product)}>edit</button>
                <button
                  onClick={() => {
                    handleDelete(Product.id);
                  }}
                >
                  delete
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
