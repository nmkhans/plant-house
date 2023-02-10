import React from 'react';

const Cart = ({ handleCartToggle }) => {
    return (
        <aside>
            cart here
            <button onClick={handleCartToggle} className="btn btn-warning">close</button>
        </aside>
    );
};

export default Cart;