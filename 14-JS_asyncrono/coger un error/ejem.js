//Como coger un error

function doble(num){
    if(isNaN(num)){
    throw new Error(num + " Esto no es un numero");
    }
    return num * 2;
}

console.log("Antes de doblar");
try {
    const n = doble("a");
    console.log(n);
} catch(err) {
    console.error(err)
} finally {
console.log("Codigo final opcional..");
}

console.log("Despues de doblar");
