// Variables globales
let botonSeleccionado = null;
const botones = document.querySelectorAll('.radio');
const elementoInfo = document.getElementById('info');
const btnColor = document.getElementById('colorFondo');

// Obtener colores iniciales
const colorTextoInfo = getComputedStyle(elementoInfo).color;
const colorBotonInicial = getComputedStyle(btnColor).backgroundColor;
const colorBotonInicialTexto = getComputedStyle(elementoInfo).color;

// Función para restablecer el estilo del botón
function resetearEstiloBoton(btn) {
  btn.style.backgroundColor = colorBotonInicial;
  btn.style.color = colorBotonInicialTexto;
}

// Función para cambiar el estilo del botón seleccionado
function seleccionarBoton(botonClicado) {
  if (botonSeleccionado) {
    resetearEstiloBoton(botonSeleccionado);
  }
  botonClicado.style.backgroundColor = colorTextoInfo;
  botonClicado.style.color = 'white';
  botonSeleccionado = botonClicado;
}

// Evento click para los botones
botones.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    const botonClicado = event.target;
    let valor = botonClicado.textContent;
    const elementoIngresar = document.querySelector('.ingresar');
    elementoIngresar.textContent = valor;
    seleccionarBoton(botonClicado);
  });

  // Evento mouseenter para los botones
  btn.addEventListener('mouseenter', () => {
    if (btn !== botonSeleccionado) {
      btn.style.backgroundColor = '#FB7312'; // Color naranja
      btn.style.color = 'white';
    }
  });

  // Evento mouseleave para los botones
  btn.addEventListener('mouseleave', () => {
    if (btn !== botonSeleccionado) {
      resetearEstiloBoton(btn);
    }
  });
});

// Evento click para el botón de envío
document.addEventListener('DOMContentLoaded', () => {
  const botonSubmit = document.getElementById('submit');
  botonSubmit.addEventListener('click', () => {
    const contenidoInicial = document.getElementById('contenidoInicial');
    const contenidoSubmit = document.getElementById('contenidoSubmit');
    contenidoInicial.style.display = 'none';
    contenidoSubmit.style.display = 'block';
  });
});