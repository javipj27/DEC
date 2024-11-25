//Ejercicio 1
const clickear =()=>{
document.addEventListener('click', function() {
    alert('Anda, has tenido que pinchar en la pagina');
});
}

//Ejercicio 2
const coordenadas = () => {
    const coordenadaX = document.getElementById('coordenadaX');
    const coordenadaY = document.getElementById('coordenadaY');

    document.addEventListener("mousemove", (evento) => {
        const posX = evento.clientX; 
        const posY = evento.clientY; 

        coordenadaX.textContent = "Posición X: " + posX;
        coordenadaY.textContent = "Posición Y: " + posY;
    });
};

//Ejercicio 3
const mostrarTiempo = () => {
    const tiempoDiv = document.getElementById('tiempoTranscurrido');
    let tiempoInicio = Date.now(); 

    function actualizarTiempo() {
        const tiempoActual = Date.now(); // Obtiene el tiempo actual
        const tiempoTranscurrido = Math.floor((tiempoActual - tiempoInicio) / 1000); 
        tiempoDiv.textContent = `Tiempo transcurrido: ${tiempoTranscurrido} segundos`;
    }
    setInterval(actualizarTiempo, 1000);
};




//Ejercicio 4
 function crearCanva() {
    const container = document.getElementById('canvasContainer');
    const table = document.createElement('table');
    container.appendChild(table);

    for (let i = 0; i < 10; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('td');
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    agregarEventos();
}

function agregarEventos() {
    const table = document.querySelector('table');
    
    let ctrlPresionado = false;
    let shiftPresionado = false;

    table.addEventListener('mousemove', (event) => {
        const cell = event.target;

        if (cell.tagName.toLowerCase() === 'td') {
            if (ctrlPresionado) {
                cell.style.backgroundColor = 'red';  
            } else if (shiftPresionado) {
                cell.style.backgroundColor = 'blue';  
            }
        }
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Control') {
            ctrlPresionado = true;  
        } else if (event.key === 'Shift') {
            shiftPresionado = true;  
        }
    });

    window.addEventListener('keyup', (event) => {
        if (event.key === 'Control') {
            ctrlPresionado = false;  
        } else if (event.key === 'Shift') {
            shiftPresionado = false;  
        }
    });
}
//Ejercicio 5
function crearCanva2() {
    const container = document.getElementById('canvasContainer');
    const table = document.createElement('table');
    container.appendChild(table);

    for (let i = 0; i < 10; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('td');
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    agregarEventos2();
}

function agregarEventos2() {
    const table = document.querySelector('table');

    let ctrlPresionado = false;
    let shiftPresionado = false;

    table.addEventListener('mousemove', (event) => {
        const cell = event.target;

        if (cell.tagName.toLowerCase() === 'td') {
            if (ctrlPresionado) {
                cell.style.backgroundColor = 'red';
            } else if (shiftPresionado) {
                cell.style.backgroundColor = 'blue';
            }
        }
    });

    table.addEventListener('contextmenu', (event) => {
        event.preventDefault(); 
        const cell = event.target;

        if (cell.tagName.toLowerCase() === 'td') {
            cell.style.backgroundColor = ''; 
        }
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Control') {
            ctrlPresionado = true;
        } else if (event.key === 'Shift') {
            shiftPresionado = true;
        }
    });

    window.addEventListener('keyup', (event) => {
        if (event.key === 'Control') {
            ctrlPresionado = false;
        } else if (event.key === 'Shift') {
            shiftPresionado = false;
        }
    });

    const borrarBtn = document.getElementById('borrarCanvas');
    borrarBtn.addEventListener('click', () => {
        const cells = table.querySelectorAll('td');
        cells.forEach(cell => {
            cell.style.backgroundColor = ''; 
        });
    });
}



//Ejercicio 6
function iniciarColores() {

    const celdas = document.querySelectorAll('.color-celda');
    celdas.forEach((celda) => {
        const colorHex = celda.dataset.hex;
        const colorNombre = celda.dataset.nombre; 

        celda.addEventListener('mouseover', () => {
            celda.style.backgroundColor = colorHex;
            celda.textContent = ''; 
        });

        celda.addEventListener('mouseout', () => {
            celda.style.backgroundColor = ''; 
            celda.textContent = colorNombre; 
        });
    });
}

//Ejercicio 7
function iniciarFormulario() {
    const mensajeAyuda = document.getElementById('mensajeAyuda');
    
    function mostrarMensajeAyuda(mensaje) {
        mensajeAyuda.textContent = mensaje;
        mensajeAyuda.style.display = 'block'; 
    }

    function ocultarMensajeAyuda() {
        mensajeAyuda.textContent = '';
        mensajeAyuda.style.display = 'none';
    }

    const campos = document.querySelectorAll('.campo');

    campos.forEach((campo) => {
        campo.addEventListener('focus', () => {
            const mensaje = campo.dataset.ayuda; 
            mostrarMensajeAyuda(mensaje);
        });

        // Evento onBlur: Ocultar mensaje de ayuda
        campo.addEventListener('blur', () => {
            ocultarMensajeAyuda();
        });
    });
}

//Ejercicio 8
function reemplazarAmpersand() {
    const campos = document.querySelectorAll('.reemplazo');

    campos.forEach((campo) => {
        campo.addEventListener('blur', () => {
            campo.value = campo.value.replace(/&/g, 'and'); 
        });
    });
}


//EJercicio 9
function arrastre() {
    const imagen = document.getElementById('arrastrar');

    let arrastrando = false; 
    let offsetX = 0; 
    let offsetY = 0; 

    imagen.addEventListener('mousedown', (evento) => {
        arrastrando = true;
        const rect = imagen.getBoundingClientRect();
        offsetX = evento.clientX - rect.left;
        offsetY = evento.clientY - rect.top;
        imagen.style.position = 'absolute'; 
        imagen.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (evento) => {
        if (arrastrando) {
            const x = evento.clientX - offsetX;
            const y = evento.clientY - offsetY;
            imagen.style.left = `${x}px`;
            imagen.style.top = `${y}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        if (arrastrando) {
            arrastrando = false;
            imagen.style.cursor = 'grab';
        }
    });
}

//Ejercicio 10
 function arrastre2() {
    const imagenes = document.querySelectorAll('.arrastrable');

    imagenes.forEach((imagen) => {
        let arrastrando = false;
        let offsetX = 0;
        let offsetY = 0;

        imagen.addEventListener('mousedown', (evento) => {
            arrastrando = true;
            const rect = imagen.getBoundingClientRect();
            offsetX = evento.clientX - rect.left;
            offsetY = evento.clientY - rect.top;
            imagen.style.position = 'absolute';
            imagen.style.cursor = 'grabbing';
        });

        document.addEventListener('mousemove', (evento) => {
            if (arrastrando) {
                const x = evento.clientX - offsetX;
                const y = evento.clientY - offsetY;
                imagen.style.left = `${x}px`;
                imagen.style.top = `${y}px`;
            }
        });

        document.addEventListener('mouseup', () => {
            if (arrastrando) {
                arrastrando = false;
                imagen.style.cursor = 'grab';
            }
        });
    });
}


export{clickear , coordenadas , mostrarTiempo , crearCanva , crearCanva2 , iniciarColores , iniciarFormulario , reemplazarAmpersand , arrastre , arrastre2};
