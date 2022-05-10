//: Leer por ID
// console.log(document.getElementById("header"));

//: Leer por Clase
// console.log(document.getElementsByClassName("classHeader"));

//: Al leer por clase, devuelve una coleccíon de elementos HTML y
//: no un arreglo o un objeto que pudieramos manipular
const HTMLCollection = document.getElementsByClassName("classArticle");

console.log(HTMLCollection);

//: Para manipular convertimos la colección en un arreglo (se muestran dos maneras)
// const Arreglo = console.log(Array.from(HTMLCollection));

const Arreglo = [...HTMLCollection];

console.log(Arreglo);

//: Para imprimir cada elemnto del nuevo arreglo, utilizamos un forEach()
Arreglo.forEach((element) => {
  console.log(element);
});

//: Leer por tipo de TAG o etiqueta
// console.group(document.getElementsByTagName("p"));

//: Se puede leer por cualquiera: o nombre de Clase o ID; este query trae solo el 1ro que haga match!
// console.log(document.querySelector("#main"));

//: Se puede leer por cualquiera: o nombre de Clase o ID; este query trae TODOS los que hagan match!
// console.log(document.querySelectorAll("div"));

//: Para leer una clase de coloca ".classname", y para leer un ID "#id".
// console.log(document.querySelector(".classArticle"));
// console.log(document.querySelectorAll(".classArticle"));
// console.log(document.querySelector(""main"));
// console.log(document.querySelectorAll("#main"));

//: Se puede leer por un nombre cualquiera colocado en una etiqueta HTML. Ejemplo: (name="nombre")
// console.log(document.querySelectorAll("[nombre]"));

const elemento = document.querySelectorAll("section");
console.log(elemento.parentElement);
