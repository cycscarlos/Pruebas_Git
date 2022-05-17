const boton = document.querySelectorAll(".evento-btn");
// console.log(boton);

//* Ejemplo 1.- Con querySelector solamente

// boton.addEventListener("click", (e) => {
//   console.log(e);
//   alert("Click 1");
// });

// boton.addEventListener("click", (e) => {
//   alert("Click 2");
// });

//* Ejemplo2.- Con querySelectorAll (trae un NodeList)

// boton[0].addEventListener("click", (e) => {
//   console.log(e);
//   boton[0].style.backgroundColor = "red";
// });
// boton[1].addEventListener("click", (e) => {
//   console.log(e);
//   boton[1].style.backgroundColor = "green";
// });
// boton[2].addEventListener("click", (e) => {
//   console.log(e);
//   boton[2].style.backgroundColor = "blue";
// });

//* Ejemplo3.- Con forEach

// boton.forEach((item) => {
//   console.log(item);
//   item.addEventListener("click", () => {
//     item.style.backgroundColor = "red";
//   });
// });

//* Ejemplo4.- Con forEach y atributo HTMl Data- y Dataset (DOMStringMap)

// boton.forEach((item) => {
//   console.log(item.dataset.color);
//   item.addEventListener("click", () => {
//     item.style.backgroundColor = item.dataset.color || "purple";
//   });
// });

//* Ejemplo5.- Delegación e Eventos.
//* Se le coloca el listener solo al padre, y se delega el evento a los hijos.

const botonContenedor = document.querySelector("#btnBx-id");

botonContenedor.addEventListener("click", (e) => {

    console.log(e.target.id);
    
    if (e.target.id !== "btnBx-id") {
        e.target.style.backgroundColor = e.target.dataset.color || "purple";
    }
});

