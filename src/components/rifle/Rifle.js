import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Rifle.css';
const Rifle = (props) => {
    const { name, img, price, id } = props.rifle
    return (
        <div className='rifle'>
            <img src={img} alt="" />
            <div className='rifle-info'>
                <p className='rifle-name'>{name}</p>
                <p>Id: {id}</p>
                <p>Price: ${price}</p>
            </div>
            <button className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Rifle;