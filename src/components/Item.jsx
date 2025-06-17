import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    return (
        <div style={{
            border: '1px solid #ddd',
            borderRadius: '10px',
            padding: '1rem',
            textAlign: 'center',
            background: '#fff',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
        }}>
            <img
                src={product.imagen}
                alt={`Imagen de ${product.nombre}`}
                style={{ width: '100%', maxHeight: '150px', objectFit: 'contain' }}
            />
            <h3>{product.nombre}</h3>
            <p>${product.precio}</p>
            <Link to={`/item/${product.id}`}>Ver detalle</Link>
        </div>
    );
};

export default Item;
