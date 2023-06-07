import './Navbar.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <header className="header">
        <div className="header_container">
            <Link to="/Inicio">
            <img src="./public/logo mi templo spa2.png" alt="logo" className="logo" /></Link>
            <nav className="navbar">
            <Link to="/Inicio" className="navbar_link">Inicio</Link>
            <Link to="/Servicios" className="navbar_link">Servicios</Link>
            <Link to="/category/Masajes" className="navbar_link">Masajes</Link>
            <Link to="/category/Faciales" className="navbar_link">Faciales</Link>
            <Link to="/Contacto" className="navbar_link">Contacto</Link>
            </nav>
        </div>
        </header>
    );
};
