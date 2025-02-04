document.addEventListener('DOMContentLoaded', function() {
  mostrarFechas();
  initArticulos(); // Asegúrate de llamar a initArticulos aquí
  getBrowserInfo(); // Llamada a getBrowserInfo para asegurar que se ejecuta al cargar la página
});

function mostrarFechas() {
  const fechaSistema = new Date();
  const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('fecha-sistema').textContent = fechaSistema.toLocaleDateString('es-ES', opciones);
  
  const fechaModificacion = new Date(document.lastModified);
  document.getElementById('fecha-modificacion').textContent = fechaModificacion.toLocaleDateString('es-ES', opciones);
}

function initArticulos() {
  const botonVerMas = document.getElementById('ver-mas');
  const articulosOcultos = document.querySelectorAll('.articulo.oculto');
  
  if (botonVerMas) {
    botonVerMas.addEventListener('click', function () {
      articulosOcultos.forEach(articulo => {
        articulo.classList.remove('oculto');
      });
      botonVerMas.style.display = 'none';
    });
  }
}

function getBrowserInfo() {
  const userAgent = navigator.userAgent;
  let browserName, fullVersion;

  if (userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Edg/") === -1) {
      browserName = "Chrome";
      fullVersion = userAgent.split("Chrome/")[1].split(" ")[0];
  } else if (userAgent.indexOf("Edg/") > -1) {
      browserName = "Microsoft Edge";
      fullVersion = userAgent.split("Edg/")[1].split(" ")[0];
  } else if (userAgent.indexOf("Firefox") > -1) {
      browserName = "Firefox";
      fullVersion = userAgent.split("Firefox/")[1];
  } else if (userAgent.indexOf("Safari") > -1) {
      browserName = "Safari";
      fullVersion = userAgent.split("Version/")[1].split(" ")[0];
  } else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident") > -1) {
      browserName = "Internet Explorer";
      fullVersion = userAgent.split("MSIE ")[1].split(";")[0];
  } else {
      browserName = "Desconocido";
      fullVersion = "Desconocido";
  }

  document.getElementById("browser-info").textContent = `Navegador: ${browserName}, Versión: ${fullVersion}`;
}