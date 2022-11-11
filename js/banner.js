let img = document.querySelector('.img_banner')

let imgs = 1

function show_banner() {
    imgs++

    if (imgs > 7) {
        imgs = 1
    }

    img.src = "img/slide" + imgs + ".png"
    img.alt = "Slide" + " " + imgs
}

setInterval(show_banner, 2000);