//carlos-sarmiento: Aunque no hay nada más afuera de la función, es buena idea poner el use strict afuera por si se desea incluir más cosas después
'use strict';
function displayTimeline() {
  var imagen = document.getElementById("timeline");
  if (imagen.style.display === "none") {
    imagen.style.display = "block";
  } else {
    imagen.style.display = "none";
  }
}
