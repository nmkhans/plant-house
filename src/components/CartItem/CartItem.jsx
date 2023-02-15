import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/state/cartSlice';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();
    
    return (
        <div>
            <div className="flex justify-center items-center mb-5">
                <div className="avatar">
                    <div className="w-16 rounded relative">
                        <span className="badge badge-sm badge-primary text-white absolute right-0">{item.quantity}</span>
                        <img src={item.image} alt="cart item" />
                    </div>
                </div>
                <div className="ml-3 font-semibold">
                    <h3>{item.name}</h3>
                </div>
                <div className="flex items-center ml-3">
                    <button
                    type="button"
                    onClick={() => dispatch(removeFromCart(item._id))}
                    className="badge badge-md btn-primary rounded-lg text-white mr-1">-</button>
                    <span>{item.quantity}</span>
                    <button
                    type="button"
                    onClick={() => dispatch(addToCart(item))}
                    className="badge badge-md btn-primary rounded-lg text-white ml-1">+</button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;