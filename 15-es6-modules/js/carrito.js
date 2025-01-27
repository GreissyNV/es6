import{ getProductoById } from './productos.js';
import { formatPrice } from './utils';

let carrito = [];
export default agregarAlCarrito = (id, cantidad) => {
const producto = getProductoById(id);
if (!producto) {
    console.error("Producto no encontrado");
    return;
} 


carrito.push({ ...producto, cantidad });
};