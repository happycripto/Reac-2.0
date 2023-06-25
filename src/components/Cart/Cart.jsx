import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

// import { FaTrashAlt } from 'react-icons/fa'
import { Link } from "react-router-dom"
import HistorialOrders from "../HistorialOrders/HistorialOrders"


const Cart = () => {
    const { cart, emptyCart, totalCompra, removeItem } = useContext(CartContext)
    
        

    if (cart.length === 0) {
        return (
            <div className="container my-5">
                <h2 className="Letras" >Tu carrito está vacío</h2>
                <hr/>
                <p className="Letras" >Andá a comprar algo</p>
                <Link to="/" className="btn btn-primary">Ver productos</Link>
                <HistorialOrders/>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <h2 className="Letras" >Tu compra</h2>
            <hr/>
            {
                cart.map((item) => (
                    <div key={item.id}>
                        <h3>{item.nombre}</h3>
                        <img src={item.img}/>
                        <p className="Letras" >Cantidad: {item.cantidad}</p>
                        <p className="Letras" >Subotal: {item.cantidad * item.precio}</p>
                        <hr/>
                    </div>
                ))
            }

            <div>
                <h3 className="Letras" >TOTAL: ${totalCompra()}</h3>
                <hr/>
                <button onClick={emptyCart} className="btn btn-danger">Vaciar carrito</button>
                <Link to="/checkout" className="btn btn-success">Terminar mi compra</Link>
            </div>
            
        </div>
        
    )
}

export default Cart