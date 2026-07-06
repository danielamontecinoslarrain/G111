/*const adultos = Number(prompt("Cuantas entradas de adulto quieres?"))
const ninos = Number(prompt("Cuantas entradas de nino quieres?"))
const cortesia = Number(prompt("Cuantas entradas de cortesia quieres?"))

if (isNaN(adultos) || isNaN(ninos) || isNaN(cortesia)) {
    alert("Debes ingresar solo numeros")
} else {
    let totalEntradas = adultos + ninos + cortesia
    if (totalEntradas <= 10) {
        alert(`Llevas ${totalEntradas} entradas`)
    } else {
        alert("Llevas demasiadas entradas")
    }
}*/

const adultos = document.querySelector("#adultos")
const ninos = document.querySelector("#ninos")
const adultoMayor = document.querySelector("#adultoMayor")
const boton = document.querySelector("#calcular")
const resultado = document.querySelector("#resultado")
const fotos = document.querySelectorAll(".foto")

boton.addEventListener("click", function() {
  const total = Number(adultos.value) + Number(ninos.value) + Number(adultoMayor.value)

  if (total <= 10) {
    resultado.textContent = `Llevas ${total} entradas`
  } else {
    resultado.textContent = "Llevas demasiadas entradas"
  }
})

fotos.forEach(function(foto) {
  foto.addEventListener("click", function() {
    foto.classList.toggle("borde-activo")
  })
})