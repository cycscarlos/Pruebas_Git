const a = [];

const arreglo = [1, 2, 3, 4, 5, 10, 15];
const letras = ["a", "b", "a", "b", "c", "a", "d"];

//* Manera 1 (larga).-

// arreglo.forEach(escribirNumeros);

// function escribirNumeros(item, index, arreglo) {
//   console.log("indice[" + index + "] = ", item);
// }

//* Manera 2 (corta).-
// arreglo.forEach((item, index, array) => {
//   console.log("indice [" + index + "] = ", item);
// });

//* Ejercicio 1 Operaciones matématicas básicas.-

let sumaTotal = 0;

arreglo.forEach((item) => {
  sumaTotal += item;
});
console.log("La suma total es: ", sumaTotal);

// Ejercicios 2.-

let contador = {}; /* definimos un objeto vacío */

letras.forEach((item) => {
  if (contador[item]) {
    contador[item]++; /* si el item ya existe, incrementamos el contador */
  } else {
    contador[item] = 1; /* si el item no existe, lo creamos */
  }
});
console.log(contador);
