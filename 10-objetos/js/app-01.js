// const nombre = "Monitor de 20 pulgadas"
// const precio = 200;
// const disponible = true;

//Objetos como literal
const producto = {
    nombre : "Pantalla OLED", precio: 200, disponible: true
};
//accedemos a las propiedades por un punto .
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);
producto.nombre = "Teclado USB";
console.log(producto);

producto.imagen = "imagen.jpg";
console.log(producto);

//Crear otro producto con otros datos
//e imprimirlo en la consola.
const producto2 = {
    nombre : "Ratón gammer", precio: 300, disponible: false, imagen: "raton.jpg",
};
console.log(producto2);
//Otra forma de acceder a las propiedades:
console.log(producto2["imagen"]);
//quitar una propiedad
delete producto2.imagen;
console.log(producto2);

//desestructuracion de objetos:
// const nombre = producto2.nombre; 
// const disponible = producto2.disponible;
// const precio = producto2.disponible;

const {nombre, precio, disponible} = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);