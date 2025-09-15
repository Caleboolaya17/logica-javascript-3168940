const formulario = document.querySelector(".form")
const inputNombre = document.querySelector("#nombre")

const enviarData = (e) => {
    e.preventDefault()
    console.log("enviando...")
}

formulario.addEventListener("submit", enviarData)