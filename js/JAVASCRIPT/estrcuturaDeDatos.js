//ESTRUCTURA DE DATOS
//OTRO MAS DE INFORMATICA:
let numeros = [10, 20, 30];
console.log(numeros);

numeros.push(40);
console.log(numeros);
const dvr = numeros[3];
numeros.pop();
console.log(dvr);

console.log(numeros.includes(20));
console.log(numeros.length);
console.log(numeros);

//otros ejercicios con chatgpt
let comidas = [
  "arroz",
  "pizza",
  "salchichas",
  "dulce de leche con arroz",
  "hamburguesa",
];
console.log(comidas);
//agrego push
comidas.push("milanesa napolitana");
console.log(comidas);
//verifica si esta o no(True/False)
console.log(comidas.includes("arroz"));
console.log(comidas.includes("tamales"));
//guardar y eliminar
const plato = comidas[3];
comidas.pop();
console.log(comidas);
console.log(plato);
const date  = new Date("28-08-2025")
console.log(date);

