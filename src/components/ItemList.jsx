import React from 'react';
import Item from './Item';


const ItemList = ({ products }) => {
    if (products.length === 0) {
        return <p>No hay productos en esta categoría.</p>;
    }

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '1.5rem',
            padding: '1rem 0'
        }}>
            {products.map(product => (
                <Item key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ItemList;
