var frutas = ['Manzana', 'Platano', 'Cereza', 'Fresa'];
console.log(frutas);
console.log(frutas.length);
console.log(frutas[1]);
var masFrutas = frutas.push("Uvas");
console.log(frutas);
console.log(masFrutas);
var menosFrutas = frutas.pop("Uvas");
console.log(frutas);
console.log(menosFrutas);
var inicioFrutas = frutas.unshift("Uvas");
console.log(frutas);
var borrarFruit = frutas.shift("Uvas");
console.log(frutas);
var position = frutas.indexOf("Cereza");
console.log(frutas);
console.log(position);