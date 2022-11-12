let imgwsp = document.querySelector(".img_wsp_flotante img")
let form = document.querySelector(".wsp_flotante form")

let enviar = document.querySelector("#enviar")

imgwsp.addEventListener("click", function() {
    form.classList.toggle("activeform")
})


enviar.addEventListener("click", function() {
    let inputName = document.querySelector("#name").value
    let inputMensaje = document.querySelector("#mensaje").value

    let urlWsp = "https://api.whatsapp.com/send?phone=5493425245550&text=Mensaje de Whatsapp flotante: %0A%0ANombre: %0A" + inputName + "%0A%0AMensaje: %0A" + inputMensaje + "%0A"

    window.open(urlWsp)
})