import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Navigate } from 'react-router-dom'
import { collection, addDoc, doc, updateDoc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Link } from "react-router-dom"
import { MySwal, alertClass }  from "../Alert/Alert";



const Checkout = () => {
    const { cart, totalCompra, emptyCart } = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: '',
        telefono: '',
        email: ''
    })
    const [orderId, setOrderId] = useState(null)

    const handleInput = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const { nombre, telefono, email } = values

        if (nombre.length < 3) {
            MySwal.fire({
                title: 'El nombre es demasiado corto',
                icon: 'error',
            });
            return;
        }
        if (telefono.length < 7) {
            MySwal.fire({
                title: 'Telefono inválido',
                icon: 'error',
            });
            return;
        }
        if (email.length < 5) {
            MySwal.fire({
                title: 'Email inválido',
                icon: 'error',
            });
            return;
        }

        const orden = {
            client: values,
            items: cart.map(item => ({id: item.id, nombre: item.nombre, cantidad: item.cantidad})),
            total: totalCompra(),
            fyh: new Date()
        }

        console.log(orden)

        const ordersRef = collection(db, "ordenes")

        addDoc(ordersRef, orden)
            .then((doc)=>  {
                setOrderId(doc.id)
                console.log(doc.id)
            })

        
    }

    if (orderId) {

        MySwal.fire({
            title: 'Gracias por su compra',
            icon: 'success',
        });
        return (
            
            <div className="container my-5">
                <h2>Tu compra se registró exitosamente!</h2>
                <hr/>
                <p>Guardá tu número de orden: {orderId}</p>

                <Link to="/inicio">Volver</Link>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/inicio" />
    }


    return (
        <div className="container my-5">
            <h2>Checkout</h2>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input 
                    className="form-control my-2"
                    type="text"
                    value={values.nombre}
                    placeholder="Nombre"
                    name="nombre"
                    onChange={handleInput}
                />
                <input 
                    className="form-control my-2"
                    type="number"
                    value={values.telefono}
                    placeholder="Numero de Telefono"
                    name="telefono"
                    onChange={handleInput}
                />
                <input 
                    className="form-control my-2"
                    type="email"
                    value={values.email}
                    placeholder="Email"
                    name="email"
                    onChange={handleInput}
                />

                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Checkout