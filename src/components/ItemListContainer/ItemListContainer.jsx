import { useEffect } from 'react';
import './ItemListContainer.css';
import { useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemsList/ItemsList';

export const ItemListContainer = () => {
    const { category } = useParams();
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

  // FIREBASE!!!!!
    useEffect(() => {
    setLoading(true);

    // 1. Armar referencia ( sync )
    const servicioref = collection(db, 'servicios');
    // 2.- Consumir esa referencia ( async )
    getDocs(servicioref)
        .then((res) => {
        const docs = res.docs.map((doc) => {
            return {
            ...doc.data(),
            id: doc.id,
            category: doc.data().category,
            };
        });

        // Filtrar por categoría si se proporciona
        const filteredProducts = category
        ? docs.filter((doc) => doc.category.toLowerCase() === category.toLowerCase())
        : docs;

        setProductos(filteredProducts);
        })
        .catch((e) => console.log(e))
        .finally(() => setLoading(false));
    }, [category]);

    return (
        <div className="container my-5">
        {loading ? (
            <Spinner animation="border" role="status">
            <span className="Loading visually-hidden">Loading...</span>
            </Spinner>
        ) : (
            <ItemList items={productos} category={category} />
        )}
        </div>
    );
};
