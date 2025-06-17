import React from 'react';
import { useCart } from '../context/CartContext';

const CartWidget = () => {
    const { getTotalQuantity } = useCart();
    const total = getTotalQuantity();

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            🛒
            <span style={{ marginLeft: '5px' }}>{total}</span>
        </div>
    );
};

export default CartWidget;
