import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'
import { faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons';
const ReviewItem = ({product,handleRemoveItem}) => {
    const {id,name,price, quantity,img,shipping} = product;
    return (
        <div className='review-item'>
            <div>
            <img src={img}/>
            </div>
            <div className='review-details-continer'>
                <div className='review-details'>
                    <p>{name}</p>
                    <p><small>Price: ${price}</small></p>
                    <p><small>Shipping: ${shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className='delete-container'>
                <button onClick={() =>handleRemoveItem(id)} className='button-delete'>
                    <FontAwesomeIcon className='delete-icon' icon={faTrash}></FontAwesomeIcon>
                </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;