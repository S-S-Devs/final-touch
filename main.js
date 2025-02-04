document.addEventListener('DOMContentLoaded', function() {
  mostrarFechas();
  initArticulos(); // Asegúrate de llamar a initArticulos aquí
  getBrowserInfo(); // Llamada a getBrowserInfo para asegurar que se ejecuta al cargar la página
  initFormularios();
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

// FORMULARIOS
function initFormularios() {
  const inputs = document.querySelectorAll('input[type="text"], textarea, input[type="email"], input[type="number"]');
  const form = document.getElementById('personal-info-form');

  inputs.forEach(input => {
    input.addEventListener('focus', function () {
      this.style.backgroundColor = '#f880de'; // Cambia el color de fondo al enfocar
    });

    input.addEventListener('blur', function () {
      this.style.backgroundColor = ''; // Restaura el color de fondo original
      this.value = this.value.toUpperCase(); // Convierte el texto a mayúsculas
    });
  });

  document.getElementById("datos").onclick = function (event) {
    event.preventDefault(); // Evita el envío del formulario por defecto
    let valid = true;
    inputs.forEach(input => {
      if (!input.value) {
        valid = false;
        input.style.borderColor = 'red'; // Marca el campo vacío en rojo
      } else {
        input.style.borderColor = ''; // Restaura el color del borde
      }
    });

    if (valid) {
      alert('Nombre: ' + form.elements[0].value + '\n'
         + 'Correo: ' + form.elements[1].value + '\n' 
         + 'Edad: ' + form.elements[2].value + '\n');  
      document.getElementById("login").style.display = "none";
      document.getElementById("ocultar").style.display = "block";
    } else {
      alert('Por favor, complete todos los campos obligatorios.');
    }
  }
}

// Muestra el formulario de login
function mostrarLogin() {
  document.getElementById("login").style.display = "block";
  document.getElementById("ocultar").style.display = "none";
}

// Muestra la página de Caos Melódico
function mostrarOcultar() {
  document.getElementById("login").style.display = "none";
  document.getElementById("ocultar").style.display = "block";
}
