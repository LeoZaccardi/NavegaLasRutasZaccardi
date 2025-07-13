import React from 'react';
import { Link } from 'react-router-dom';
import './item.css';

const Item = ({ product }) => {
  return (
    <div className="card">
      <div className="card-image-wrapper">
        <img
          src={product.imagen}
          alt={`Imagen de ${product.nombre}`}
        />
      </div>
      <h3>{product.nombre}</h3>
      <p>${product.precio}</p>
      <Link to={`/item/${product.id}`}>Ver detalle</Link>
    </div>
  );
};

export default Item;