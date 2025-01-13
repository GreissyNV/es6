//Traer las referencias de los elementos del DOM
const itemForm = document.querySelector("#item-form");
const itemInput = document.querySelector("#item-input");
const itemList = document.querySelector("#item-list");

/**
 * 
 * @param {SubmitEvent} evt 
 */
function addItem(evt){
  evt.preventDefault(); //Previene el evento submit del formulario
  
  //Validar que el input no este vacio
  const newItem = itemInput.ValueMax.trim();
  //si el campo esta vacio '' avisamos al usuario y salimos de la funcion
if(newItem === '' ){
  alert("Por favor añade un texto");
  return;
}
  //Inserta el elemento en el DOM
  const li = createNewItem(newItem);
  itemList.appendChild(li);

  //Limpiar el campo de texto
  itemInput.value = "";
}

/** Funciones para la creacion de los elementos de la lista **/
function createNewItem(textItem) {
  const li = document.createElement("li"); 
  const text = document.createTextNode(textItem); 
  li.appendChild(text); 

  const button = createButton("remove-item btn-link text-red");
  li.appendChild(button);
  return li;
}

function createButton(clases) {
  const button = document.createElement("button");
  button.className = clases;

  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);
  return button;
}

function createIcon(clases) {
  const icon = document.createElement("i");
  icon.className = clases;
  return icon;
}

//Event Listeners
itemForm.addEventListener("submit", addItem);