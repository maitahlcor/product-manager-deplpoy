import { useState } from "react";
import "./ProductForm.css";

const defaultProduct = {
  name: "",
  color: "",
  category: "",
  price: "",
};
function AddProduct({ onAddProduct, Products }) {
  const [Product, setProduct] = useState(defaultProduct);

  const handleSubmit = async (event) => {
    event.preventDefault();

    /*try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Product),
      };
      const url = `${import.meta.env.VITE_BASE_URL}/api/Products`;

      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      setProduct(defaultProduct);
    } catch (error) {
      console.log("error");
    }*/

    function idAssignment() {
      const lastProduct = Products[Products.length - 1];
      const lastId = lastProduct.id;
      return lastId + 1;
    }

    const newProduct = {
      ...Product,
      id: idAssignment(),
    };
    onAddProduct(newProduct);

    // Clear form
    setProduct(defaultProduct);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setProduct({
      ...Product,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <div className="container__title">
        <h2 className="container__title__text">Add New Product</h2>
      </div>
      <form className="add-form" onSubmit={handleSubmit}>
        <div>
          <div className="add-form__column">
            <label className="add-form__label">Product</label>
            <input
              type="text"
              name="name"
              placeholder="Product name"
              className="add-form__input"
              required
              onChange={handleChange}
              value={Product.name}
            />
          </div>
          <div className="add-form__column">
            <label className="add-form__label">Color</label>
            <input
              type="text"
              name="color"
              className="add-form__input"
              placeholder="Add Product Color"
              onChange={handleChange}
              min="1895"
              max="2023"
              value={Product.color}
              required
            />
          </div>
          <div className="add-form__column">
            <label className="add-form__label">Category</label>
            <input
              type="text"
              name="category"
              className="add-form__input"
              placeholder="Add Category"
              onChange={handleChange}
              value={Product.category}
              required
            />
          </div>
          <div className="add-form__column">
            <label className="add-form__label">Price</label>
              <input
              type="number"
              name="price"
              placeholder='Enter price value'
              className="add-form__input"
              value={Product.price}
              onChange={handleChange}
              required
              
            />
             
          </div>
        </div>
        <button type="submit" className="add-form__button">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
