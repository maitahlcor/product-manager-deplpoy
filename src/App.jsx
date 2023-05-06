import Header from './components/Header/Header'
import ProductList from './components/ProductList/ProductList'
import ProductForm from './components/ProductForm'
import ProductEditForm from './components/ProductEditForm'
import { products as productList } from "./data"
import { useState } from 'react'
import './App.css'

function App() {

  const [products, setProducts] = useState(productList)
  const [product, setProduct] = useState({})
  const [isSelected, setIsSelected] = useState();
  const handleAddProduct = (newProduct) => {
    newProduct.id = new Date().getTime();
    console.log(newProduct)
    setProducts([...products, newProduct]);
  }

  const onDeleteProduct = (idDelete) => {
    const productsFilter = products.filter((product) => product.id !== idDelete);
    setProducts(productsFilter);
  }
   const onSelectProduct = (productEdit) => {
  
    setProduct(productEdit);
  }

  const onEditProduct = (myProduct) => {
    const productIndex = products.findIndex((product) => product.id === myProduct.id);
    const newProducts = [...products];

    newProducts[productIndex] = myProduct;    
    setProducts(newProducts);
  };
  let showForm = true;
  const handleSelect = (selection) => {
    setIsSelected(selection);
  }
  const  showedContent = isSelected ? <ProductEditForm productEdit={product} onEditProduct={onEditProduct} />:<ProductForm onAddContac={handleAddProduct}  />

  //showForm ? <ProductForm onAddContac={handleAddProduct} /> 
  //: <ProductEditForm productEdit={product} onEditProduct={onEditProduct} />;
  // <ProductForm onAddContac={handleAddProduct}  />
  //<ProductEditForm productEdit={product} onEditProduct={onEditProduct} />

  return (
    <>
      <Header />
      <div className='main-container'>
        <ProductList products={products} onDeleteProduct={onDeleteProduct} onSelectProduct ={ onSelectProduct} onSelectForm = {handleSelect}/>
        {showedContent}
      </div>
    </>
  )
}

export default App