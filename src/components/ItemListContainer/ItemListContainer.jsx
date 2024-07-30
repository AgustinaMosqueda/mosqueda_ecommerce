import { useState, useEffect } from "react";
import obtenerProductos from "../../data/data";
import ItemList from "./ItemList";


const ItemListContainer =({ saludo }) => {
    const [productos, setProductos]= useState ( []);

    useEffect( ()=> { 
        obtenerProductos()
    .then((respuesta)=> {
        setProductos(respuesta);
    })
    .catch((error)=>{
        console.log(error);
    })
    .finally(()=>{
        console.log("finaliza la promesa");
    });
    }, []);

return(
        <div>
            <p>{saludo}</p>
            <ItemList productos={productos}/>
        </div>
    );
};
export default ItemListContainer;