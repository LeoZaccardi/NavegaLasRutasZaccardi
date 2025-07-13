import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../Firebase/firebase';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const productsRef = collection(db, 'Productos - SnS');
    const q = categoryId
      ? query(productsRef, where('categoria', '==', categoryId))
      : productsRef;

    getDocs(q)
      .then((res) => {
        const productsDB = res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProducts(productsDB);
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) return <p style={{ textAlign: 'center' }}>Cargando productos...</p>;

  return <ItemList products={products} />;
};

export default ItemListContainer;