// No usar nunca!!! es mala práctica crear una función para ejecutarla dentro del html, con onClick ().
// function clickTitulo(params) {
//   console.log("El usuario hizo click en el titulo");
// }
function clickTitulo(elEvento) {
  console.log(elEvento);
}

// Dos maneras de hacerlo solo con javascript

document.addEventListener("DOMContentLoaded", function () {
  // document.getElementById("form").onclick = clickTitulo;
  document.getElementById("form").addEventListener("click", clickTitulo);
});

const form = document.getElementById("formulario");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(event);
});
