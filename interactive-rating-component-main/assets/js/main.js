
let botonSeleccionado = 0;
const botones = document.querySelectorAll('.radio');
const elementoInfo = document.getElementById('info');
const btnColor = document.getElementById('colorFondo');

// Obtener el color del texto del elemento
        const colorTextoInfo = getComputedStyle(elementoInfo).color;

        const colorBotonInicial = getComputedStyle(colorFondo).backgroundColor;
        const colorBotonInicialTexto = getComputedStyle(elementoInfo).color;

        

botones.forEach( (btn) => {
    btn.addEventListener('click', (event) => {

            
                if (botonSeleccionado) {
                    botonSeleccionado.style.backgroundColor = colorBotonInicial; // Color inicial del botón
                    botonSeleccionado.style.color = colorBotonInicialTexto; // Color del texto inicial del botón
                  }
              
                  // Obtener el botón que se ha clicado (elemento en el que se produjo el evento)
                  const botonClicado = event.target;

                  let valor = botonClicado.textContent;

                  const elementoIngresar = document.querySelector('.ingresar');

// Ingresar el valor recuperado en el elemento p
elementoIngresar.textContent = valor;

        //he recogido el color del texto del elemento info y lo he guardado en la variable colorTextoInfo

        btn.style.backgroundColor = colorTextoInfo;
        btn.style.color = 'white';

        botonSeleccionado = botonClicado;


    });

    btn.addEventListener('mouseenter', () => {
        if (btn !== botonSeleccionado) {
          btn.style.backgroundColor = '#FB7312'; // Color naranja
          btn.style.color = 'white';
        }
      });
    
      // Restablecer el color del botón al azul cuando se deje de pasar el ratón sobre él
      btn.addEventListener('mouseleave', () => {
        if (btn !== botonSeleccionado) {
          btn.style.backgroundColor = colorBotonInicial; // Color inicial del botón
          btn.style.color =  colorBotonInicialTexto; // Color del texto inicial del botón
        }
      });
    });

    

    document.addEventListener('DOMContentLoaded', () => {
        // Obtener el botón de envío por su id
        const botonSubmit = document.getElementById('submit');
      
        // Agregar un evento click al botón de envío
        botonSubmit.addEventListener('click', () => {
          // Obtener el contenido inicial y el contenido después de "submit" por su id
          const contenidoInicial = document.getElementById('contenidoInicial');
          const contenidoSubmit = document.getElementById('contenidoSubmit');
      
          // Cambiar el estilo para ocultar el contenido inicial y mostrar el contenido después de "submit"
          contenidoInicial.style.display = 'none';
          contenidoSubmit.style.display = 'block';
        });
      });














