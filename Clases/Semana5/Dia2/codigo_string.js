/* const cadenaDeTexto="Esta es una cadena";

let otraCadenaTexto="Esta es otra cadena de texto";

const otraCadenaDeTextoObjeto = new String("Esta tambien es una cadena de texto tipo objeto");

console.log(typeof otraCadenaTexto, "|1|");

console.log(typeof otraCadenaDeTextoObjeto, "|2|");

console.log(otraCadenaTexto);
console.log(otraCadenaTexto[1]); */

/* function compara_String(Cadena1, Cadena2) {
  if (Cadena1.toLowerCase() === Cadena2.toLowerCase()) {
    console.log("Los String son iguales");
  } else {
    console.log("Los String son diferentes");
  }
}

let texto1 = "carlos";
let texto2 = "Carlos";

compara_String(texto1, texto2);

let cadenaMultilinea = `Esta es la linea 1
Esta seria la linea 2
Esta la linea 3`;

console.log(cadenaMultilinea);
 */


function cuentaVocales(xCadena){
    xCadena=xCadena.toLowerCase()
    let tamano=xCadena.length
    let segmento=''
    let contador = 0
    let cantidadVocales=0

    while (contador<= tamano){
        segmento=xCadena[contador]
        switch (segmento){
            case "a":
                contador=contador+1;
                break;
            case "e":
                contador=contador+1;
                break;
            case "i":
                contador=contador+1;
                break;
            case "o":
                contador=contador+1;
                break;
            case "u":
                contador=contador+1;
                break;
            default:
                contador=contador+0;
                break;
        }   
        contador ++;
    }
    console.log("Total de vocales: " + contador);
}

cuentaVocales("UNA CANCION DE AMOR DE LA MIA LA MAS TRISTE QUE PENA, ME DULE EL CORAZON HAY HAY")