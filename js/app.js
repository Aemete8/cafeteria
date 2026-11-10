// Menú hamburguesa: abre y cierra la navegación en pantallas pequeñas
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("main-nav");

function setMenu(open) {
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute(
        "aria-label",
        open ? "Cerrar menú de navegación" : "Abrir menú de navegación",
    );
}

toggle.addEventListener("click", () => {
    setMenu(!nav.classList.contains("open"));
});

// Cierra el menú al elegir una opción
nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
});

// Cierra el menú con la tecla Escape
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMenu(false);
});

// Si la pantalla se agranda hasta computador, restablece el estado del menú
window.matchMedia("(min-width: 1024px)").addEventListener("change", (e) => {
    if (e.matches) setMenu(false);
});
