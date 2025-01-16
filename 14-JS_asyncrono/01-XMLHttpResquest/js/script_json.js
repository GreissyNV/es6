const pelis = [
    {
        title : "Piratas del caribe",
        year: 2003,
    },
    {
        title: "Titanic",
        year: 1998,
    },
    {
        title: "Hakers",
        year: 1995,
    },
    {
        title: "Avatar",
        year: 2009,
    }
];
console.log(pelis);
const pelisJson = JSON.stringify(pelis);
console.log(pelisJson); //Aqui esta en formato javascript

let userJSON = '{"name": "John", "age": 30, "car":null}'; // es: propiedad : + valor
const user = JSON.parse(userJSON);

console.log(user);
user.car ="BMW"
console.log(user); //aqui esta en fromato JSON

userJSON = JSON.stringify(user);
console.log(userJSON); // Lo volvemos a pasar a Javascript



