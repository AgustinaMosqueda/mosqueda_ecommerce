const Item= ({producto})=> {
return (
<div>
        <img src={producto.imagen} alt="" />
        <p>{producto.nombre}</p>
        </div>
    );
};
// estilar
export default Item;
