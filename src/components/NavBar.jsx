import { Link, NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import './NavBar.css';

export default function Navbar(){
    const setActiveClass = ({ isActive }) => (isActive ? "active" : "no_active");

    return(
        <Nav className="navbar navbar-expand-sm text-light fondo">
            <div className="container text-center row">
                <div className="col-2">
                    <Link className="navbar-brand text-light" to="/">
                    🍕 Pizzeria Mamma Mia!
                    </Link>
                </div>
                <div className="col-2 mx-5 px-1">
                        <NavLink className={setActiveClass} to="/carrito">
                        🛒 Carro
                        </NavLink>
                </div>
            </div>
        </Nav>
    );
}