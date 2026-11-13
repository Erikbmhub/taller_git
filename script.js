
const boton = document.querySelector("#miBoton");
const mensaje = document.querySelector("#mensaje");

boton.addEventListener("click", () => {
    mensaje.textContent = "¡Has hecho clic en el botón!";
});
