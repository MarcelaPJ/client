import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

const ProductUpdate = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))
    }, [id])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, {
            title,
            price,
            description
        })
            .then(res => {console.log(res)
            navigate("/product/" + id);
            })

            .catch(err => console.log(err))
    }

    return(
        <div>
            <h1>Update a product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label>
                    <input type="number" value={price} onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label>
                    <input type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <button type="submit">Update</button> 
                <Link to={"/product/" + id}>Cancel</Link>
            </form>
        </div>
    )
}
export default ProductUpdate;