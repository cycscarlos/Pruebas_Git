//: -------MAP-------

// PRIMER EJEMPLO CON NÚMEROS

let miArray = [4, 9, 1, 20];

let miArrayMapeado = miArray.map(function (valorActual, indice, array) {
  return valorActual * 2;
});
console.log("Mi Array de números mapeado: ", miArrayMapeado);

// SEGUNDO EJEMPLO CON STRINGS

let miArray2 = ["Es", "Una", "Frase", "!"];

let miArray2Mapeado = miArray2.map(function (valorActual, indice, array) {
  return valorActual.split("").reverse().join("");
});
console.log("Mi Array de letras mapeado: ", miArray2Mapeado);

//: -------REDUCE-------

// Ejemplo 1

let miArray3 = [5, 4, 6, 7];
let valorInicial = 10;

let miArray3Reducido = miArray3.reduce(function (
  acumulador,
  valorActual,
  indice,
  array
) {
  return acumulador + valorActual;
},
valorInicial);

console.log(
  "Total suma números en mi Array (reduce function): ",
  miArray3Reducido
);

// Ejemplo 2

let miSegundoArray = [5, 9, 3, 4];
let valorInicial2 = 1; // hay que inicializar en uno para la 1ra. vez, para no tener un error

let miArrayReducido2 = miSegundoArray.reduce(function (
  acumulador,
  valorActual
) {
  return acumulador * valorActual;
},
valorInicial2);

console.log("Mi Array de números reducido: ", miArrayReducido2);

// Ejemplo 3

let myTercerArray = ["Es ", "Una ", "Frase"];

let miArrayReducido3 = myTercerArray.reduce(function (acumulador, valorActual) {
  return acumulador + valorActual;
}, "Concatenamos este texto con: ");
console.log("Mi Array de letras reducido: ", miArrayReducido3);

//: -------FILTER-------

// Ejemplo 1

let miArray4 = [4, 9, 22, 12, 2, 11, 3, 55];

let miArrayFiltrado = miArray4.filter(function (valorActual, indice, array) {
  return valorActual > 10;
});
console.log("Mi Array de números filtrado: ", miArrayFiltrado);

// Ejemplo 2

let miArray5 = ["hola", "como", "va", "todo"];

let miArrayFiltrado2 = miArray5.filter(function (valorActual, indice, array) {
  if (valorActual.length > 3) {
    return valorActual;
  } else {
    return false;
  }
});
console.log("Mi Array de letras filtrado: ", miArrayFiltrado2);

//: -------FOR EACH-------

// Ejemplo 1

let myArrow6 = ["hola", "como", "va", "todo"];

myArrow6.forEach(function (valorActual, indice, array) {
  console.log("El valor del elemento es: ", valorActual);
});

// Ejemplo 2

function imprimirEnConsola(e) {
  console.log("Utilizamos una función para ejecutarla dentro de un forEach:", e);
}

myArrow6.forEach(function (valorActual, indice, array) {
  imprimirEnConsola(valorActual);
});
