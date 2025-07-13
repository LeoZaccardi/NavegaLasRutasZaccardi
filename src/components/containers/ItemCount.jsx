import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const increase = () => {
        if (count < stock) setCount(count + 1);
    };

    const decrease = () => {
        if (count > 1) setCount(count - 1);
    };

    return (
        <div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                <button onClick={decrease}>-</button>
                <span>{count}</span>
                <button onClick={increase}>+</button>
            </div>
            <button onClick={() => onAdd(count)}>
                Agregar al carrito
            </button>
        </div>
    );
};

export default ItemCount;
