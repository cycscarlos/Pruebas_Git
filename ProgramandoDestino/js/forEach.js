const valores = [3, 5, 7, 9];

// for (let i = 0; i < valores.length; i++) {
//   console.log(valores[i]);
// }

// valores.forEach((valor, index, array) => {
//   console.log("valor: ", valor);
//   console.log("index: ", index);
//   console.log("array: ", array);
// });

const lista = document.querySelectorAll("li");
// console.log(lista);

// lista.forEach((valor, index, array) => {
//   console.log("valor: ", valor);
//   console.log("index: ", index);
//   console.log("array: ", array);
// });

// lista.forEach((e) => {
//   console.log(e);
// });

// lista.forEach((li) => {
//   lista[0].style.backgroundColor = "yellow";
//   console.log(li);
// });

lista.forEach((li) => {
  li.style.backgroundColor = "yellow";
  console.log(li);
});

//* otro ejemplo
const valores2 = [3, 5, 7, 9, 10, 11, 4];

// for (let i = 0; i < valores2.length; i++) {
//   if (valores2[i] % 2 === 0) {
//     console.log("Encontré un par: ", valores2[i]);
//     break;
//   }
// }

// console.time("forEach()");
// valores2.forEach((valor) => {
//   if (valor % 2 === 0) {
//     console.log("Encontré un par: ", valor);
//   }
// });
// console.timeEnd("forEach()");
