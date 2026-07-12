
const precio = 400000;
let cantidad = 0;

const valorHTML = document.querySelector(".valor");
const cantidadHTML = document.querySelector (".cantidad");
const totalHTML = document.querySelector (".valor-total");

valorHTML.innerHTML = precio;
totalHTML.innerHTML = 0;

function sumar () {
    cantidad++;
    cantidadHTML.innerHTML= cantidad;
    totalHTML.innerHTML = precio * cantidad;

}

function restar () {
    if (cantidad > 0) {
        cantidad--;
        cantidadHTML.innerHTML=cantidad
           totalHTML.innerHTML = precio * cantidad;
    }
}

