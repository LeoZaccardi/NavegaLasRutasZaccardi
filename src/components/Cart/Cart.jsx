import React from 'react';
import { useCart } from '../../context/useCart';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, getTotalQuantity } = useCart();

  const total = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);

  if (getTotalQuantity() === 0) {
    return (
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <h2>Tu carrito está vacío 🛒</h2>
        <Link to="/" style={{ color: '#007bff', textDecoration: 'underline' }}>Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', marginTop: '80px' }}>
      <h2>Carrito de compras</h2>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>

      <Link to="/checkout">
        <button style={{ marginTop: '1rem' }}>Finalizar compra</button>
      </Link>
    </div>
  );
};

export default Cart;