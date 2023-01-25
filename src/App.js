import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './views/Main';
import ProductDetail from './views/ProductDetail';
import ProductList from './components/productList/ProductList';
import ProductUpdate from './views/ProductUpdate';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/product/:id" element={<ProductDetail/>} /> 
          <Route path="/product/:id" element={<ProductList/>} />
          <Route path="/product/edit/:id" element={<ProductUpdate/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
