import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/state/cartSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="card border bg-base-100 shadow-xl">
      <figure>
        <img className="h-[250px]" src={product.image} alt="product image" />
      </figure>
      <div className="card-body text-left">
        <h2 className="card-title">{product.name}</h2>
        <p>price: {product.price} TK</p>
        <p>category: {product.category}</p>
        <p>
          In stock:{" "}
          {product.stock !== 0 ? (
            product.stock
          ) : (
            <span className="text-red-500">Out of stock</span>
          )}
        </p>
        <div className="flex w-full">
          <button
            onClick={() => navigate(`/product/${product._id}`)}
            className="btn btn-sm btn-primary text-white mr-3"
          >
            Detail
          </button>
          <button
            onClick={() => dispatch(addToCart(product))}
            disabled={product.stock === 0}
            className="btn btn-sm btn-primary text-white"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
