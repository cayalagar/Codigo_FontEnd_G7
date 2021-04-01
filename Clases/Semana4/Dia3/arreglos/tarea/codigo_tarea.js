/*document.getElementById("cost")*/
let cancion_sel1 = document.querySelector("select");
let titulo1 = document.querySelector("h1");
let letra1 = document.querySelector("p");

let array_canciones=["Estoy tan lejos de mí Tan fuera de la realidad Sintiendo al mar hablar Me dice ¿qué haces aquí? ...",
                    "Hacer a alguien feliz No es difícil si te das  Si das todo tal vez sin recibir Lo podrás comprobar ...",
                    "Hey, hermano, píntate de blanco Y vamos a fumar el amor Con el pelo hasta las nubes Y mi guitarra sé que tengo el corazón No dejes que te arrastren a sentir lo que no quieres Aunque el mundo no te dé la razón ...",
                    "El amor es la razón de todo ser Aunque al principio sea dificil de entender Eres para mí mucho más que una canción Eres mas que un sueño del que no quiero despertar ...",
                    "Me largue de mi casa Me jodian cada vez Que mefumaba un winston Y me decian que hacer ...",
                    "El amor es la razón de todo ser Aunque al principio sea dificil de entender Eres para mí mucho más que una canción Eres mas que un sueño del que no quiero despertar ..."]

/* agregamos un elemnto alinico del array UNSHIFT(ELEMNTO)*/

array_canciones.unshift("la letra maximo primera posicion")
array_canciones.shift()


cancion_sel1.addEventListener('change', establecerCancion);

function establecerCancion() {

  let eleccion = cancion_sel1.value;

  switch (eleccion){
    case "cancion1":
      titulo1.textContent="Libre" 
      letra1.textContent =array_canciones[0] ;
      break;
    case "cancion2":
      titulo1.textContent="Sé que tú no estás solo" 
      letra1.textContent = array_canciones[1] ;
      break;
    case "cancion3":
      titulo1.textContent="Fumar el amor" 
      letra1.textContent = array_canciones[2] ;
      break;
    case "cancion4":
      titulo1.textContent="Lento" 
      letra1.textContent = array_canciones[3] ;
      break;
    case "cancion5":
      titulo1.textContent="Échale la culpa al rock and roll" 
      letra1.textContent = array_canciones[4] ;
      break;
    case "cancion6":
      titulo1.textContent="Una canción por Dios" 
      letra1.textContent = array_canciones[5] ;
      break;
    case "cancion7":
        titulo1.textContent="Una canción por Dios" 
        letra1.textContent = array_canciones[5] ;
        break;
     default:
      titulo1.textContent="" 
      letra1.textContent = "Opción no cofigurada";
      break; 
  }

/*
  if (eleccion === "cancion1") {
    titulo1.textContent="Libre" 
    letra1.textContent = "Estoy tan lejos de mí Tan fuera de la realidad Sintiendo al mar hablar Me dice ¿qué haces aquí? ...";
  } else if (eleccion === "cancion2") {
    titulo1.textContent="Sé que tú no estás solo" 
    letra1.textContent = "Hacer a alguien feliz No es difícil si te das  Si das todo tal vez sin recibir Lo podrás comprobar ...";
  } else if (eleccion === "cancion3") {
    titulo1.textContent="Fumar el amor" 
    letra1.textContent = "Hey, hermano, píntate de blanco Y vamos a fumar el amor Con el pelo hasta las nubes Y mi guitarra sé que tengo el corazón No dejes que te arrastren a sentir lo que no quieres Aunque el mundo no te dé la razón ...";
  } else if (eleccion === "cancion4") {
    titulo1.textContent="Lento" 
    letra1.textContent = "El amor es la razón de todo ser Aunque al principio sea dificil de entender Eres para mí mucho más que una canción Eres mas que un sueño del que no quiero despertar ...";
  } else if (eleccion === "cancion5") {
        titulo1.textContent="Échale la culpa al rock and roll" 
        letra1.textContent = "Me largue de mi casa Me jodian cada vez Que mefumaba un winston Y me decian que hacer ...";
  } else if (eleccion === "cancion6") {
        titulo1.textContent="Una canción por Dios" 
        letra1.textContent = "El amor es la razón de todo ser Aunque al principio sea dificil de entender Eres para mí mucho más que una canción Eres mas que un sueño del que no quiero despertar ...";
  } else {
    parrafo.textContent = "";
  }
 */ 
}
