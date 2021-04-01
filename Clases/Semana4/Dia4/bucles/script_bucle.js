/*
for(let numero=0; numero<1000; numero++){
    if (numero % 3 === 0 || numero % 5 ===0 || numero % 7 ===0  ) {
        console.log(numero);
    }
}
*/
/*
let acumulado=0 ;
for(let numero=1; numero<10; numero++){
    if (numero % 3 === 0 || numero % 5 ===0 || numero % 6 ===0  ) {
        console.log(numero);
        acumulado=acumulado+numero // acumulado += numero 
    }
}

console.log("La suma es:", acumulado);
*/
/*
let contador = 1

while (contador<= 10){
   console.log("Milk :", contador )
    contador ++;
}
*/

let alumnos=["CARLOS","ANDRES","ALBERTO","JUAN"]
let informacion="Mis Alumnos son: "

//const texto=document.querySelector("p")
let texto = document.querySelector("p");

for (let indice=0; indice < alumnos.length ; indice++){
    informacion += alumnos[indice] +","
//    document.write(`<p>${alumnos[indice]}<p>`)
}
console.log(alumnos.length);
console.log(informacion);
texto.textContent = informacion;
