import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = (props) => {
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {removeFromDom(productId)})
            .catch(err => console.log(err))
    }
    
    return (
        <div>
            <h2>All Products:</h2>
            <ul>{props.product.map((product, index) => (
                <li key={index}>
                     <Link to={'/product/'+ product._id}> {product.title} </Link><br/>
                     <button onClick={(e) => {deleteProduct(product._id)}}>Delete</button>
                </li>
            ))}
            </ul>

        </div>
    ) 
}
export default ProductList;