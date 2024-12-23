//Selector de ID
const tituloPrincipal = document.getElementById("titulo-prinpical");
// console.log(tituloPrincipal.innerText);

//Con query selector
const tituloPrincipalQuery = document.querySelector("#titulo-prinpical");
// console.log(tituloPrincipalQuery.innerText);

//Ejemplo de leer input de texto
const itemInput = document.getElementById("item-input");
//Creamos un evento
itemInput.addEventListener("keyup", () => {
  console.log(itemInput.value);
  tituloPrincipal.innerText = itemInput.value;
});


const btnH1 = document.getElementById("btnH1");


btnH1.addEventListener("keyup", () => {
  console.log(btnH1.value);
  btnH1.innerText = btnH1.value;
});



//Seleccionar el boton 
//Añadirle un evento o un click
//Actualizar el contenidodel h1 con el value del imput