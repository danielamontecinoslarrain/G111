// 1. Imagen con borde
const imagen = document.querySelector("#imagen-borde");

let borde = false;

imagen.addEventListener("click", () => {

    if (borde) {
        imagen.style.border = "";
        borde = false;
    } else {
        imagen.style.border = "2px solid red";
        borde = true;
    }

});

// 2. Stickers
const botonCalcular = document.querySelector("#calcular");
const resultadoStickers = document.querySelector("#resultado-stickers");

botonCalcular.addEventListener("click", () => {
  const sticker1 = Number(document.querySelector("#sticker1").value);
  const sticker2 = Number(document.querySelector("#sticker2").value);
  const sticker3 = Number(document.querySelector("#sticker3").value);

  const total = sticker1 + sticker2 + sticker3;

  if (total <= 10) {
    resultadoStickers.innerHTML = `Llevas ${total} stickers`;
  } else {
    resultadoStickers.innerHTML = "Llevas demasiados stickers";
  }
});

// 3. Password
const botonIngresar = document.querySelector("#ingresar");
const resultadoPassword = document.querySelector("#resultado-password");

botonIngresar.addEventListener("click", () => {
  const digito1 = document.querySelector("#digito1").value;
  const digito2 = document.querySelector("#digito2").value;
  const digito3 = document.querySelector("#digito3").value;

  const password = digito1 + digito2 + digito3;

  if (password === "911") {
    resultadoPassword.innerHTML = "Password 1 correcto";
  } else if (password === "714") {
    resultadoPassword.innerHTML = "Password 2 correcto";
  } else {
    resultadoPassword.innerHTML = "Password incorrecto";
  }
});