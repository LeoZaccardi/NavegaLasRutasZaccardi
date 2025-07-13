import React from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { getTotalQuantity } = useCart();
    const total = getTotalQuantity();

    return (
        <Link to="/cart" style={{ display: 'flex', alignItems: 'center', color: 'white', textDecoration: 'none' }}>
      🛒
      <span style={{ marginLeft: '5px' }}>{total}</span>
    </Link>
    );
};

export default CartWidget;
