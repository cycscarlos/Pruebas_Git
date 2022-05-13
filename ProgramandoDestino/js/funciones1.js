window.onload = inicio;

function inicio() {
  document.getElementById("workArea-container").insertAdjacentHTML(
    "beforeend",
    `<input id="campo" type="text" placeholder="Ingrese su nombre">
    <button class="boton">Aceptar</button>
    <div id="saludo"></div>`
  );
  document.querySelector(".boton").onclick = leer;
}

function leer() {
  let entrada = document.querySelector("#campo").value;
  console.log(entrada);

  document
    .getElementById("workArea-container")
    .insertAdjacentHTML(
      "beforeend",
      `<p><strong>Nombre:</strong>${entrada}</p>`
    );
}
