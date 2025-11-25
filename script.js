function verificar() {
    const fechaIngresada = document.getElementById("fecha").value.trim();
    const mensajeError = document.getElementById("mensajeError");

    mensajeError.textContent = "";

    const fechaCorrecta = "16/03/2025";

    if (fechaIngresada !== fechaCorrecta) {
        mensajeError.textContent = "La fecha no es correcta, no me quieres mugrosa, come caca";
        return;
    }

    // Mostrar sorpresa
    document.getElementById("contenedor").style.display = "none";
    document.getElementById("resultado").style.display = "block";

    cargarFotos();
}

function cargarFotos() {
    const galeria = document.getElementById("galeria");

    // Cambia este número según cuántas fotos agregues
    const cantidadFotos = 5;

    for (let i = 1; i <= cantidadFotos; i++) {
        const img = document.createElement("img");
        img.src = `foto${i}.jpg`;
        galeria.appendChild(img);
    }
}
