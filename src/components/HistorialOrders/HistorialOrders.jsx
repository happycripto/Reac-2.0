import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const HistorialOrders = () => {
const [orders, setOrders] = useState([]);
const [showModal, setShowModal] = useState(false);

useEffect(() => {
    fetchOrders();
}, []);

const fetchOrders = async () => {
    const ordersRef = collection(db, 'ordenes');
    const querySnapshot = await getDocs(ordersRef);
    const ordersData = querySnapshot.docs.map((doc) => doc.data());
    setOrders(ordersData);
};

const handleShowOrders = () => {
    setShowModal(true);
    };

    return (
    <>
    <Button variant="success" onClick={handleShowOrders}>
        Mostrar Historial de Órdenes
    </Button>

    <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton >
            <Modal.Title>Historial de órdenes</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">
        {orders.map((order) => (
            <div key={order.id}>
            <p>Fecha: {order.fyh.toDate().toLocaleString()}</p>
            <p>Cliente: {order.client.nombre}</p>
            <p>Total: ${order.total}</p>
            <hr />
            </div>
        ))}
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cerrar
            </Button>
        </Modal.Footer>
    </Modal>
    </>
);
};

export default HistorialOrders;

