import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/productForm/ProductForm';
import ProductList from '../components/productList/ProductList';

const Main = () => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res => {
                setProduct(res.data);
                setLoaded(true)
            })
            .catch(error => console.log("Error: ", error))
    }, [])

    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id !== productId))
    }

    return (
        <div>
            <ProductForm />
            <hr/>
            {loaded && <ProductList product={product} removeFromDom={removeFromDom}/>}
        </div>
    )
}
export default Main;