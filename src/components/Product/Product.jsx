import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const navigate = useNavigate();
    
    return (
        <div className="card border bg-base-100 shadow-xl">
            <figure>
                <img src={product.image} alt="product image" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>price: {product.price} TK</p>
                <p>category: {product.category}</p>
                <p>In stock: {product.stock !== 0 ? product.stock : "Out of stock"}</p>
                <div className="flex w-full">
                    <button
                    onClick={() => navigate(`/product/${product._id}`)}
                    className="btn btn-sm btn-primary text-white mr-3">Detail</button>
                    <button disabled={product.stock === 0} className="btn btn-sm btn-primary text-white">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;