// callback es una funcion que ejecuta una funcion  (lamar de vuelta)

function mostrarAlerta(){
    alert("Hola !!!");
}

const boton = document.querySelector("button");

boton.addEventListener("click",mostrarAlerta);