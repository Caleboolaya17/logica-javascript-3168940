//1. captura de variables
const titulo = document.querySelector(".titulo")
const scren = document.querySelector(".screen")
const miniaturas = document.querySelector(".container-min")

console.log(titulo)
console.log(screen)
console.log(miniaturas)

//2. funciones
function cambiarImg (event) {
    if(!event.target.src)return
    titulo.textContent = event.target.name
    screen.src = event.target.src
}

miniaturas.addEventListener("click", cambiarImg)




