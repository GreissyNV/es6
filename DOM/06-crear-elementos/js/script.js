//Rapida de escribir pero poco eficiente
/*
      <li>
        Leche
        <button class="remove-item btn-link text-red">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </li>
*/

//Traer una referencia al boton
const btnAddItem = document.querySelector("#mi-boton");
//Traer una referencia a la lista
const lista = document.querySelector("#item-list");

function createListItem(textItem) {
  const li = document.createElement("li");
  li.innerHTML = `${textItem}
                  <button class="remove-item btn-link text-red">
                          <i class="fa-solid fa-xmark"></i>
                  </button>`;
  lista.appendChild(li);
  console.log(li);
}

//Event Listeners
btnAddItem.addEventListener("click", () => {
  console.log("Añadir item!!!");
  createListItem(itemInput.value);
  itemInput.value = "";
});
