import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    console.log({ cart });

    return (
        <div className='cart'>
            <h1 className='cart-heading'>Selected Rifles</h1>
            <div>
                {
                    cart.map((item) => (
                        <h4 key={item.id}> Name: {item.name}</h4>
                    ))
                }
            </div>
            <button className='select-btn'>Select One</button> <br />
            <button className='rest-btn'>Rest</button>

        </div >
    );
};

export default Cart;