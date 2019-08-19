function displayTimeline() {
  'use strict';
  var imagen = document.getElementById("timeline");
  if (imagen.style.display === "none") {
    imagen.style.display = "block";
  } else {
    imagen.style.display = "none";
  }
}