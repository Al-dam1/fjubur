/*
   PRIMEROS PASOS EN JAVASCRIPT
*/
alert("¡Soy JavaScript!");
alert(3+2-4);
// 1- Escribir un comentario en una linea

let HelloWordl = "Hola js, te estoy estudiando :b!";
console.log(HelloWordl); //ESTE ES MI PRIMER EJERCICIO CON JS
console.log(24*5)
// 2- Escribir en un comentario en varias lineas
/*
ESTE
 ES 
UN 
COMENTARIO
DE 
VARIAS
LINEAS
PERRITO
MALVADOO
 */

// 3- Declara variables con valores asociados a todos los datos de tipo primitivo.
// strings
// let myName = "Damian Nicolas";
// let apellido = "Alderete";
// console.log(myName + " " + apellido);
// // numeros
// let age = 21;
// let height = 1.7;
// // boolean
// let isTeacher = false;
// let isStudent = true;
// console.log(isTeacher);
// console.log(isStudent);

// // 4- Imprime por consola el valor de todas las variables.
// console.log(myName);
// console.log(apellido);
// console.log(age);
// console.log(height);
// console.log(isTeacher);
// console.log(isStudent);

// // 5- Imprime por consola el tipo de todas las variables.
// console.log(typeof myName);
// console.log(typeof apellido);
// console.log(typeof age);
// console.log(typeof height);
// console.log(typeof isTeacher);
// console.log(typeof isStudent);

// // 6- A CONTINUACION, MODIFICA LOS VALORES DE LAS VARIABLES POR OTROS DEL MISMO TIPO.CONTINUACION
// myName = "Pablo";
// apellido = "Taborda";
// console.log(myName + " " + apellido);
// age = "50";
// height = ",1.90 su altura ";
// console.log(age + " " + height);
// isTeacher = true;
// isStudent = false;
// console.log(isTeacher + " " + isStudent);

// // 7- A continuacion, modifica los valores de las variables por otros de distintos tipo.
// myName = 25;
// apellido = false;
// console.log(myName + ", " + apellido);
// age = true;
// height = " PERRITO MALVADOOOO";
// console.log(age + " y suena alta previa" + height);
// isStudent = 90;
// isTeacher = 2;
// console.log(isStudent + " " + isTeacher + "mts");

// // 8- Declara constantes con valores asocaidos a todos los tipos de datos primitivos.
// const hellowords25 = "!HOLA MUNDOO¡";
// console.log(hellowords25);

// const FJU = "Familia";
// console.log(FJU);

// const estudiando = True;
// console.log(estudiando);

// const trabajo = False;
// console.log(trabajo);

// const limon = "frutos verdes compadre";
// console.log(limon);

// const haceCalor = "True";
// console.log(haceCalor);
// //js

//hora en el sistema
// hora en el sistema
// const saludo = 'output'; // (opcional, no se está usando por ahora)

// const hora = new Date().getHours();
// let mensaje;
// let nombreEstilo;

// if (hora < 13) {
//   mensaje = 'Buenos Días';
//   nombreEstilo = 'mañana';
// } else if (hora < 21) {
//   mensaje = 'Buenas Tardes';
//   nombreEstilo = 'tarde'; // corregido acá
// } else if (hora < 24) {
//   mensaje = 'Buenas Noches';
//   nombreEstilo = 'noche';
// } else {
//   mensaje = 'Hola';
//   nombreEstilo = 'madrugada';
// }

// document.getElementById('output').innerHTML = mensaje;
// document.body.className = nombreEstilo;

// const footer= "se viene la prime guachooo";
// document.querySelector("footer").innerHTML= footer;

// // 9- A continuacion modifica los valores de las contantes.
// // let hellowords25= "hola!!"
// console.log("hellowords25");

// // 10- Comenta las lineas que produzcan algun tipo de error al ejecutarse.
// // let = 1ensaje Mensaje de error al nombrar a LET con Numero... 
//  const date = new Date("08-28-2025")
//  console.log(date);
 
//  suma2=3
//  suma1=6
//  suma= suma2 * suma1
//  console.log("suma");

// let multi1 = 29
// let multi2 = 9
// let total_multi= multi1*multi2
// console.log(total_multi);
// alert("hola guampa!")
// let dime_nombre = prompt("ingresa tu nommbre: ")
// let conca =  "hola como estas " + dime_nombre 
// console.log(conca);
// //incremento
// let num6= 0
// num6 = num6 +1;
// console.log(num6);

// num6 += 1;
// console.log(num6);
// num6++;
// console.log(num6);

// console.log(num6++);
// console.log(++num6);

// //concatenacion
// let msg1= "hola";
// let msg2= "q tal";
// let msg3 = msg1 + " " + msg2;
// console.log(msg3);
// const nombre = prompt("Ingresda tu nombre: ");
// //imprime en pantalla!
// saludo.innerHTML = `<h2>Hola <strong>${nombre}</strong>!</h2>`;

//sergie code
let string = "ESTA ES UNA RUTA DE ESCAPE \ PROBALO "
console.log(string)
let string = 'el simbolo con el que se escapa es \'probalo\''
console.log(string); 
let escape_salto_linea = 'esto esta arriba \n esto esta abajo'
// t de tabulador - b de borrar bastakit - v de vertical tabuleitor salto de linea
console.log(escape_salto_linea);
//slice(star, end) cortar 
let texto = 'educacion'
let resultado = texto.slice(3,9)
console.log(resultado);
let text = 'la educacion es muy  importante en argentina'
const resul = text.replace('argentina', 'el mundo')
const resu = text.toUpperCase()
console.log(resul)
console.log(resu)
//trim saca los espacios 
const textu = '          la educacion es importante en '
const texto2= '  argentina   '
const texto3 = '   en el mundo '
const cadenas = textu.trim().concat(texto3)
console.log(cadenas)
const cadena = texto2.charAt(8)//devuelve la posicion
console.log(cadena)
//separa el texto split
const varias_cadenas = 'esto lo manda el backend. este texto es importante. dividi el texto'
const resultado_varias = varias_cadenas.split('. ')
console.log(resultado_varias)




 