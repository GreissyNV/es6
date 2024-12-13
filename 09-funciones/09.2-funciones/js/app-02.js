//Más sobre callbacks
console.log("antes del timeout");

const imrpimirAdios = () => {
    console.log("Adiós!")
};

setTimeout(imrpimirAdios, 5000);

console.log("Despues del timeout!")

function imprimirHola() {
    console.log("Hola");
}

