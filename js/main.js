/* Codigo JS */

/* Declaracion de variables */

var nombre;


/* Asingacion de valores */

nombre="Lucas"; /* string o cadena de caracteres */
console.log(nombre);
/* Inicializacion */

let apellidoPaterno = "Perez";
let edad = 20;

/* Constantes */
const PI=3.1416;
const GRAVEDAD=9.8;

/* variables dentro de variables o concatenación ( el + en valor numerico se suma y cuando es string lo concatena o agrega a la cadena) */

let nombreCompleto=nombre + " " + apellidoPaterno;


let resultado= PI + GRAVEDAD + 5.4;

edad="24"; /* Cambio de tipo de dato de numeral a string */


/* Métodos de entrada y salida de datos */
/* metodo salida */
//console.log(nombre);
//console.log(edad);
//console.log("El resultado de la suma de " + PI + " y " + GRAVEDAD + " es: " + resultado);

//console.log(PI + GRAVEDAD);

//alert("Qué hace loco");

/* metodo entrada */
//Lolprompt("Hoola como te llamas?");
/* 
nombre =prompt("Hola, como te llamas?");
console.log("El nombre es: " + nombre); */

let nombre2 = prompt("Hola, como te llamas?");

console.log(nombre2);


let num1=parseInt(prompt("Ingresa el primer numero:"));
let num2=parseInt(prompt("Ingresa el segundo numero:"));

let num3=parseFloat(prompt("Ingresa el numero con decimal: "));






let resultadoSuma= num1+num2;

console.log("El resultado de la suma es: ");
