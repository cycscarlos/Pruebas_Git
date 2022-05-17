const numeros = Array(20000).fill(5);

// forEach(callback, thisArg)
console.time("forEach()");
numeros.forEach((x, indice, arreglo) => {
  return x * 2;
});
console.timeEnd("forEach()");

console.time("map()");
res02 = numeros.map((x, indice, arreglo) => {
  return x * 10;
});
console.timeEnd("map()");
