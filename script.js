const galeria = document.getElementById("galeria");

// 👉 CAMBIA ESTE NUMERO SEGÚN TUS FOTOS
const totalImagenes = 10;

for (let i = 1; i <= totalImagenes; i++) {
    const img = document.createElement("img");

    img.src = `img/tatuaje${i}.jpg`;
    img.loading = "lazy";

    img.onclick = () => {
        document.getElementById("lightbox").style.display = "flex";
        document.getElementById("imgGrande").src = img.src;
    };

    galeria.appendChild(img);
}

// cerrar imagen grande
document.getElementById("lightbox").onclick = () => {
    document.getElementById("lightbox").style.display = "none";
};
