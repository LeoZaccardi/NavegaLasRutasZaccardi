import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import ItemDetail from '../components/ItemDetail';

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const getProduct = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(products.find(p => p.id === itemId));
                }, 1000);
            });
        };

        getProduct().then(data => setProduct(data));
    }, [itemId]);

    return (
        <div style={{ padding: '2rem' }}>
            {product ? <ItemDetail product={product} /> : <p>Cargando producto...</p>}
        </div>
    );
};

export default ItemDetailContainer;