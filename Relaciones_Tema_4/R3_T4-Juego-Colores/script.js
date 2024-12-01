// Variables principales
const rgbColorDisplay = document.getElementById("rgb-color");
const cuadrosContainer = document.getElementById("cuadros");
const resultadoDisplay = document.getElementById("resultado");

let colores = [];
let colorCorrecto;

// Función para generar un color RGB aleatorio
function generarColorRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Función para iniciar una nueva partida
function iniciarNuevaPartida() {
  colores = [];
  resultadoDisplay.textContent = "";
  cuadrosContainer.innerHTML = "";

  // Generar colores y seleccionar el correcto
  for (let i = 0; i < 6; i++) {
    colores.push(generarColorRGB());
  }
  colorCorrecto = colores[Math.floor(Math.random() * colores.length)];
  rgbColorDisplay.textContent = colorCorrecto;

  // Crear cuadros de colores
  colores.forEach(color => {
    const cuadro = document.createElement("div");
    cuadro.classList.add("cuadro");
    cuadro.style.backgroundColor = color;

    // Evento de clic para verificar respuesta
    cuadro.addEventListener("click", () => {
      if (color === colorCorrecto) {
        resultadoDisplay.textContent = "¡Correcto!";
        resultadoDisplay.style.color = "green";
        cambiarColores(colorCorrecto);
      } else {
        resultadoDisplay.textContent = "¡Intenta otra vez!";
        resultadoDisplay.style.color = "red";
        cuadro.style.visibility = "hidden";
      }
    });

    cuadrosContainer.appendChild(cuadro);
  });
}

// Función para cambiar todos los colores al correcto
function cambiarColores(color) {
  const cuadros = document.querySelectorAll(".cuadro");
  cuadros.forEach(cuadro => {
    cuadro.style.backgroundColor = color;
    cuadro.style.visibility = "visible";
  });
}

// Iniciar el juego al cargar la página
iniciarNuevaPartida();
