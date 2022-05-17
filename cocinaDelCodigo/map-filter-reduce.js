// Ejemplo 1.- manera antigua de filtrar Números menores que 100

function filtrarMenoresQue100(numeros) {
  const menoresQue100 = [];

  for (let i = 0; i < numeros.length; i++) {
    if (numeros < 100) {
      menoresQue100.push(numero);
    }
  }
  return menoresQue100;
}

// Ejemplo 2.- Map, filter y Reduce (funciones puras)

const numeros = [3, 10, 20, 50];

const dobles = numeros.map(function (numero) {
  return numero * 2;
});

numeros.filter(function () {});

numeros.reduce(function () {});

// MAP: Se usa cuando tenemos un array y queremos obtener un nuevo array de otra cosa

const productos = [
  { id: "vekjeiINed98LiOp", nombre: "Camiseta", precio: 500 },
  { id: "RkRjeiINed98LiOp", nombre: "Zapatos", precio: 2000 },
  { id: "PopEeiINed98LiOp", nombre: "Pantalón", precio: 1500 },
];

const productosConDescuento = productos.map(function (producto) {
  if (producto.precio < 1000) return producto;

  return {
    ...producto,
    precio: producto.precio * 0.9,
  };
});

//* Utilizando arrows functions
const idProductos = productos.map((producto) => producto.id);
console.log(idProductos);

//* El mismo resultado pero usando la forma mínima de las arrow functions
const idProductos2 = productos.map(({ id }) => id);
console.log(idProductos);

// FILTER: filtar los Productos baratos

const productosBaratos = productos.filter((producto) => {
  if (producto.precio < 1000) return producto;

  // return false;
});
console.log(productosBaratos);

const esCaro = (producto) => producto.precio > 1000;

const productosCaros = productos.filter(esCaro);
console.log(productosCaros);

//* extraer números repetidos

const otroArreglo = [1, 2, 3, 4, 3, 1];
const numerosUnicos1 = [...new Set(otroArreglo)];
console.log(numerosUnicos1);

const numerosUnicos2 = otroArreglo.filter((numero, index, self) => {
  return self.indexOf(numero) === index;
});

const numerosUnicos3 = otroArreglo.filter((numero, posicion, numeros) => {
  return posicion === numeros.indexOf(numero);
});

//* REDUCE: sumar todos los números del arreglo

// manera larga.-
const arregloDeNumeros = [3, 10, 20, 50];

const total = arregloDeNumeros.reduce((acumulador, numero) => {
  return acumulador + numero;
}, 0);
console.log(total);

//* manera corta.-

const acumular = (acumulador, numero) => acumulador + numero;
const total2 = arregloDeNumeros.reduce(acumular, 0);
console.log(total2);

//* Ejemplo 3.- Obtener un nuevo arreglo con el doble del valor usando reduce

const numerosX = [71, 41, 19, 88, 3, 65];

// acumulador.push(numero * 2);
const acumularDobles = (acumulador, numero) => {
  return [...acumulador, numero * 2];

  const numerosDobles = numerosX.reduce((acumularDobles, []));
};

