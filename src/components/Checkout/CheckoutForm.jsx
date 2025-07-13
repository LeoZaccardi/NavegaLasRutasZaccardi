import React, { useState } from 'react';
import { useCart } from '../../context/useCart';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../Firebase/firebase';

const CheckoutForm = () => {
  const { cart } = useCart();
  const [orderId, setOrderId] = useState(null);
  const [formData, setFormData] = useState({ nombre: '', email: '', telefono: '' });

  const total = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orden = {
      comprador: formData,
      items: cart.map(item => ({
        id: item.id,
        nombre: item.nombre,
        cantidad: item.quantity,
        precio: item.precio
      })),
      total,
      fecha: Timestamp.now()
    };

    try {
      const docRef = await addDoc(collection(db, 'ordenes'), orden);
      setOrderId(docRef.id);
    } catch (error) {
      console.error("Error al generar orden:", error);
    }
  };

  if (orderId) {
    return (
      <div style={{ marginTop: '100px', textAlign: 'center' }}>
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
      </div>
    );
  }

  return (
    <div style={{ marginTop: '100px', padding: '2rem' }}>
      <h2>Finalizar compra</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: 'auto' }}>
        <input type="text" name="nombre" placeholder="Nombre completo" value={formData.nombre} onChange={handleChange} required style={{ marginBottom: '1rem', padding: '0.5rem' }} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required style={{ marginBottom: '1rem', padding: '0.5rem' }} />
        <input type="tel" name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} required style={{ marginBottom: '1rem', padding: '0.5rem' }} />
        <button type="submit" style={{ padding: '0.75rem', backgroundColor: '#2c3e50', color: 'white', border: 'none', borderRadius: '5px' }}>Generar orden</button>
      </form>
    </div>
  );
};

export default CheckoutForm;