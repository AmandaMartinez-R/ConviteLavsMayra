const particlesContainer = document.getElementById("particles");

function criarParticula() {
    const part = document.createElement("img");
    part.src = "assets/estrelaDourada.png";
    part.classList.add("particle");

    part.style.left = Math.random() * 100 + "vw";
    part.style.animationDuration = 5 + Math.random() * 5 + "s";

    particlesContainer.appendChild(part);

    setTimeout(() => {
        part.remove();
    }, 10000);
}

setInterval(criarParticula, 500);
