/* ========= CONFIGURA TUS IMÁGENES AQUÍ =========
   Coloca tus PNG exportados de Canva dentro de /img
   y lista sus nombres en el arreglo IMAGES en el orden que quieras mostrar.
   Puedes mezclar resoluciones; el script se adapta.
*/
const IMAGES = [
"1.png",
"2.png",
"3.png",
"4.png",
"5.png",
  
];

/* ========= NO EDITES DE AQUÍ HACIA ABAJO (a menos que quieras) ========= */

// Utilidad: crea elementos con clases y atributos
function cargarInvitacion() {
  const contenedor = document.getElementById("invitacion");

  IMAGES.forEach(src => {
    const img = document.createElement("img");
    img.src = `img/${src}`;
    img.alt = "Invitación de boda";
    contenedor.appendChild(img);
  });
}

document.addEventListener("DOMContentLoaded", cargarInvitacion);