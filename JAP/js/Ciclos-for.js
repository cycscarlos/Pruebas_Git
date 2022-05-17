arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const letras = ["a", "b", "a", "b", "c", "a", "d"];

for (let i = 0; i < arreglo.length; i++) {
  console.log(arreglo[i]);
}

arreglo.forEach(iterarArreglo);

function iterarArreglo(item, index, array) {
  console.log(item, index, array);
}

let contador = [];

letras.forEach((iterarLetras) => {
  if (contador[iterarLetras]) {
    contador[iterarLetras]++;
  } else {
    contador[iterarLetras] = 1;
  }
});
console.log(contador);
