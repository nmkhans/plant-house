import React from 'react';
import { FaRegTimesCircle } from "react-icons/fa"
import { useSelector } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import { useDispatch } from 'react-redux';
import { emptyCart } from '../../redux/state/cartSlice';

const Cart = ({ handleCartToggle }) => {
    const cart = useSelector(state => state.cart.value)
    const subTotal = useSelector(state => state.cart.subTotal)
    const dispatch = useDispatch()


    return (
        <aside className="p-5">
            <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-semibold">Shopping cart</h3>
                <div className="cart__close">
                    <button className="text-xl text-primary" onClick={handleCartToggle}><FaRegTimesCircle /></button>
                </div>
            </div>
            <div className="my-10">
                {Object.keys(cart).length !== 0 ? (
                    Object.keys(cart).map(keys => <CartItem  item={cart[keys]} />)
                ) : "no item on cart"}
            </div>
            <div>
                <h3>Sub total: {subTotal}</h3>
                <div className="my-5">
                    <button className="btn btn-primary text-white mr-5">Checkout</button>
                    <button
                    onClick={() => dispatch(emptyCart())}
                        className="btn btn-primary text-white">
                        Clear</button>
                </div>
            </div>
        </aside>
    );
};

export default Cart;