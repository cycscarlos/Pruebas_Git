// window.onload = inicio;

// function inicio() {
//   const nombre = prompt("Ingrese su nombre");

//   const parrafoNombre = document.createElement("p");
//   parrafoNombre.innerHTML = `<strong>Nombre: </strong>${nombre}`;
//   document.getElementById("workArea-container").appendChild(parrafoNombre);
// }

function pedirDatos(datoEntrada, label) {
  const dato = prompt(`Ingrese su ${datoEntrada}`);

  const p = document.createElement("p");
  p.innerHTML = `<strong>${label}: </strong>${dato}`;
  document.getElementById("workArea-container").appendChild(p);
}
pedirDatos("nombre", "Nombre");
pedirDatos("apellido", "Apellido");
pedirDatos("edad", "Edad");
