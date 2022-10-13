
import React, { useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
const Orders = () => {
    const {products, intialCart} = useLoaderData();
    const [cart, setCart] = useState(intialCart)
    
    
    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id)
    }

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className='orders-container'>
                {
                    cart.map(product => <ReviewItem
                    key={product.id}
                   product = {product}
                   handleRemoveItem = {handleRemoveItem}
                    ></ReviewItem>)
                }
                {
                    cart.length === 0 && <h2>No Product Found <Link to='/shop'>Shop</Link></h2>
                }
            </div>
            <div className='cart-container'>
            <Cart clearCart={clearCart} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;