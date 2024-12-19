const persona = {
  nombre: "Juan",
  apodo: "El trinchador asesino",
  edad: 30,
  profesion: "herrero",
  meritos: ["Ganador de forjado a fuego 2023", "sus curchillos cortan mucho"]
}

for(let prop in persona) {
  console.log(`Propiedad: ${prop} es ${persona[prop]}`);
}

//for off

/* Bucles:
- while
- do while
- for
- metodos de arrays: foreach, map, filter...

- for in
- for on
*/