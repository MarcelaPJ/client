import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import ProductList from './components/productList/ProductList';
import Main from './views/Main';
import ProductDetail from './views/ProductDetail';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/product" element={<Main/>} />
          <Route path="/product/:id" element={<ProductDetail/>} /> 
          <Route path="/product/:id" element={<ProductList/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
