import React from 'react';

const CartItem = ({ item }) => {
  const subtotal = item.precio * item.quantity;

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem',
      borderBottom: '1px solid #ddd',
      marginBottom: '1rem',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <img
          src={item.imagen}
          alt={item.nombre}
          style={{ width: '80px', height: '80px', objectFit: 'contain', borderRadius: '8px' }}
        />
        <div>
          <h4 style={{ margin: '0 0 0.25rem' }}>{item.nombre}</h4>
          <p style={{ margin: 0 }}>Cantidad: {item.quantity}</p>
        </div>
      </div>
      <p style={{ margin: 0 }}><strong>Subtotal:</strong> ${subtotal.toFixed(2)}</p>
    </div>
  );
};

export default CartItem;