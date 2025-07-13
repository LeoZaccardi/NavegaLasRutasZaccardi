import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase/firebase';
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const docRef = doc(db, 'Productos - SnS', id);
    getDoc(docRef).then((res) => {
      if (res.exists()) {
        setProduct({ id: res.id, ...res.data() });
      } else {
        setProduct(undefined);
      }
    });
  }, [id]);

  if (product === null) return <p style={{ textAlign: 'center' }}>Cargando detalle...</p>;
  if (product === undefined) return <p>Producto no encontrado.</p>;

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;