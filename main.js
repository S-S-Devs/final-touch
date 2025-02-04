document.addEventListener('DOMContentLoaded', function() {
  mostrarFechas();
  initArticulos(); // Asegúrate de llamar a initArticulos aquí
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