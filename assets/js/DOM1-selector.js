//: Leyendo HTML con selectores desde Javascript

// console.log(document.getElementById("idHeader"));

// console.log(document.getElementsByClassName("ejemploClass"));

// console.log(document.getElementsByTagName("div"));

// console.log(document.querySelector("a"));

// console.log(document.querySelectorAll("p"));

// console.log(document.querySelector("#idHeader"));

// console.log(document.querySelectorAll(".ejemploClass"));

// console.log(document.querySelectorAll("[nombre]"));

// const elemento = document.getElementById("idHeader");

const lista1 = document.getElementsByClassName("ejemploClass");

console.log(lista1);

const array = [...lista1];

console.log(array);

array.forEach(element => {
  console.log(element);
});
