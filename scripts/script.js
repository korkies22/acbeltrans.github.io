function displayTimeline() {
  'use strict';
  /* carlos-sarmiento: Te recomiendo cambiar var por let por la cuestión del scope que vimos para la clase (además var es algo anticuado)*/
  let imagen = document.getElementById("timeline");
  if (imagen.style.display === "none") {
    imagen.style.display = "block";
  } else {
    imagen.style.display = "none";
  }
}
