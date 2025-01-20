//Pedir los 10 pokemos y listar sus nombres
//https://pokeapi.co/api/v2/pokemon?limit=10
//Parte del ejemplo de las pelis con XMLHTTPRequest

function fetchPokemonData() {
    const baseUrl = "https://pokeapi.co/api/v2/pokemon?limit=10";
  
    const xhr = new XMLHttpRequest();
    xhr.open("GET", baseUrl, true);
    xhr.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        //convertimos a array para trabajar con los datos
        const data = JSON.parse(this.responseText);
        console.dir(data);
        data.results.forEach((pokemon) => {
          const li = document.createElement("li");
          li.innerHTML = `Pokemon: ${pokemon.name}`;
          document.querySelector("#pokemons").appendChild(li);
        });
      }
    };
    xhr.send();
  }
  
  fetchPokemonData();