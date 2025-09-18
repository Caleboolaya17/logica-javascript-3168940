const main = document.querySelector("#main")
const valorVertical = document.querySelectorAll(".valor-Vertical")
const valorHorizontal = document.querySelectorAll(".valor-Horizontal")
const pelota = document.querySelector(".pelota")

function verScroll () {
    let top = main.scrollTop
    let left = main.scrollLeft
    valorVertical.textContent = `V: ${top}`
    valorHorizontal.textContent = `H: ${left}`
    pelota.style.top = `${top}px`
    pelota.style.left = `${left}px`
    pelota.style.transform = `scale(${(top/30)})`
    
}

main.addEventListener("scroll",verScroll)