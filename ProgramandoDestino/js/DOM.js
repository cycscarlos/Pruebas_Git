//* obtener la altura del header
const header = document.getElementById("header");

console.log(header.clientHeight);

//* obtener Todos lo datos del header: altura, ancho, posicion x,y, etc
console.log(header.getBoundingClientRect());

const { x, y, bottom, left, right, height, width } =
  header.getBoundingClientRect();

console.log(x, y, bottom, left, right, height, width);


