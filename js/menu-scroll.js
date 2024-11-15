let navbar = document.getElementById("navbar");
let prevScrollPos = window.pageYOffset;

window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;

    if (currentScrollPos === 0) {
        // Muestra la barra de navegación al estar en la parte superior
        navbar.classList.remove("hide");
    } else if (prevScrollPos > currentScrollPos) {
        // Oculta la barra al desplazarse hacia abajo
        navbar.classList.add("hide");
    }

    prevScrollPos = currentScrollPos;
};
