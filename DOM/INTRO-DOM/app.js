//Seleccionar elementos que interactuan o respondes a interacción

const pantalla = document.querySelector(".pantalla")
const btnMenos = document.querySelector(".btn-menos")
const btnMas = document.querySelector(".btn-mas")
let counter = 1


//2. funcion
function incrementar () {
  counter++
  pantalla.textContent = counter
  if(counter >= 10) {
    pantalla.style.color = "blue"
  }
  if(counter  >= 30) {
    document.body.style.backgroundColor = "black"
}
    }

function decrementar () {
  if( counter > 0) {

  counter--
  pantalla.textContent = counter
  if(counter < 10) {
    pantalla.style.color = "black"
}


  if(counter  < 30) {
    document.body.style.backgroundColor = "white"
}
}
}
    


//3. crear evento
btnMas.addEventListener("click" , incrementar)
btnMenos.addEventListener("click" , decrementar)