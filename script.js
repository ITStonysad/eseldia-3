const btnSi = document.getElementById("btn-si");
const btnNo = document.getElementById("btn-no");
const respuesta = document.getElementById("respuesta");
const container = document.querySelector(".container");

// Función para mostrar mensaje hermoso
btnSi.addEventListener("click", () => {
    respuesta.innerHTML = `
        <p>💖 ¡Sabía que dirías que sí, Abby! 💖<br>
        Eres la persona más hermosa que he conocido y me encantaría compartir cada día contigo. <br>
        ¡Gracias por hacer mi vida más especial! 🌹✨</p>
    `;
});

// Función para mover el botón "No"
btnNo.addEventListener("mouseover", () => {
    const maxX = container.offsetWidth - btnNo.offsetWidth;
    const maxY = container.offsetHeight - btnNo.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    btnNo.style.position = "absolute";
    btnNo.style.left = `${randomX}px`;
    btnNo.style.top = `${randomY}px`;
});

// Función para crear corazones flotando
function lanzarCorazones() {
    const corazon = document.createElement("div");
    corazon.classList.add("corazon");
    corazon.innerHTML = "❤️";
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.top = "100vh";

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 4000);
}

// Lanza corazones cada cierto tiempo al decir que sí
btnSi.addEventListener("click", () => {
    setInterval(lanzarCorazones, 300);
});
