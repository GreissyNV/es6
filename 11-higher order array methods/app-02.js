//Reduce
const numbers = [1, 2, 3, 4, -5, -6, 7, -8, 9, 10];
//Queremos sumar todos los numeros del array
const total = () => {
  let acumulador = 0;
  for (let i = 0; i < numbers.length; i++) {
    acumulador += numbers[i];
  }
  return acumulador;
};
console.log(total());

const sumatorio = numbers.reduce((acumulador, valor) =>{
  return acumulador + valor;
}, 0);


const cart = [
  {id:1, name: "platanos", price: 1.80},
  {id: 1, name: "manzanas", price: 0.98},
  {id: 3, name: "kiwis", price: 2},
];
// //calcular el total del carrito
let totalCarrito = 0;
// for (let i = 0; i < cart.length; i++) {
//   totalCarrito += cart[i].price;
// }

// cart.forEach((item) => {
//   totalCarrito += item.price;
// });
totalCarrito = cart.reduce((acc, producto) => acc + producto.price, 0);
console.log(totalCarrito);


//Some y Every

const arr1 = [1, 2, 3, 4, 8];
const arr2 = [1, 2, 3, 4, 5];

let testMayor5 = arr1.some((item) => item > 5);
console.log(testMayor5)
testMayor5 = arr2.some((item) => item > 5);
console.log(testMayor5);



//flat
const arr3 = [[1,2,3,4],
[44,55,6],
[6,7,8,9],
];

let tot = 0;

tot = arr3.flat().reduce((acc, item) => acc + item);
// arr3.flatMap()
console.log(tot);


//sort
const cart2 = [
  {id:1, name: "platanos", price: 1.80},
  {id: 1, name: "manzanas", price: 0.98},
  {id: 3, name: "kiwis", price: 2},
];
//crear un array nuevo ordenando usando sort de menor a mayor precio

const testSort = [34, 5, 67, 7985, 5];
console.log(testSort);
testSort.sort((a, b) => a - b);
const newTestSort = testSort.toSorted((a, b) => a - b);
console.log(testSort);
console.log(newTestSort);

const cart2Sorted = cart2.toSorted((a, b) => a.price - b.price);
console.log(cart2Sorted);


//find
const Kiwis = cart2.find((item) => item.name === "kiwis");
console.log(Kiwis);