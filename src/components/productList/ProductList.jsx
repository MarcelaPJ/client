import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = (props) => {
    const { removeFromDom, product, setProduct } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product' + productId)
            .then(res => {removeFromDom(productId)})
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [])
    
    return (
        <div>
            <h2>All Products:</h2>
            <ul>{product.map((product, index) => (
                <li key={index}>
                     <Link to={`/product/${product._id}`}> {product.title} </Link>
                    
                </li>
            ))}
            </ul>
        </div>
    ) 
}
export default ProductList;