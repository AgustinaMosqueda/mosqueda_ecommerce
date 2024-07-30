const productos= [
    {
        id:"asd1",
        nombre:"remera",
        descripcion:"",
        precio:"",
        categoria:"",
        stock:"",
        imagen:""
    },
    {
        id:"klj2",
        nombre:"buzo",
        descripcion:"",
        precio:"",
        categoria:"",
        stock:"",
        imagen:""
    },
    {
        id:"poq3",
        nombre:"pantalon",
        descripcion:"",
        precio:"",
        categoria:"",
        stock:"",
        imagen:""
    }
    ]

const obtenerProductos= () => {
    return new Promise (( resolve, reject) => {
        setTimeout (() => {
            resolve(productos)
        }, 2000);
    });
}
export default obtenerProductos;