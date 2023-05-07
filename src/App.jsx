import { useState, useEffect } from 'react';
import './App.css';
import AddProduct from './components/ProductForm';
import ProductList from './components/ProductList/';
//import { products as data } from './assets/data';
import Header from './components/Header/Header';
import EditProduct from './components/EditProduct';
//import'../.env.local'
//import { dotenv}  from 'dotenv/core';
//require('dotenv').config() 

function App() {
  const [Products, setProducts] = useState();
  const [selectedProduct, setSelectedProduct] = useState({});

  const [isEditing, setIsEditing] = useState(false);

  const handleAddProduct = (newProduct) => {
    setProducts([...Products, newProduct]);
  };

  const handleSelect = (Product) => {
    setSelectedProduct(Object.assign({}, Product));
    setIsEditing(true);
  };

  const handleEditProduct = () => {
    setProducts([...Products]);
  };

  const deleteProduct = (newArr) => {
    setProducts(newArr);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const url = `${import.meta.env.VITE_BASE_URL}/api/products`;
      //console.log(import.meta.env.VITE_SECRET_1) 
      console.log(url);
      try {
        const response = await fetch(url);
        const data = await response.json();
        //console.log(data2)
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <div className='ProductContainer'>
        <ProductList
          ProductList={Products}
          onSelectedProduct={handleSelect}
          onDeleteProduct={deleteProduct}
        />
        {isEditing ? (
          <EditProduct
            onEditProduct={handleEditProduct}
            selectedProduct={selectedProduct}
            isEditing={isEditing}
            Products={Products}
            setIsEditing={setIsEditing}
          />
        ) : (
          <AddProduct
            onAddProduct={handleAddProduct}
            selectedProduct={selectedProduct}
            isEditing={isEditing}
            Products={Products}
          />
        )}
      </div>
    </>
  );
}

export default App;
