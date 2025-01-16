//Pedir los 10 pokemos y listar sus nombres
//https://pokeapi.co/api/v2/pokemon?limit=10
//Parte del ejemplo de las pelis con XMLHTTPRequest

function fetchPokemonData(){
    const baseUrl = https://pokeapi.co/api/v2/pokemon?limit=10

    const xhr = new XMLHttpRequest();
    xhr.open("GET", baseUrl, true);
}

fetchPokemonData();


//Asyn/await


xhr.open("GET", "./pokemon.json"); 
xhr.onreadystatechange = function () {
console.log("Cambio de estado de la peticion");
  console.log("Codigo estado: ", this.readyState);
  if (this.readyState === 4 && this.status === 200) {
    //convertimos a array para trabajar con los datos
    const data = JSON.parse(this.responseText);
    //insertar los datos en el HTML
    data.forEach((pokemons) => {
      const li = document.createElement("li");
      li.innerHTML = `Name: ${pokemons.name}, url: ${pokemons.url}`;
      document.querySelector("#pokemon").appendChild(li);
    });
    console.log(data);
  }
};

xhr.send();

console.log("Página cargada");