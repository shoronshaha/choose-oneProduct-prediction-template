import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Rifle from '../rifle/Rifle';
import './Shop.css'
const Shop = () => {
    const [rifles, setRifles] = useState([])
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('rifle.json')
            .then(res => res.json())
            .then(data => setRifles(data))
    }, [])

    const handleAddToCart = (rifle) => {
        console.log(rifle);
        const newCart = [...cart, rifle];
        setCart(newCart);
    };

    return (
        <div className='shop-container'>
            <div className="rifle-container">
                {
                    rifles.map(rifle => <Rifle
                        key={rifle.id}
                        rifle={rifle}
                        handleAddToCart={handleAddToCart}
                    ></Rifle>)
                }

            </div>
            <div className="cart-container">

                <Cart cart={cart}></Cart>
            </div>
        </div >
    );
};

export default Shop;