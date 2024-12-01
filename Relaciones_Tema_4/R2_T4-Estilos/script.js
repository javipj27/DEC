
function temaNormal(){

    document.querySelectorAll('*').forEach(element => {
        element.style.margin = '0';
        element.style.padding = '0';
        element.style.boxSizing = 'border-box';
    });

    document.body.style.backgroundColor="#1ab3e6"; 

    const section = document.getElementById("section"); 
    section.style.cssText=`
    width:90%; 
    background-color:#ffffcc; 
    float:right; 
    height:100vh; 
    `; 


    const header = document.getElementById("header"); 
    header.style.cssText=`
    background-color:white;
    border:1px solid black;
    boxShadow:0px 0px 5px blue;  
    width:80%;
    font-weight:bolder; 
    margin-left:20px; 
    margin-top:20px;  
    color:blue; 
   `;

    document.getElementById("normal").style.textDecoration="none"; 
    document.getElementById("minimalista").style.textDecoration="none";  
    document.getElementById("minimalista").style.marginLeft="20px"; 
    document.getElementById("titulo").style.cssText=`
        font-size:20px; 
        margin-left:20px; 
        margin-top:20px; 
    `;
     
    const oculto=document.getElementById("oculto"); 

    oculto.innerHTML="Utilizando CSS podemos incluso ocultar partes del sitio. <br> <b>Este párrafo debe ser solo visible en el tema Normal</b>";

    document.getElementById("marco").style.cssText=`
        border:1px solid black; 
        width:80%; 
        background-color:yellow; 
    `;

    const parrafos=document.querySelectorAll("p"); 

    parrafos.forEach(parrafo => {
    parrafo.style.marginLeft = '20px';
    parrafo.style.marginTop = '20px';
    parrafo.style.width="80%"; 
    ; 
    });      
    
    
}

function temaMinimalista(){

    document.querySelectorAll('*').forEach(element => {
        element.style.margin = '';
        element.style.padding = '';
        element.style.boxSizing = '';
    });

    const section = document.getElementById("section"); 
    section.style.cssText=``;

    document.body.style.backgroundColor="";
     
    const header = document.getElementById("header"); 
    header.style.cssText=``;

    document.getElementById("normal").style.textDecoration=""; 
    document.getElementById("minimalista").style.textDecoration="";  
    document.getElementById("minimalista").style.marginLeft=""; 
    document.getElementById("titulo").style.fontSize=""; 

    const oculto=document.getElementById("oculto"); 
    oculto.textContent=""; 

    document.getElementById("marco").style.cssText=``;
}
  


//Ejercicio 2
 let tamañoPorDefecto = 16; 
 let tamañoActual = tamañoPorDefecto;

 function aumentarTamaño() {
     tamañoActual += 2;
     document.getElementById("contenido").style.fontSize = tamañoActual + "px";
 }

 function disminuirTamaño() {
     tamañoActual -= 2;
     document.getElementById("contenido").style.fontSize = tamañoActual + "px";
 }

 function restablecerTamaño() {
     tamañoActual = tamañoPorDefecto;
     document.getElementById("contenido").style.fontSize = tamañoActual + "px";
 }

 function alinearIzquierda() {
     document.getElementById("contenido").style.textAlign = "left";
 }

 function alinearJustificado() {
     document.getElementById("contenido").style.textAlign = "justify";
 }