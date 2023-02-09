import React from 'react';
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from '../../redux/state/cartSlice';

const Home = () => {
    const cart = useSelector(state => state.cart.value)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(addToCart())
    }

    console.log(cart)
    return (
        <div>
            <button onClick={handleClick}>add</button>
            {cart.length}
        </div>
    );
};

export default Home;