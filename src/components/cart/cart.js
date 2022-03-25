import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div className='cart'>
            <h1>Selected Rifles</h1>

            <button className='select-btn'>Select One</button> <br />
            <button className='rest-btn'>Rset</button>

        </div >
    );
};

export default Cart;