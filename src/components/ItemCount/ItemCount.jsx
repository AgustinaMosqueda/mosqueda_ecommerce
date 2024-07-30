// import { useState, useEffect } from "react";
// import obtenerProductos from "../../data/data.js";


// const ItemListContainer =({ saludo }) => {
//     const [productos, setProductos]= useState ( []);

//     useEffect( ()=> { 
//         obtenerProductos()
//     .then((respuesta)=> {
//         setProductos(respuesta);
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
//     .finally(()=>{
//         console.log("finaliza la promesa");
//     });
//     }, []);

// return(
//         <div>
//             <p>{saludo}</p>
//             {
//                 productos.map( (producto)=>{
//                     return <div key={producto.id}> {producto.nombre}</div>
//                 })
//             }
//         </div>
//     );
// };
// export default ItemListContainer;