// numeros = [1, 3, 5, 7, 9];
const numeros = Array(200).fill(5);

// forEach(callback, thisArg)
console.time("forEach()");
numeros.forEach((x, indice, arreglo) => {
  console.log(x * 2);
});
console.timeEnd("forEach()");

// map(callback, thisArg)
console.time("map()");
numeros.map((x, indice, arreglo) => {
  console.log(x);
});
console.timeEnd("map()");

console.time("map()");
res02 = numeros.map((x, indice, arreglo) => {
  return x * 10;
});
console.log("Nuevo arreglo de map es: ", res02);
console.timeEnd("map()");
