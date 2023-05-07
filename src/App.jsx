import { useState, useEffect } from "react";
import "./App.css";
import AddProduct from "./Components/Add/ProductForm";
import ProductList from "./Components/ProductList/ProductList";
//import { products as productList } from "./assets/data";
import Header from "./Components/Header/Header";
import EditProduct from "./Components/EditProduct/EditProduct";

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
      const url = `${"https://product-manager-server.onrender.com"}/api/Products`;
      console.log(url);
      try {
        const response = await fetch(url);
        const data = await response.json();
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
      <div className="ProductContainer">
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
