document.getElementById("showMore").addEventListener("click", function() {
    const extraInfo = document.getElementById("extraInfo");
    extraInfo.classList.toggle("show");
    this.textContent = extraInfo.classList.contains("show") 
        ? "Mostrar Menos Información" 
        : "Mostrar Más Información";
});
