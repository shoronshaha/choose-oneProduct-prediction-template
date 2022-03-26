import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart, selectOne, restAll, suggest } = props;

    return (
        <div className='cart'>
            <h1 className='cart-heading'>Selected Rifles</h1>
            <div>
                {
                    cart.map((item) => (

                        <p key={item.id}><img src={item.img} alt="" /> <span className='cart-name'>Name: {item.name}</span>  </p>
                    ))
                }
            </div>
            <button onClick={selectOne} className='select-btn' > Select One</button >
            <div>
                <h1> name:{suggest.name}</h1>
            </div>
            <br />
            <button onClick={restAll} className='rest-btn'>Rest</button>

        </div >
    );
};

export default Cart;