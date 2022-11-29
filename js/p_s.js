let img = document.querySelector(".container_form_c_bingo img");

let click = 0

img.addEventListener("click", function() {
    click++
    if (click > 2) {
        click = 1
    }
    if (click == 1) {
        img.style.animation = "none"
    }
    if (click == 2) {
        img.style.animation = "fourDBanner 1.5s ease-in-out infinite both"
    }
})