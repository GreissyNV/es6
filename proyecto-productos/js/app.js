dconst products = document.querySelector('.products-center')

const baseUrl = "https://www.course-api.com/javascript-store-products/df"

const fetchProducts =  async () => {
    products.innerHTML = "<div class='loading'></div>";
    try {
        const res = await fetch(baseUrl);
        if(res.status === 404) {
            throw new Error("Peticion fallida");
        }
        const data = await res.json();
        console.log(n);
        return data;
            } catch (err) {
        products.innerHTML = '<p class"error"> Se ha producido un error</p>';
            }
        }; 

        const displayProducts = (list) => {
            //TODO montar el html con los datos del array
        }







// function doble(num){
//     if(isNaN(num)){
//     throw new Error(num + " Esto no es un numero");
//     }
//     return num * 2;
// }

// console.log("Antes de doblar");
// try {
//     const n = doble("a");
//     console.log(n);
// } catch(err) {
//     console.error(err)
// } finally {
// console.log("Codigo final opcional..");
// }

// console.log("Despues de doblar");


