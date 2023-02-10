import React from 'react';
import { FaRegTimesCircle } from "react-icons/fa"

const Cart = ({ handleCartToggle }) => {
    return (
        <aside className="p-5 relative">
            <div className="cart__close absolute top-5 right-5">
                <button className="text-xl" onClick={handleCartToggle}><FaRegTimesCircle /></button>
            </div>
        </aside>
    );
};

export default Cart;