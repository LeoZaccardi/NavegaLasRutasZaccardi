import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import ItemList from '../components/ItemList';

const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        const getProducts = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    if (categoryId) {
                        resolve(products.filter(p => p.categoria === categoryId));
                    } else {
                        resolve(products);
                    }
                }, 1000);
            });
        };

        getProducts().then((res) => {
            setItems(res);
            setLoading(false);
        });
    }, [categoryId]);

    return (
        <div style={{ padding: '2rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>
                {categoryId ? `Categoría: ${categoryId}` : 'Todos los productos'}
            </h2>
            {loading ? <p>Cargando productos...</p> : <ItemList products={items} />}
        </div>
    );
};

export default ItemListContainer;