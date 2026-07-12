
function pintar(){
ele.style.backgroundColor = 'yellow'
}
const ele = document.getElementById("ele1")
ele.addEventListener("click", pintar);

divAzul.addEventListener("click", function () {
    divAzul.style.backgroundColor = "black";
});

divRojo.addEventListener("click", function () {
    divRojo.style.backgroundColor = "black";
});

divVerde.addEventListener("click", function () {
    divVerde.style.backgroundColor = "black";
});

divAmarillo.addEventListener("click", function () {
    divAmarillo.style.backgroundColor = "black";
});

let color = "";

document.addEventListener("keydown", function (event) {
    if (event.key === "a") {
        color = "pink";
        divKey.style.backgroundColor = color;
    } else if (event.key === "s") {
        color = "orange";
        divKey.style.backgroundColor = color;
    } else if (event.key === "d") {
        color = "lightblue";
        divKey.style.backgroundColor = color;
    } else if (event.key === "q") {
        crearDiv("purple");
    } else if (event.key === "w") {
        crearDiv("gray");
    } else if (event.key === "e") {
        crearDiv("brown");
    }
});

function crearDiv(colorNuevo) {
    const nuevoDiv = document.createElement("div");
    nuevoDiv.style.width = "200px";
    nuevoDiv.style.height = "200px";
    nuevoDiv.style.backgroundColor = colorNuevo;

    document.body.appendChild(nuevoDiv);
}