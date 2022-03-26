import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Rifle from '../rifle/Rifle';
import './Shop.css'
const Shop = () => {
    const [rifles, setRifles] = useState([]);
    const [cart, setCart] = useState([]);
    const [suggest, setSuggest] = useState([]);

    useEffect(() => {
        fetch('rifle.json')
            .then(res => res.json())
            .then(data => setRifles(data))
    }, [])

    const handleAddToCart = (rifle) => {
        const newCart = [...cart, rifle];
        setCart(newCart);
    };

    const selectOne = () => {
        const suggestCartName = cart[Math.floor(Math.random() * cart.length)]
        setSuggest(suggestCartName);

        // const newRandomCart = [...random, cart]
        // setRandom(newRandomCart);

    };
    const restAll = () => {
        setCart([]);
    }

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
                <Cart cart={cart}
                    selectOne={selectOne}
                    restAll={restAll}
                    suggest={suggest}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;