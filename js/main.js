const botonArriba = document.getElementById("btn-arriba");

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        botonArriba.style.display = "block";
    } else {
        botonArriba.style.display = "none";
    }
};

botonArriba.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";
});

const texto = "Desarrollo Web • Diseño Digital • Soluciones Tecnológicas";
const elementoTexto = document.getElementById("texto-maquina");

let i = 0;

function escribirTexto() {
    if (i < texto.length) {
        elementoTexto.innerHTML += texto.charAt(i);
        i++;
        setTimeout(escribirTexto, 100);
    }
}

window.addEventListener("load", escribirTexto);