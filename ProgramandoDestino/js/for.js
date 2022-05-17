const valores = [3, 5, 7, 9];

for (let i = 0; i < valores.length; i++) {
  console.log("Ciclo for():", valores[i]);
}

valores.forEach((x, index, array) => {
  console.log("Ciclo forEach():", "valor: ", x);
  console.log("Ciclo forEach():", "index: ", index);
  console.log("Ciclo forEach():", "array: ", array);
});
