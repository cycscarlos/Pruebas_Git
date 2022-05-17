//: Creando y modificando HTML desde Javascript

const titulo2 = document.createElement("h2");

const textoTitulo2 = document.createTextNode("Este es el titulo 2");

// crear una copia de un node de HTML

const articulo = document.querySelector("article");

const articulo2 = articulo.cloneNode(true);

// insertar un nodo dentro del documento (HTML)

// primero se selecciona el padre
const seccion = document.getElementById("section");

// 1ra. manera: insertar el nodo "como último hijo del padre"

seccion.appendChild(articulo2);

// 2da. manera: insertar el nodo en cualquier lugar dentro del padre"

seccion.insertAdjacentElement("afterbegin", articulo2);

// eliminar un nodo dentro del documento (HTML)

// seccion.remove()
