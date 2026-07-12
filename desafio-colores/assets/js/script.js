
const divAzul = document.getElementById("azul");
const divRojo = document.getElementById("rojo");

const divVerde = document.getElementById("verde");
const divAmarillo = document.getElementById("amarillo");
const divKey = document.getElementById("key");

const contenedorNuevos = document.getElementById("nuevos-colores");






let color = "";

function pintar(elemento, colorNuevo) {
  elemento.style.backgroundColor = colorNuevo;
}

divAzul.addEventListener("click", function (event) {
  pintar(event.target, "black");
});

divRojo.addEventListener("click", function (event) {
  pintar(event.target, "black");
});

divVerde.addEventListener("click", function (event) {
  pintar(event.target, "black");
});

divAmarillo.addEventListener("click", function (event) {
  pintar(event.target, "black");
});

document.addEventListener("keydown", function (event) {
  const tecla = event.key.toLowerCase();

  if (tecla === "a") {
    color = "pink";
    pintar(divKey, color);
  } else if (tecla === "s") {
    color = "orange";
    pintar(divKey, color);
  } else if (tecla === "d") {
    color = "lightblue";
    pintar(divKey, color);
  } else if (tecla === "q") {
    crearDiv("purple");
  } else if (tecla === "w") {
    crearDiv("gray");
  } else if (tecla === "e") {
    crearDiv("brown");
  }
});

function crearDiv(colorNuevo) {
  const nuevoDiv = document.createElement("div");

  nuevoDiv.style.width = "200px";
  nuevoDiv.style.height = "200px";
  nuevoDiv.style.backgroundColor = colorNuevo;
  nuevoDiv.style.border = "1px solid black";

  contenedorNuevos.appendChild(nuevoDiv);
}