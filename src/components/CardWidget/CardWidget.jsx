import './CardWidget.css'
import { FaCartArrowDown } from "@react-icons/all-files/fa/FaCartArrowDown";
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {
    const { cart, totalCantidad } = useContext(CartContext)

    return (
        <Link to="/cart" className={`cart-widget ${cart.length > 0 ? 'cart-widget-active' : ''}`}>
            <FaCartArrowDown />
            <span>{totalCantidad()}</span>
        </Link>
    )
}

export default CartWidget