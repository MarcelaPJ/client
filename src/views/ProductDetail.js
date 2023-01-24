import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const ProductDetail = (props) => {
    const [product, setProduct] = useState({});
    const {id} = useParams()

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {setProduct(res.data)
            })
            .catch(err => console.log(err))
    }, []);

    return(
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    )
}
export default ProductDetail;