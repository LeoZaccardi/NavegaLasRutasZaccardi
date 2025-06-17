import React from 'react';
import ItemCount from './ItemCount';
import { useCart } from '../context/CartContext';


const ItemDetail = ({ product }) => {
    const { addItem } = useCart();

    const handleAdd = (cantidad) => {
        addItem(product, cantidad); // sumás el producto
        alert(`Agregaste ${cantidad} unidad(es) al carrito`);
    };
    return (
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', padding: '2rem' }}>
            <img
                src={product.imagen}
                alt={product.nombre}
                style={{ width: '300px', borderRadius: '10px' }}
            />
            <div>
                <h2>{product.nombre}</h2>
                <p><strong>Precio:</strong> ${product.precio}</p>
                <p><strong>Descripción:</strong> {product.descripcion}</p>
                <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
            </div>
        </div>
    );
};

export default ItemDetail;