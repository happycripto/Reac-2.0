import './Navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    return(
        <header className="header">
            <div className="header_container">
                <img src="./public/logo mi templo spa2.png" alt="logo"className="logo" />

                <nav className="navbar">
                    <Link to='/Inicio' className="navbar_link">Inicio</Link>
                    <Link to='/Masajes' className="navbar_link">Masajes</Link>
                    <Link to='/Faciales' className="navbar_link">Faciales</Link>
                    <Link to='/Contacto' className="navbar_link">Contacto</Link>
                </nav>
            </div>
        </header>
    )
}