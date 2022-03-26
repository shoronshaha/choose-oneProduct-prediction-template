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
        let newCart = [];
        const sameData = cart.find(gun => gun.id === rifle.id);
        if (!sameData && cart.length < 4) {
            newCart = [...cart, rifle];
        }
        else if (sameData && cart.length < 4) {
            newCart = [...cart];
            alert('you added same data');
        }
        else if (sameData && cart.length >= 4) {
            newCart = [...cart];
            alert('you added same data');
        }
        else {
            newCart = [...cart];
            alert("Can't add more than 4");
        }
        setCart(newCart);
    };

    const selectOne = () => {
        if (cart.length > 0) {
            const suggestCartName = cart[Math.floor(Math.random() * cart.length)]
            setSuggest(suggestCartName);
        }
        // const newRandomCart = [...random, cart]
        // setRandom(newRandomCart);

    };
    const resetAll = () => {
        setCart([]);
        setSuggest([]);
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
                    resetAll={resetAll}
                    suggest={suggest}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;