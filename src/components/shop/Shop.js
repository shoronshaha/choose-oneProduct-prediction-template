import React, { useEffect, useState } from 'react';
import Rifle from '../rifle/Rifle';
import './Shop.css'
const Shop = () => {
    const [rifles, setRifles] = useState([])

    useEffect(() => {
        fetch('rifle.json')
            .then(res => res.json())
            .then(data => setRifles(data))
    }, [])

    return (
        <div className='shop-container'>
            <div className="rifle-container">
                {
                    rifles.map(rifle => <Rifle
                        key={rifle.id}
                        rifle={rifle}
                    ></Rifle>)
                }

            </div>
            <div className="cart-container">
                <h1>gelo</h1>

            </div>
        </div >
    );
};

export default Shop;