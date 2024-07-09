import "./navbar.css";
import "./Carrito";
import Carrito from "./Carrito";

const NavBar = () => {


return (
    <nav className="navbar">
<div className="brand">
        <img
        width={150}
        src="https://th.bing.com/th/id/R.b9cbef80cd6ebdc2f4ceafdb12f78d07?rik=vD%2fhiD2AbObvbw&riu=http%3a%2f%2fwww.recreoviral.com%2fwp-content%2fuploads%2f2016%2f01%2fMensajes-ocultos-detr%c3%a1s-de-los-logotipos-de-marcas-famosas-3.jpg&ehk=%2bHEL9VpsA8D%2b0Ydpqx4haQoLpaTkcUrZczrZQlF8Row%3d&risl=&pid=ImgRaw&r=0"
        alt=""
        />
    </div>
    <ul>
        <li>Calzados</li>
        <li>Camperas</li>
        <li>Pantalón</li>
    </ul>

    <Carrito />
    </nav>
);
};
export default NavBar;
