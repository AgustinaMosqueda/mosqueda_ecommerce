import "./navbar.css";
import "./Carrito";
import Carrito from "./Carrito";

const NavBar = () => {


return (
    <nav className="navbar">
    <ul>


        <li>Pulseras </li>
        <li>Collares </li>
    </ul>

    <Carrito />
    </nav>
);
};
export default NavBar;
