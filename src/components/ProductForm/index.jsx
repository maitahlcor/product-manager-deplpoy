import { useState , useEffect} from 'react';

import './ProductForm.css';

const ProductForm = ({onAddContac}) => {
  const [product, setProduct] = useState({});

  const handleChange = (event) => {
    const {name, value} = event.target;
      setProduct({
        ... product,
        [name]:value,
      })
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    
    onAddContac(product)

    // Clear form
    setProduct({})
  };
 
  return (
    <div className='container'>

      <form className="product-form" onSubmit={handleSubmit}>
        <div>
          <div className="product-form__column">
            <label className="product-form__label">
              Poroduct Name:
            </label>
            <input
              type="text"
              name="name"
              placeholder='Enter product name'
              className="product-form__input"
              required
              onChange={handleChange}
            />
          </div>
          <div className="product-form__column">
            <label className="product-form__label">
              Color:
            </label>
            <input
              type="text"
              name="color"
              placeholder='Enter product color'
              className="product-form__input"
              required
              onChange={handleChange}
            />
          </div>
          <div className="product-form__column">
            <label className="product-form__label">
              Category:
            </label>
            <input
              type="text"
              name="category"
              placeholder='Enter product category '
              className="product-form__input"
              required
              onChange={handleChange}
            />
          </div>
          <div className="product-form__column">
            <label className="product-form__label">
              price:
            </label>
            <input
              type="number"
              name="price"
              placeholder='Enter price value'
              className="product-form__input"
              required
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className="product-form__button">
          Agregar
        </button>
      </form>
    </div>

  );
};

export default ProductForm;